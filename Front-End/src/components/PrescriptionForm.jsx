import axios from "axios";
import { useState } from "react";
import "./PrescriptionForm.css";
import PatientHistory from "./PatientHistory";

export default function MedicalReport() {
  const [medicalData, setMedicalData] = useState({});
  const [responseData, setResponseData] = useState({});

  function handleInput(event) {
    const name = event.target.name;
    let value = event.target.value;

    if (name === "patientId" && value !== "") {
      value = parseInt(value, 10);
    }

    setMedicalData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }

  function medicalReport(event) {
    event.preventDefault();
    console.log(medicalData);

    const cleanedData = Object.fromEntries(
      Object.entries(medicalData).map(([key, value]) => [
        key,
        value === undefined ? null : value,
      ])
    );

    let url = "http://localhost:8080/report";

    axios
      .post(url, cleanedData)
      .then((response) => {
        setResponseData(response.data);
        // if (response.data.status) {
          alert("Medical report submitted successfully!");
        // } else {
          // alert("Failed to submit medical report.");
        // }
        

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
          <label htmlFor="patientId">Patient ID :</label>
          <input type="text" name="patientId" onChange={handleInput} /> <br />
          <label htmlFor="visitDate">Visiting Date :</label>
          <input type="date" name="visitDate" onChange={handleInput} /> <br />
          <label htmlFor="doctorName">Doctor Name :</label>
          <input type="text" name="doctorName" onChange={handleInput} /> <br />
          <label htmlFor="symptoms">Symptoms :</label>
          <input type="text" name="symptoms" onChange={handleInput} /> <br />
          <label htmlFor="medicine">Medicines :</label>
          <input type="text" name="medicine" onChange={handleInput} /> <br />
          <label htmlFor="suggestion">Suggestions :</label>
          <input type="text" name="suggestion" onChange={handleInput} /> <br />
          <button type="submit" id="button">
            Submit Medical Report
          </button>
        </form>

      </div>

    </div>
  );
}