package com.aarogyasathi.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aarogyasathi.entity.Doctor;
import com.aarogyasathi.entity.Patient;
import com.aarogyasathi.exception.DoctorServiceException;
import com.aarogyasathi.exception.PatientServiceException;
import com.aarogyasathi.repository.AppointmentRepository;
import com.aarogyasathi.repository.DoctorRepository;

import jakarta.transaction.Transactional;

@Service
public class DoctorService {

	@Autowired
	private DoctorRepository doctorRepo;
	private AppointmentRepository appointmentRepo;
	
	
	public int addDoctor(Doctor doctor) throws DoctorServiceException{
		Optional<Doctor> checkDoctor=doctorRepo.findByEmail(doctor.getEmail());
		
		if(checkDoctor.isEmpty()) {
			Doctor savedDoctor=doctorRepo.save(doctor);
			return doctor.getDoctorId();
		}
		else
		{
			throw new DoctorServiceException("Doctor with this email is already registered");
		}
		
	}
	
	public Optional<Doctor> getDoctorById(int id) {
        return doctorRepo.findById(id);
    }
	
	public Optional<Doctor> getDoctorByEmail(String email) {
        return doctorRepo.findByEmail(email);
    }
	
	public Doctor login(String email, String password) throws DoctorServiceException{
		Optional<Doctor> doctor = doctorRepo.findByEmailAndPassword(email, password);
		if(doctor.isPresent())
			return doctor.get();
		else
			throw new DoctorServiceException("Invalid Email/Password");
	} 
	
	public List<Doctor> getAllDoctors(){
		 List<Doctor> allDoctors=doctorRepo.findAll();
		 return  allDoctors;
	}
	 public Doctor updateDoctor(Doctor updatedDoctor) throws DoctorServiceException {
	       
	        Optional<Doctor> existingDoctorOptional = doctorRepo.findById(updatedDoctor.getDoctorId());

	        if (existingDoctorOptional.isPresent()) {
	            Doctor existingDoctor = existingDoctorOptional.get();

	         
	            if (updatedDoctor.getDoctorName() != null) {
	                existingDoctor.setDoctorName(updatedDoctor.getDoctorName());
	            }
	            if (updatedDoctor.getEmail() != null) {
	                existingDoctor.setEmail(updatedDoctor.getEmail());
	            }
	            if (updatedDoctor.getPassword() != null) {
	                existingDoctor.setPassword(updatedDoctor.getPassword());
	            }
	            if (updatedDoctor.getQualification() != null) {
	                existingDoctor.setQualification(updatedDoctor.getQualification());
	            }
	            if (updatedDoctor.getSpecialization() != null) {
	                existingDoctor.setSpecialization(updatedDoctor.getSpecialization());
	            }
	            if (updatedDoctor.getMobileNo() != null) {
	                existingDoctor.setMobileNo(updatedDoctor.getMobileNo());
	            }

	            
	            return doctorRepo.save(existingDoctor);
	        } else {
	            throw new DoctorServiceException("Doctor not found for update.");
	        }
	    }
	 @Transactional
	    public void deleteDoctor(int doctorId) {
	        Optional<Doctor> doctorOptional = doctorRepo.findById(doctorId);
	        if (doctorOptional.isPresent()) {
	            Doctor doctor = doctorOptional.get();
	            doctorRepo.delete(doctor);
	        } else {
	            
	        }
	    }
	
}