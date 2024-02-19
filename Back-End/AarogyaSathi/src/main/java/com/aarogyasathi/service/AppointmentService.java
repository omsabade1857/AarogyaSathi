package com.aarogyasathi.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aarogyasathi.entity.Appointment;
import com.aarogyasathi.entity.Appointment.AppointmentStatuss;
import com.aarogyasathi.exception.AppointmentException;
import com.aarogyasathi.repository.AppointmentRepository;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appRepo;

    public int addAppointment(Appointment appointment) {
        try {
            Appointment savedApp = appRepo.save(appointment);
            return savedApp.getAppId();
        } catch (Exception e) {
            // Handle the exception
            e.printStackTrace(); // or log the error
            // You can throw a custom exception or return a specific error code here
            return 0; // Return 0 indicating failure
        }
    }


    public List<Object[]> getAppointmentsAndDoctorsByPatientId(int patientId) {
        try {
            return appRepo.findAppointmentsAndDoctorByPatientId(patientId);
        } catch (Exception e) {
            throw e;
        }
    }

    public Appointment updateAppointmentDateTime(int appointmentId, LocalDate newDate, LocalTime newTime) throws AppointmentException {
        Optional<Appointment> appointmentOptional = appRepo.findById(appointmentId);
        if (appointmentOptional.isPresent()) {
            Appointment existingAppointment = appointmentOptional.get();
            existingAppointment.setVisitDate(newDate);
            existingAppointment.setVisitTime(newTime); // Set appointment time
            return appRepo.save(existingAppointment);
        } else {
            throw new AppointmentException("Appointment not found with ID: " + appointmentId);
        }
    }

    
    public void updateAppointmentStatus(int appointmentId, AppointmentStatuss status) throws Exception {
        Optional<Appointment> appointmentOptional = appRepo.findById(appointmentId);
        
        if (appointmentOptional.isPresent()) {
            Appointment appointment = appointmentOptional.get();
            appointment.setStatus(status);
            appRepo.save(appointment);
        } else {
            throw new Exception("Appointment not found with ID: " + appointmentId);
        }
    }

    public Optional<Appointment> getAppointmentById(int appointmentId) {
        return appRepo.findById(appointmentId);
    }

    public void deleteAppointment(int appointmentId) {
        appRepo.deleteById(appointmentId);
    }

    public List<Object[]> getAppointmentsAndPatientsByDoctorId(int doctorId) {
        try {
            return appRepo.findAppointmentsAndPatientsByDoctorId(doctorId);
        } catch (Exception e) {
            throw e;
        }
    }
}