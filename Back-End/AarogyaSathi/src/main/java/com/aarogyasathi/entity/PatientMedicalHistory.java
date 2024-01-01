
	package com.aarogyasathi.entity;

	import java.time.LocalDate;

	import jakarta.persistence.Entity;
	import jakarta.persistence.GeneratedValue;
	import jakarta.persistence.GenerationType;
	import jakarta.persistence.Id;
	import jakarta.persistence.JoinColumn;
	import jakarta.persistence.ManyToOne;
	import jakarta.persistence.Table;

	@Entity
	@Table(name = "as_patient_history")
	public class PatientMedicalHistory {

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private int recordId;
		private LocalDate visitDate;
		private String doctorName;
		private String symptoms;
		private String medicine;
		private String suggestion;

		@ManyToOne
		@JoinColumn(name = "patientId")
		private Patient patient;

		public int getRecordId() {
			return recordId;
		}

		public void setRecordId(int recordId) {
			this.recordId = recordId;
		}

		public LocalDate getVisitDate() {
			return visitDate;
		}

		public void setVisitDate(LocalDate visitDate) {
			this.visitDate = visitDate;
		}

		public String getDoctorName() {
			return doctorName;
		}

		public void setDoctorName(String doctorName) {
			this.doctorName = doctorName;
		}

		public String getSymptoms() {
			return symptoms;
		}

		public void setSymptoms(String symptoms) {
			this.symptoms = symptoms;
		}

		public String getMedicine() {
			return medicine;
		}

		public void setMedicine(String medicine) {
			this.medicine = medicine;
		}

		public String getSuggestion() {
			return suggestion;
		}

		public void setSuggestion(String suggestion) {
			this.suggestion = suggestion;
		}

		public Patient getPatient() {
			return patient;
		}

		public void setPatient(Patient patient) {
			this.patient = patient;
		}

	}

