
package com.aarogyasathi.entity;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "as_patient_history")
public class PatientMedicalHistory {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int recordId;
	private LocalDate visitDate;
	private String symptoms;
	// private String doctorName;
	private String suggestion;

	// private String medicine;

	@ManyToOne
	@JoinColumn(name = "patientId")
	private Patient patient;

	@OneToMany(mappedBy = "patientMedicalHistory", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private List<Medicine> medicines;
//		
//		 @OneToMany(mappedBy = "patientMedicalHistory", cascade = CascadeType.ALL)
//		    private Medicine medicines;

	public int getRecordId() {
		return recordId;
	}

	public void setRecordId(int recordId) {
		this.recordId = recordId;
	}

	public List<Medicine> getMedicines() {
		return medicines;
	}

	public void setMedicines(List<Medicine> medicines) {
		this.medicines = medicines;
	}

//		public Medicine getMedicines() {
//			return medicines;
//		}
//
//		public void setMedicines(Medicine medicines) {
//			this.medicines = medicines;
//		}

	public LocalDate getVisitDate() {
		return visitDate;
	}

	public void setVisitDate(LocalDate visitDate) {
		this.visitDate = visitDate;
	}

	public String getSymptoms() {
		return symptoms;
	}

	public void setSymptoms(String symptoms) {
		this.symptoms = symptoms;
	}

//		public String getDoctorName() {
//			return doctorName;
//		}
//
//		public void setDoctorName(String doctorName) {
//			this.doctorName = doctorName;
//		}

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

//		public void setMedicines(List<Medicine> medicine) {
//			// TODO Auto-generated method stub
//			this.medicine = medicine;
//			
//		}

//		public String getMedicine() {
//			return medicine;
//		}

//		public void setMedicine(String medicine) {
//			this.medicine = medicine;
//		}

}
