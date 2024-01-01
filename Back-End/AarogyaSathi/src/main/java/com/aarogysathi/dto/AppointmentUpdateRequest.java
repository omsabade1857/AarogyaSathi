package com.aarogysathi.dto;
import java.time.LocalDate;

public class AppointmentUpdateRequest {

	    private LocalDate newDate;


	    public LocalDate getNewDate() {
	        return newDate;
	    }

	    public void setNewDate(LocalDate newDate) {
	        this.newDate = newDate;
	    }
}
