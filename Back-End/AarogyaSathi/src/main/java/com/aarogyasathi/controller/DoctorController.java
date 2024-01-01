package com.aarogyasathi.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.aarogyasathi.entity.Doctor;
import com.aarogyasathi.entity.Patient;
import com.aarogyasathi.exception.DoctorServiceException;
import com.aarogyasathi.exception.PatientServiceException;
import com.aarogyasathi.service.DoctorService;
import com.aarogysathi.dto.DocRegistrationStatus;
import com.aarogysathi.dto.DoctorResponse;
import com.aarogysathi.dto.LoginDetails;
import com.aarogysathi.dto.LoginStatus;
import com.aarogysathi.dto.RegistrationStatus;

@RestController
@CrossOrigin
public class DoctorController {
	
	@Autowired
	private DoctorService doctorService;
	
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
}

