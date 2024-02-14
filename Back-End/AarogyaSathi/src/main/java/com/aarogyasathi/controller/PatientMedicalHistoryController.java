package com.aarogyasathi.controller;
import java.io.OutputStream;
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

import jakarta.servlet.http.HttpServletResponse;

import com.aarogyasathi.entity.Patient;
import com.aarogyasathi.entity.PatientMedicalHistory;
import com.aarogyasathi.service.PatientMedicalHistoryService;
import com.aarogyasathi.service.PatientService;
import com.aarogysathi.dto.PatientMedicalHistoryDto;
import com.itextpdf.text.Document;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;

@RestController
@CrossOrigin
public class PatientMedicalHistoryController {

    @Autowired
    private PatientMedicalHistoryService patientMedicalHistoryService;

    @Autowired
    private PatientService patientService;

    @PostMapping("/report")
    public ResponseEntity<String> report(@RequestBody PatientMedicalHistoryDto patientMedicalHistoryDto) {
        Optional<Patient> patient = patientService.getPatientById(patientMedicalHistoryDto.getPatientId());
        if (patient.isPresent()) {
            PatientMedicalHistory patientMedicalHistory = new PatientMedicalHistory();
            patientMedicalHistory.setVisitDate(patientMedicalHistoryDto.getVisitDate());
            patientMedicalHistory.setDoctorName(patientMedicalHistoryDto.getDoctorName());
            patientMedicalHistory.setMedicine(patientMedicalHistoryDto.getMedicine());
            patientMedicalHistory.setSymptoms(patientMedicalHistoryDto.getSymptoms());
            patientMedicalHistory.setSuggestion(patientMedicalHistoryDto.getSuggestion());
            patientMedicalHistory.setPatient(patient.get());

            patientMedicalHistoryService.addPatientMedicalHistory(patientMedicalHistory);
            return ResponseEntity.ok("Data submitted successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Data submission failed. Check Patient ID");
        }
    }

    
    
    @GetMapping("/history/{patientId}")
    public List<PatientMedicalHistory> searchMedicalHistoryByPatientId(@PathVariable int patientId) {
        return patientMedicalHistoryService.getMedicalHistoryByPatientId(patientId);
    }

    
    
    
    @GetMapping("/history/{patientId}/download")
    public void downloadMedicalHistoryByPatientId(@PathVariable int patientId, HttpServletResponse response) {
        List<PatientMedicalHistory> medicalHistoryList = patientMedicalHistoryService.getMedicalHistoryByPatientId(patientId);

        response.setContentType("application/pdf"); 
        response.setHeader("Content-Disposition", "attachment; filename=\"medical_history.pdf\"");

        try (OutputStream outputStream = response.getOutputStream()) {
            Document document = new Document();
            PdfWriter.getInstance(document, outputStream);

            document.open();
            document.add(new Paragraph("Medical History"));
            document.add(new Paragraph(""));

            for (PatientMedicalHistory history : medicalHistoryList) {
                document.add(new Paragraph("Record ID: " + history.getRecordId()));
                document.add(new Paragraph("Visit Date: " + history.getVisitDate()));
                document.add(new Paragraph("Doctor Name: " + history.getDoctorName()));
                document.add(new Paragraph("Symptoms: " + history.getSymptoms()));
                document.add(new Paragraph("Medicine: " + history.getMedicine()));
                document.add(new Paragraph("Suggestion: " + history.getSuggestion()));
                document.add(new Paragraph(""));
            }

            document.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
