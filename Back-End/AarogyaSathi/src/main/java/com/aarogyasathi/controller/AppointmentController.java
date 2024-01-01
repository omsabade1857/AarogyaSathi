package com.aarogyasathi.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.aarogyasathi.entity.Appointment;
import com.aarogyasathi.entity.Doctor;
import com.aarogyasathi.entity.Patient;
import com.aarogyasathi.exception.AppointmentException;
import com.aarogyasathi.service.AppointmentService;
import com.aarogyasathi.service.DoctorService;
import com.aarogyasathi.service.PatientService;
import com.aarogysathi.dto.AppointmentRequest;
import com.aarogysathi.dto.AppointmentStatus;
import com.aarogysathi.dto.AppointmentUpdateRequest;
import com.aarogysathi.dto.RegistrationStatus;

@RestController
@CrossOrigin
public class AppointmentController {

	@Autowired
	private AppointmentService appService;
	@Autowired
	private PatientService patientService;
	@Autowired
    private DoctorService doctorService;
	
	@PostMapping("/patient/appointment")
	public ResponseEntity<AppointmentStatus> bookApp(@RequestBody AppointmentRequest appointmentRequest) {
	try {
		 Optional<Patient> patient=patientService.getPatientById(appointmentRequest.getPatientId());
		  Optional<Doctor> doctor= doctorService.getDoctorById(appointmentRequest.getDoctorId());
		  if (patient.isPresent() && doctor.isPresent()) {
             
              Appointment appointment = new Appointment();
              appointment.setVisitDate(appointmentRequest.getVisitDate());
              appointment.setPatient(patient.get());
              appointment.setDoctor(doctor.get());
              
              int appId=appService.addAppointment(appointment);
              
              AppointmentStatus appStatus=new AppointmentStatus();
	      		appStatus.setAppId(appId);
	      		appStatus.setMessage("appointment saved");
	      		appStatus.setStatus(true);
            
	      		return new ResponseEntity<AppointmentStatus>(appStatus, HttpStatus.OK);
		  }
		  else {
			  AppointmentStatus appStatus=new AppointmentStatus();
			  appStatus.setMessage("Patient or doctor not found");
	      		appStatus.setStatus(false);
          
	      		return new ResponseEntity<AppointmentStatus>(appStatus, HttpStatus.NOT_FOUND);	            
		  }
	}
	catch(Exception e) {
		 AppointmentStatus appStatus=new AppointmentStatus();
		  appStatus.setMessage("Error booking appointment");
     		appStatus.setStatus(false);
     
     		return new ResponseEntity<AppointmentStatus>(appStatus, HttpStatus.INTERNAL_SERVER_ERROR);
	}
	} 
	
	@GetMapping("/patient/appointments/{patientId}")
    public ResponseEntity<List<Object[]>> getAppointmentsByPatientId(@PathVariable int patientId) {
        try {
            List<Object[]> result = appService.getAppointmentsAndDoctorsByPatientId(patientId);
            return new ResponseEntity<>(result, HttpStatus.OK);
            
            
        } catch (Exception e) {
            e.printStackTrace(); 
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
	
	@PutMapping("/updateDate/{appointmentId}")
    public ResponseEntity<String> updateAppointmentDate(
            @PathVariable int appointmentId,
            @RequestBody AppointmentUpdateRequest updateRequest) {
        try {
            Optional<Appointment> appointmentOptional = appService.getAppointmentById(appointmentId);

            if (appointmentOptional.isPresent()) {
                Appointment appointment = appointmentOptional.get();
                appointment.setVisitDate(updateRequest.getNewDate());

                appService.updateAppointmentDate(appointment);
                return ResponseEntity.ok("Appointment date updated successfully");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Appointment not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating appointment date");
        }
    }

	@DeleteMapping("/delete/{appointmentId}")
    public ResponseEntity<String> deleteAppointment(@PathVariable int appointmentId) {
        try {
            appService.deleteAppointment(appointmentId);
            return ResponseEntity.ok("Appointment deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting appointment");
        }
    }
	
	
	@GetMapping("/doctor/appointments/{doctorId}")
    public ResponseEntity<List<Object[]>> getAppointmentsAndPatientsByDoctorId(@PathVariable int doctorId) {
        try {
            List<Object[]> result = appService.getAppointmentsAndPatientsByDoctorId(doctorId);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            // Log the exception
            e.printStackTrace(); // Replace with proper logging
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}


