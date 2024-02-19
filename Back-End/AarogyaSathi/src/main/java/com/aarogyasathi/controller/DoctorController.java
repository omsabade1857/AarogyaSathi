package com.aarogyasathi.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.aarogyasathi.entity.Doctor;
import com.aarogyasathi.exception.DoctorServiceException;
import com.aarogyasathi.repository.AppointmentRepository;
import com.aarogyasathi.service.DoctorService;
import com.aarogysathi.dto.DocRegistrationStatus;
import com.aarogysathi.dto.DoctorResponse;
import com.aarogysathi.dto.LoginDetails;
import com.aarogysathi.dto.LoginStatus;

@RestController
@CrossOrigin
public class DoctorController {

	@Autowired
	private DoctorService doctorService;
	private AppointmentRepository appointmentRepo;

	@PostMapping("/doctorsignup")
	public DocRegistrationStatus register(@RequestBody Doctor doctor) {
		try {
		int id=doctorService.addDoctor(doctor);
		DocRegistrationStatus reg=new DocRegistrationStatus();

		reg.setDoctorId(id);
		reg.setStatus(true);
		reg.setMessage("Doctor registered successfully !");

		return reg;

		}
		catch(DoctorServiceException exc) {
			DocRegistrationStatus reg=new DocRegistrationStatus();

			reg.setStatus(false);
			reg.setMessage(exc.getMessage());

			return reg;
		}
	}

	  @GetMapping("/doctor/profile/{doctorId}")
	    public DoctorResponse getDoctorById(@PathVariable int doctorId) {
	        try {
	            Optional<Doctor> doctorOptional = doctorService.getDoctorById(doctorId);

	            if (doctorOptional.isPresent()) {
	                return new DoctorResponse(true, "Doctor found by ID.", doctorOptional.get());
	            } else {
	                return new DoctorResponse(false, "Doctor not found by ID.", null);
	            }
	        } catch (Exception e) {
	            return new DoctorResponse(false, "Error retrieving doctor by ID.", null);
	        }
	    }

	  @PostMapping("/doctor/login")
		public LoginStatus login(@RequestBody LoginDetails loginDetails) {
			try {
				Doctor doctor = doctorService.login(loginDetails.getEmail(), loginDetails.getPassword());
				LoginStatus status = new LoginStatus();
				status.setStatus(true);
				status.setMessage("Login successful!");
				status.setId (doctor.getDoctorId());
				status.setName(doctor.getDoctorName());
				return status;
			}
			catch (DoctorServiceException e) {
				LoginStatus status = new LoginStatus();
				status.setStatus(false);
				status.setMessage(e.getMessage());
				return status;
			}
		}

	  @GetMapping("/book-appointment")
	    public List<Doctor> getAllDoctors() {
		   List<Doctor> doctorList=doctorService.getAllDoctors();
		   return doctorList;
	  }
	  @DeleteMapping("/doctor/delete/{doctorId}")
	    public ResponseEntity<?> deleteDoctor(@PathVariable int doctorId) {
	        try {
	            doctorService.deleteDoctor(doctorId);
	            return ResponseEntity.ok().body("Doctor with ID " + doctorId + " deleted successfully.");
	        } catch (Exception e) {
	            return ResponseEntity.badRequest().body(e.getMessage());
	        }
	    }

	  @PutMapping("/doctor/update/{doctorId}")
	  public ResponseEntity<?> updateDoctor(@PathVariable int doctorId, @RequestBody Doctor updatedDoctor) {
	      try {
	          updatedDoctor.setDoctorId(doctorId); // Ensure the doctorId is set from the path variable
	          Doctor updatedDoctorEntity = doctorService.updateDoctor(updatedDoctor);
	          return ResponseEntity.ok().body("Doctor with ID " + updatedDoctorEntity.getDoctorId() + " updated successfully.");
	      } catch (DoctorServiceException e) {
	          return ResponseEntity.badRequest().body(e.getMessage());
	      }
	  }

}