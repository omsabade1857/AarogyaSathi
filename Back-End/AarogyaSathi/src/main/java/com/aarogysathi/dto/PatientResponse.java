package com.aarogysathi.dto;

import com.aarogyasathi.entity.Patient;

public class PatientResponse {

    private boolean status;
    private String message;
    private Patient patient;

    public PatientResponse(boolean status, String message, Patient patient) {
        this.status = status;
        this.message = message;
        this.patient = patient;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }
}
