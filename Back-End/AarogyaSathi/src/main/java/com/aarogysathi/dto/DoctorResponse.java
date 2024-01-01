package com.aarogysathi.dto;

import com.aarogyasathi.entity.Doctor;


public class DoctorResponse {

    private boolean status;
    private String message;
    private Doctor doctor;

    public DoctorResponse(boolean status, String message, Doctor doctor) {
        this.status = status;
        this.message = message;
        this.doctor = doctor;
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

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }
}
