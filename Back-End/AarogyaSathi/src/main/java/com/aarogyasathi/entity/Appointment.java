package com.aarogyasathi.entity;

import java.time.LocalDate;
import java.time.LocalTime;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="as_appointments")
public class Appointment {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int appId;
	
	private LocalDate visitDate;
	private LocalTime visitTime;
	
	public enum AppointmentStatuss {
	    PENDING,
	    ACCEPTED,
	    REJECTED
	}
	@Enumerated(EnumType.STRING)
    private AppointmentStatuss status = AppointmentStatuss.PENDING; // Default status is PENDING
	
	public AppointmentStatuss getStatus() {
		return status;
	}

	public void setStatus(AppointmentStatuss status) {
		this.status = status;
	}

	public LocalTime getVisitTime() {
		return visitTime;
	}

	public void setVisitTime(LocalTime visitTime) {
		this.visitTime = visitTime;
	}

	@ManyToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "patientId")
	private Patient patient;
	
	@ManyToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "doctorId ")
	private Doctor doctor;

	public int getAppId() {
		return appId;
	}

	public void setAppId(int appId) {
		this.appId = appId;
	}

	public LocalDate getVisitDate() {
		return visitDate;
	}

	public void setVisitDate(LocalDate visitDate) {
		this.visitDate = visitDate;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}
	
	
}