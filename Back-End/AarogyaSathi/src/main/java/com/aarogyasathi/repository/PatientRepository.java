package com.aarogyasathi.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aarogyasathi.entity.Patient;

public interface PatientRepository extends JpaRepository<Patient, Integer>{

	public Optional<Patient> findByEmail(String email);
	
	public Optional<Patient> findByEmailAndPassword(String email, String password);
}
