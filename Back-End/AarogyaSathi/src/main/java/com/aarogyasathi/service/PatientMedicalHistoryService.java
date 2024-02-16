//package com.aarogyasathi.service;
//
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.interceptor.TransactionAspectSupport;
//
//import com.aarogyasathi.entity.PatientMedicalHistory;
//import com.aarogyasathi.repository.PatientMedicalHistoryRepository;
//import com.aarogysathi.dto.RegistrationStatus;
//import org.slf4j.LoggerFactory;
//
//import ch.qos.logback.classic.Logger;
//import jakarta.transaction.Transactional;
//
//
//@Service
//public class PatientMedicalHistoryService {
//
//    private static final Logger logger = LoggerFactory.getLogger(PatientMedicalHistoryService.class);
//
//    @Autowired
//    PatientMedicalHistoryRepository historyRepo;
//
//    @Transactional
//    public RegistrationStatus addPatientMedicalHistory(PatientMedicalHistory patienthistory) {
//        try {
//            PatientMedicalHistory patientSavedHistory = historyRepo.save(patienthistory);
//            RegistrationStatus reg = new RegistrationStatus();
//            reg.setStatus(true);
//            reg.setMessage("Patient report done!!");
//            return reg;
//        } catch (Exception e) {
//            logger.error("Error occurred while saving patient medical history: {}", e.getMessage());
//            RegistrationStatus reg = new RegistrationStatus();
//            reg.setStatus(false);
//            reg.setMessage("Registration failed. Please try again later.");
//            return reg;
//        }
//    }
//
//    public Optional<PatientMedicalHistory> getPatientById(int patientId) {
//        return historyRepo.findById(patientId);
//    }
//
//    public List<PatientMedicalHistory> getMedicalHistoryByPatientId(int patientId) {
//        return historyRepo.findByPatient_PatientId(patientId);
//    }
//}
//


package com.aarogyasathi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aarogyasathi.entity.PatientMedicalHistory;
import com.aarogyasathi.repository.PatientMedicalHistoryRepository;
import com.aarogysathi.dto.RegistrationStatus;

import jakarta.transaction.Transactional;

@Service
public class PatientMedicalHistoryService {

	@Autowired
	PatientMedicalHistoryRepository historyRepo;
	
		@Transactional
		public void addPatientMedicalHistory(PatientMedicalHistory patienthistory){

			
			PatientMedicalHistory patientSavedHistory=	historyRepo.save(patienthistory);
			 try {
			     
			        RegistrationStatus reg = new RegistrationStatus();
			        reg.setStatus(true);
			        reg.setMessage("Patient report done!!");
			    } catch (Exception e) {
			     
			        RegistrationStatus reg = new RegistrationStatus();
			        reg.setStatus(false);
			        reg.setMessage("Registration failed: " + e.getMessage());
			    }
			
			
		}
		
		public Optional<PatientMedicalHistory> getPatientById(int patientId) {	
			return historyRepo.findById(patientId);
		}
		
		public List<PatientMedicalHistory> getMedicalHistoryByPatientId(int patientId) {
			return historyRepo.findByPatient_PatientId(patientId);
		}
}



//
////	@Transactional
////	public void addPatientMedicalHistory(PatientMedicalHistory patienthistory){
////	PatientMedicalHistory patientSavedHistory=	historyRepo.save(patienthistory);
////
////	}
////
////	public List<PatientMedicalHistory> getMedicalHistoryByPatientId(int patientId) {
////		return historyRepo.findByPatient_PatientId(patientId);
////	}
//
//
//
//
//		@Transactional
//		public void addPatientMedicalHistory(PatientMedicalHistory patienthistory){
//
//
//			PatientMedicalHistory patientSavedHistory=	historyRepo.save(patienthistory);
//		 //	Medicine medicine=	historyRepo.save(medicine);
//			 try {
//
//			        RegistrationStatus reg = new RegistrationStatus();
//			        reg.setStatus(true);
//			        reg.setMessage("Patient report done!!");
//			    } catch (Exception e) {
//
//			        RegistrationStatus reg = new RegistrationStatus();
//			        reg.setStatus(false);
//			        reg.setMessage("Registration failed: " + e.getMessage());
//			    }
//
//
//
//		}
//
//
//		//to search patient with help of patient id in doctor form
//
//		public Optional<PatientMedicalHistory> getPatientById(int patientId) {
//			return historyRepo.findById(patientId);
//		}
//
//		public List<PatientMedicalHistory> getMedicalHistoryByPatientId(int patientId) {
//			return historyRepo.findByPatient_PatientId(patientId);
//		}
//
//
//}
