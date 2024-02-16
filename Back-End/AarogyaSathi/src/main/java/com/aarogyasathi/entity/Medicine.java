package com.aarogyasathi.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "as_medicine")
public class Medicine {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int medicineId;
	private String medicine;
	private String dosage;
	private String duration;
	// private String advice;
 @JsonIgnore
 @ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "recordId")
	private PatientMedicalHistory patientMedicalHistory;

	public int getMedicineId() {
		return medicineId;
	}

	public void setMedicineId(int medicineId) {
		this.medicineId = medicineId;
	}

	public String getMedicine() {
		return medicine;
	}

	public void setMedicine(String medicine) {
		this.medicine = medicine;
	}

	public String getDosage() {
		return dosage;
	}

	public void setDosage(String dosage) {
		this.dosage = dosage;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

//	public String getAdvice() {
//		return advice;
//	}
//
//	public void setAdvice(String advice) {
//		this.advice = advice;
//	}

	public PatientMedicalHistory getPatientMedicalHistory() {
		return patientMedicalHistory;
	}

	public void setPatientMedicalHistory(PatientMedicalHistory patientMedicalHistory) {
		this.patientMedicalHistory = patientMedicalHistory;
	}

}
