package com.aarogysathi.dto;
import java.time.LocalDate;
import java.time.LocalTime;

public class AppointmentUpdateRequest {

	    private LocalDate newDate;
	    private LocalTime newTime;


	    public LocalTime getNewTime() {
			return newTime;
		}

		public void setNewTime(LocalTime newTime) {
			this.newTime = newTime;
		}

		public LocalDate getNewDate() {
	        return newDate;
	    }

	    public void setNewDate(LocalDate newDate) {
	        this.newDate = newDate;
	    }
}