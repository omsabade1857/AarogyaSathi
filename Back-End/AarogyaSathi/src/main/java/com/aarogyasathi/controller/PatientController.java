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

import com.aarogyasathi.entity.Patient;
import com.aarogyasathi.exception.PatientServiceException;
import com.aarogyasathi.service.PatientService;
import com.aarogysathi.dto.LoginDetails;
import com.aarogysathi.dto.LoginStatus;
import com.aarogysathi.dto.PatientResponse;
import com.aarogysathi.dto.RegistrationStatus;

@RestController
@CrossOrigin
public class PatientController {

	@Autowired
	private PatientService patientService;

	@PostMapping("/signup")
	public ResponseEntity<RegistrationStatus> register(@RequestBody Patient patient) {

		System.out.println(patient);
		try {

		int id=patientService.addPatient(patient);
		RegistrationStatus reg=new RegistrationStatus();

		reg.setPatientId(id);
		reg.setStatus(true);
		reg.setMessage("Patient registered successfully !");

		return new ResponseEntity<>(reg, HttpStatus.OK);

		}
		catch(PatientServiceException exc) {
			RegistrationStatus reg=new RegistrationStatus();

			reg.setStatus(false);
			reg.setMessage(exc.getMessage());

			return new ResponseEntity<>(reg, HttpStatus.BAD_REQUEST);
		}
	}

	 @GetMapping("/patient/profile/{patientId}")
	    public PatientResponse getPatientById(@PathVariable int patientId) {
	        try {
	            Optional<Patient> patientOptional = patientService.getPatientById(patientId);

	            if (patientOptional.isPresent()) {
	                return new PatientResponse(true, "Patient found by ID.", patientOptional.get());
	            } else {
	                return new PatientResponse(false, "Patient not found by ID.", null);
	            }
	        } catch (Exception e) {
	            return new PatientResponse(false, "Error retrieving patient by ID.", null);
	        }
	    }

	 @PostMapping("/patient/login")
		public LoginStatus login(@RequestBody LoginDetails loginDetails) {
			try {
				Patient patient = patientService.login(loginDetails.getEmail(), loginDetails.getPassword());
				LoginStatus status = new LoginStatus();
				status.setStatus(true);
				status.setMessage("Login successful!");
				status.setId (patient.getPatientId());
				status.setName(patient.getName());
				//status.setCustomer(customer);
				return status;
			}
			catch (PatientServiceException e) {
				LoginStatus status = new LoginStatus();
				status.setStatus(false);
				status.setMessage(e.getMessage());
				return status;
			}
		}

	 @GetMapping("/patientlist")
		public List<Patient> getAllPatients(){
			List<Patient> PatientList=patientService.getAllPatients();
			return PatientList;
		}






	 @PutMapping("/patient/update/{patientId}")
	    public ResponseEntity<Patient> updatePatient(@PathVariable int patientId, @RequestBody Patient updatedPatient) {
	        try {
	            Patient updatedEntity = patientService.updatePatient(patientId, updatedPatient);
	            if (updatedEntity != null) {
	                return new ResponseEntity<>(updatedEntity, HttpStatus.OK);
	            } else {
	                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	            }
	        } catch (Exception e) {
	            // Handle any exceptions
	            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	        }
	    }


	 @DeleteMapping("/patient/delete/{patientId}")
	    public ResponseEntity<String> deletePatient(@PathVariable int patientId) {
	        try {
	            patientService.deletePatient(patientId);
	            return new ResponseEntity<>("Patient deleted successfully", HttpStatus.OK);
	        }  catch (Exception e) {
	            return new ResponseEntity<>("Failed to delete patient", HttpStatus.INTERNAL_SERVER_ERROR);
	        }
	    }

}