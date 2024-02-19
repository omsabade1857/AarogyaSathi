package com.aarogyasathi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aarogyasathi.entity.Doctor;
import com.aarogyasathi.entity.Patient;
import com.aarogyasathi.exception.PatientServiceException;
import com.aarogyasathi.repository.PatientRepository;

import jakarta.transaction.Transactional;

@Service
public class PatientService {

	@Autowired
	private PatientRepository patientRepo;
	
	public int addPatient(Patient patient) throws PatientServiceException{
		
		Optional<Patient> checkPatient=patientRepo.findByEmail(patient.getEmail());
		
		if(checkPatient.isEmpty()) {
			Patient savedPatient=patientRepo.save(patient);
			return patient.getPatientId();
		}
		else
		{
			throw new PatientServiceException("Patient with this email is already registered with ID ");
		}	
	}
	
	public Optional<Patient> getPatientById(int id) {
       Optional<Patient> foundPatient= patientRepo.findById(id);
     
       return foundPatient;
    }
	public Patient login(String email, String password) throws PatientServiceException{
		Optional<Patient> patient = patientRepo.findByEmailAndPassword(email, password);
		if(patient.isPresent())
			return patient.get();
		else
			throw new PatientServiceException("Invalid Email/Password");
	} 
	
	public List<Patient> getAllPatients(){
		List<Patient> ListPatient=patientRepo.findAll();
		return ListPatient;
	}
	 public Patient updatePatient(int patientId, Patient updatedPatient) {
	        Optional<Patient> patientOptional = patientRepo.findById(patientId);

	        if (patientOptional.isPresent()) {
	            Patient existingPatient = patientOptional.get();

	            // Update non-null fields only
	            if (updatedPatient.getName() != null) {
	                existingPatient.setName(updatedPatient.getName());
	            }
	            if (updatedPatient.getEmail() != null) {
	                existingPatient.setEmail(updatedPatient.getEmail());
	            }
	            if (updatedPatient.getPassword() != null) {
	                existingPatient.setPassword(updatedPatient.getPassword());
	            }
	            if (updatedPatient.getMobileNo() != 0) {
	                existingPatient.setMobileNo(updatedPatient.getMobileNo());
	            }
	            if (updatedPatient.getDateOfBirth() != null) {
	                existingPatient.setDateOfBirth(updatedPatient.getDateOfBirth());
	            }
	            if (updatedPatient.getCity() != null) {
	                existingPatient.setCity(updatedPatient.getCity());
	            }
	            if (updatedPatient.getGender() != null) {
	                existingPatient.setGender(updatedPatient.getGender());
	            }

	            // Save the updated patient
	            return patientRepo.save(existingPatient);
	        } 
	        else {
	        	return null;
	        }
	        }
	 
	 
	 
	 @Transactional
	    public void deletePatient(int patientId) {
	        Optional<Patient> patientOptional = patientRepo.findById(patientId);
	        if (patientOptional.isPresent()) {
	            Patient patient = patientOptional.get();
	            patientRepo.delete(patient);
	        } else {
	            
	        }
	    }
	 
	    }