package com.aarogyasathi.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.aarogysathi.dto.PatientMedicalHistoryDto;
import com.aarogysathi.dto.RegistrationStatus;
import com.aarogyasathi.entity.Patient;
import com.aarogyasathi.entity.PatientMedicalHistory;
import com.aarogyasathi.service.PatientMedicalHistoryService;
import com.aarogyasathi.service.PatientService;

@RestController
@CrossOrigin
public class PatientMedicalHistoryController {


		@Autowired
		private PatientMedicalHistoryService patientMedicalHistoryService;
		@Autowired
		private PatientService patientService;

		@PostMapping("/report")
		public ResponseEntity<String> report(@RequestBody PatientMedicalHistoryDto patientMedicalHistoryDto) {
				Optional<Patient> patient=patientService.getPatientById(patientMedicalHistoryDto.getPatientId());
				  if (patient.isPresent()) {
		             
		           PatientMedicalHistory patientMedicalHistory =new PatientMedicalHistory();
		          
		           patientMedicalHistory.setVisitDate(patientMedicalHistoryDto.getVisitDate());
		           patientMedicalHistory.setDoctorName(patientMedicalHistoryDto.getDoctorName());
		           patientMedicalHistory.setMedicine(patientMedicalHistoryDto.getMedicine());
		           patientMedicalHistory.setSymptoms(patientMedicalHistoryDto.getSymptoms());
		           patientMedicalHistory.setSuggestion(patientMedicalHistoryDto.getSuggestion());
		           patientMedicalHistory.setPatient(patient.get());
		           
		         patientMedicalHistoryService.addPatientMedicalHistory(patientMedicalHistory);
		         return ResponseEntity.ok("Data submitted successfully");
				  }
				  else
					  return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Data submission failed. Check Patient ID");
		}
		
		@GetMapping("/history/{patientId}")
	    public List<PatientMedicalHistory> getMedicalHistoryByPatientId(@PathVariable int patientId) {
	        return patientMedicalHistoryService.getMedicalHistoryByPatientId(patientId);        
	    }
}