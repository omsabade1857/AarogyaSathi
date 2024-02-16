package com.aarogysathi.dto;

import com.aarogyasathi.entity.PatientMedicalHistory;

public class MedicineDto {

	private String medicine;
	private String dosage;
	private String duration;
	// private String advice;
	private int recordId;

	public PatientMedicalHistory getPatientMedicalHistory() {
		return PatientMedicalHistory;
	}

	public void setPatientMedicalHistory(PatientMedicalHistory patientMedicalHistory) {
		PatientMedicalHistory = patientMedicalHistory;
	}

	public PatientMedicalHistory PatientMedicalHistory;

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
//	public void setAdvice(String advice) {
//		this.advice = advice;
//	}
	public int getRecordId() {
		return recordId;
	}

	public void setRecordId(int recordId) {
		this.recordId = recordId;
	}

}
