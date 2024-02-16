import React, { useState } from "react";
import axios from "axios";
import "./PatientHistory.css";

export default function PatientHistory() {
  const [patientId, setPatientId] = useState("");
  const [medicalHistory, setMedicalHistory] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const searchPatientHistory = async () => {
    if (!patientId) {
      setError("Patient ID is required");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8080/history/${patientId}`
      );
      console.log("Response data:", response.data); // Log response data
      setMedicalHistory(response.data);
      setError("");
    } catch (error) {
      console.error("Error fetching medical history:", error.message);
      setMedicalHistory([]);
      setError("An error occurred while fetching the medical history.");
    } finally {
      setLoading(false);
    }
  };

  const downloadMedicalHistory = async () => {
    if (!patientId) {
      setError("Patient ID is required");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:8080/history/${patientId}/download`,
        {
          responseType: "blob",
        }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "medical_history.pdf");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error downloading medical history:", error.message);
    }
  };

  return (
    <div className="patient-history">
      <h2>Patient Medical History</h2>

      <label htmlFor="patientId">Enter Patient ID:</label>
      <input
        type="text"
        name="patientId"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
        required
      />

      <button
        type="button"
        onClick={searchPatientHistory}
        disabled={!patientId || loading}
      >
        {loading ? "Searching..." : "Search Medical History"}
      </button>

      <button type="button" onClick={downloadMedicalHistory}>
        Download Medical History
      </button>

      {error && <p className="error-message">{error}</p>}

      {medicalHistory.length > 0 && (
        <div className="history_tb">
          <h5>Medical History Table</h5>
          <table>
            <thead>
              <tr>
                <th>Visiting Date</th>
                <th>Symptoms</th>
                <th>Medicines</th>
                <th>Suggestions</th>
              </tr>
            </thead>
            <tbody>
              {medicalHistory.map((record) => (
                <tr key={record.recordId}>
                  <td>{record.visitDate}</td>
                  <td>{record.symptoms}</td>
                  <td>
                    {record.medicines.map((medicine) => (
                      <div key={medicine.medicineId}>
                        {medicine.medicine}, Dosage: {medicine.dosage}, Duration: {medicine.duration}
                      </div>
                    ))}
                  </td>
                  <td>{record.suggestion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {medicalHistory.length === 0 && !error && !loading && (
        <p>No medical history found for the specified patient ID.</p>
      )}
    </div>
  );
}
