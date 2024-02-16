package com.aarogyasathi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aarogyasathi.entity.Medicine;
import com.aarogyasathi.entity.PatientMedicalHistory;

public interface PatientMedicalHistoryRepository extends JpaRepository<PatientMedicalHistory, Integer> {
	// public Optional<Patient> findByEmail(String email);

	List<PatientMedicalHistory> findByPatient_PatientId(int patientId);

	Medicine save(Medicine medicine);

}
