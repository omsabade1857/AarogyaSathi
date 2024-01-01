package com.aarogyasathi.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aarogyasathi.entity.Appointment;
import com.aarogyasathi.entity.Doctor;
import com.aarogyasathi.exception.AppointmentException;
import com.aarogyasathi.repository.AppointmentRepository;

@Service
public class AppointmentService {

	@Autowired
	private AppointmentRepository appRepo;
	
	public int addAppointment(Appointment appointment) {

		Appointment savedApp=appRepo.save(appointment);
		
		return savedApp.getAppId();
	}
	
	 public List<Object[]> getAppointmentsAndDoctorsByPatientId(int patientId) {
	        try {
//	            logger.info("Fetching appointments and patients for doctorId: {}", doctorId);
	            return appRepo.findAppointmentsAndDoctorByPatientId(patientId);
	        } catch (Exception e) {
//	            logger.error("Error fetching appointments and patients", e);
	            throw e; 
	        }
	    }
	
	 public void updateAppointmentDate(Appointment appointment) {
	        int appointmentId = appointment.getAppId(); 
	        LocalDate newDate = appointment.getVisitDate(); 

	        Optional<Appointment> appointmentOptional = appRepo.findById(appointmentId);

	        if (appointmentOptional.isPresent()) {
	            Appointment existingAppointment = appointmentOptional.get();
	            existingAppointment.setVisitDate(newDate);
	            appRepo.save(existingAppointment);
	        } else {
	            
	            //Exception 
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
