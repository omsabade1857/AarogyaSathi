package com.aarogysathi.dto;

import java.time.LocalDate;
import java.time.LocalTime;

public class AppointmentRequest {
	        private int patientId;
	        private int doctorId;
	        private LocalDate visitDate;
	        private LocalTime visitTime;
	        
			public LocalTime getVisitTime() {
				return visitTime;
			}
			public void setVisitTime(LocalTime visitTime) {
				this.visitTime = visitTime;
			}
			public int getPatientId() {
				return patientId;
			}
			public void setPatientId(int patientId) {
				this.patientId = patientId;
			}
			public int getDoctorId() {
				return doctorId;
			}
			public void setDoctorId(int doctorId) {
				this.doctorId = doctorId;
			}
			public LocalDate getVisitDate() {
				return visitDate;
			}
			public void setVisitDate(LocalDate visitDate) {
				this.visitDate = visitDate;
			}
	        
	        

}