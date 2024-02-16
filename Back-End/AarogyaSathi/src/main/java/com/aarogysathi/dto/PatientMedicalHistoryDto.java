package com.aarogysathi.dto;

import java.time.LocalDate;
import java.util.List;

import com.aarogyasathi.entity.Medicine;

public class PatientMedicalHistoryDto {

	private LocalDate visitDate;
	// private String doctorName;
	private String symptoms;
	// private String medicine;
	private String suggestion;
	private int patientId;
	private List<Medicine> medicine;

	public List<Medicine> getMedicine() {
		return medicine;
	}

	public void setMedicine(List<Medicine> medicine) {
		this.medicine = medicine;
	}

	public LocalDate getVisitDate() {
		return visitDate;
	}

	public void setVisitDate(LocalDate visitDate) {
		this.visitDate = visitDate;
	}

//		public String getDoctorName() {
//			return doctorName;
//		}
//		public void setDoctorName(String doctorName) {
//			this.doctorName = doctorName;
//		}
	public String getSymptoms() {
		return symptoms;
	}

	public void setSymptoms(String symptoms) {
		this.symptoms = symptoms;
	}

//		public String getMedicine() {
//			return medicine;
//		}
//		public void setMedicine(String medicine) {
//			this.medicine = medicine;
//		}
	public String getSuggestion() {
		return suggestion;
	}

	public void setSuggestion(String suggestion) {
		this.suggestion = suggestion;
	}

	public int getPatientId() {
		return patientId;
	}

	public void setPatientId(int patientId) {
		this.patientId = patientId;
	}

}
