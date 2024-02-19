import React, { useState } from "react";
import axios from "axios";
import "./PrescriptionForm.css";
import PatientHistory from "./PatientHistory";

export default function MedicalReport() {
  const [medicalData, setMedicalData] = useState({
    patientMedicalHistoryDto: {
      visitDate: "",
      symptoms: "",
      suggestion: "",
      patientId: "" // No default patient ID
    },
    medicineDto: []
  });
  const [responseData, setResponseData] = useState({});
  const [records, setRecords] = useState([]);

  function handleInput(event) {
    const { name, value } = event.target;
    const updatedData = { ...medicalData };
    if (name === "medicine" || name === "dosage" || name === "duration") {
      const lastMedicineIndex = updatedData.medicineDto.length - 1;
      updatedData.medicineDto[lastMedicineIndex][name] = value;
    } else {
      updatedData.patientMedicalHistoryDto[name] = value;
    }
    setMedicalData(updatedData);
  }

  function addMedicineField() {
    setMedicalData(prevData => ({
      ...prevData,
      medicineDto: [...prevData.medicineDto, { medicine: "", dosage: "", duration: "" }]
    }));
  }

  function removeMedicineField(index) {
    setMedicalData(prevData => {
      const updatedMedicineDto = [...prevData.medicineDto];
      updatedMedicineDto.splice(index, 1);
      return { ...prevData, medicineDto: updatedMedicineDto };
    });
  }

  function medicalReport(event) {
    event.preventDefault();
    console.log(medicalData);

    let url = "http://localhost:8080/report";

    axios
      .post(url, medicalData)
      .then(response => {
        setResponseData(response.data);
        alert("Medical report submitted successfully!");
      })
      .catch(error => {
        console.error("Error submitting medical report:", error);
        alert("An error occurred while submitting the medical report.");
      });

    setRecords([...records, medicalData]);

    setMedicalData({
      patientMedicalHistoryDto: {
        visitDate: "",
        symptoms: "",
        suggestion: "",
        patientId: "" // No default patient ID
      },
      medicineDto: []
    });
  }

  return (
    <div className="report">
      <div className="history">
        <PatientHistory />
      </div>

      <div className="medical-report-container  pulse">
        <h2 id="head">Patient Medical Report</h2>
        <h1>{responseData.customerId}</h1>

        <form onSubmit={medicalReport}>
          <div className="form-group">
            <label htmlFor="patientId">Patient ID:</label>
            <input
              type="text"
              name="patientId"
              value={medicalData.patientMedicalHistoryDto.patientId}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="visitDate">Visiting Date:</label>
            <input
              required
              type="date"
              name="visitDate"
              value={medicalData.patientMedicalHistoryDto.visitDate}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="symptoms">Symptoms:</label>
            <input
              required
              pattern="^[a-zA-Z\s]+$"
              type="text"
              name="symptoms"
              value={medicalData.patientMedicalHistoryDto.symptoms}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="suggestion">Suggestions:</label>
            <input
              required
              type="text"
              name="suggestion"
              value={medicalData.patientMedicalHistoryDto.suggestion}
              onChange={handleInput}
            />
          </div>
          {medicalData.medicineDto.map((medicine, index) => (
            <div key={index}>
              <div className="form-group">
                <label htmlFor={`medicine-${index}`}>Medicine:</label>
                <input
                  required
                  type="text"
                  name="medicine"
                  value={medicine.medicine}
                  onChange={handleInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`dosage-${index}`}>Dosage:</label>
                <input
                  required
                  type="text"
                  name="dosage"
                  value={medicine.dosage}
                  onChange={handleInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`duration-${index}`}>Duration:</label>
                <input
                  required
                  className="form-control"
                  type="text"
                  name="duration"
                  value={medicine.duration}
                  onChange={handleInput}
                />
              </div>
              {index > 0 && (
                <button
                  type="button"
                  className="btn btn-danger mb-1"
                  onClick={() => removeMedicineField(index)}
                >
                  Remove Medicine
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className="btn btn-primary"
            onClick={addMedicineField}
          >
            Add Medicine
          </button>
          <button type="submit" className="btn btn-primary mx-5">
            Submit Report
          </button>
        </form>
      </div>
    </div>
  );
}
