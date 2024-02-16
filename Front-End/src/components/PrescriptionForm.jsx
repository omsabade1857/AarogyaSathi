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

  function handleInput(event) {
    const { name, value } = event.target;
    const updatedData = { ...medicalData };
    if (name === "medicine" || name === "dosage" || name === "duration") {
      // If medicine field, update the last medicine in the array
      const lastMedicineIndex = updatedData.medicineDto.length - 1;
      updatedData.medicineDto[lastMedicineIndex][name] = value;
    } else {
      // Otherwise, update patient medical history
      updatedData.patientMedicalHistoryDto[name] = value;
    }
    setMedicalData(updatedData);
  }

  function addMedicineField() {
    setMedicalData((prevData) => ({
      ...prevData,
      medicineDto: [...prevData.medicineDto, { medicine: "", dosage: "", duration: "" }]
    }));
  }

  function removeMedicineField(index) {
    setMedicalData((prevData) => {
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
      .then((response) => {
        setResponseData(response.data);
        alert("Medical report submitted successfully!");
      })
      .catch((error) => {
        console.error("Error submitting medical report:", error);
        alert("An error occurred while submitting the medical report.");
      });
  }

  return (
    <div className="report">
      <div className="history">
        <PatientHistory />
      </div>

      <div className="medical-report-container">
        <h2 id="head">Patient Medical Report</h2>
        <h1>{responseData.customerId}</h1>
        
        <form onSubmit={medicalReport}>
          <div className="form-group">
            <label htmlFor="patientId">Patient ID:</label>
            <input
              type="text"
              name="patientId"
              value={medicalData.patientMedicalHistoryDto.patientId}
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="visitDate">Visiting Date:</label>
            <input
              type="date"
              name="visitDate"
              value={medicalData.patientMedicalHistoryDto.visitDate}
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="symptoms">Symptoms:</label>
            <input
              type="text"
              name="symptoms"
              value={medicalData.patientMedicalHistoryDto.symptoms}
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="suggestion">Suggestions:</label>
            <input
              type="text"
              name="suggestion"
              value={medicalData.patientMedicalHistoryDto.suggestion}
              onChange={(e) => handleInput(e)}
            />
          </div>
          {medicalData.medicineDto.map((medicine, index) => (
            <div key={index}>
              <div className="form-group">
                <label htmlFor={`medicine-${index}`}>Medicine:</label>
                <input
                  type="text"
                  name="medicine"
                  value={medicine.medicine}
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`dosage-${index}`}>Dosage:</label>
                <input
                  type="text"
                  name="dosage"
                  value={medicine.dosage}
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`duration-${index}`}>Duration:</label>
                <input
                  type="text"
                  name="duration"
                  value={medicine.duration}
                  onChange={(e) => handleInput(e)}
                />
              </div>
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeMedicineField(index)}
                >
                  Remove Medicine
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={addMedicineField}>
            Add Medicine
          </button>
          <button type="submit" id="button">
            Submit Medical Report
          </button>
        </form>
      </div>
    </div>
  );
}
