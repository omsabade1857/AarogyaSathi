package com.aarogyasathi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aarogyasathi.entity.Doctor;
import com.aarogyasathi.entity.Patient;
import com.aarogyasathi.exception.PatientServiceException;
import com.aarogyasathi.repository.PatientRepository;

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
	
	
}
