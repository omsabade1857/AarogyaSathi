package com.aarogyasathi.controller;

import java.io.OutputStream;
import java.util.ArrayList;
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

import com.aarogyasathi.entity.Medicine;
import com.aarogyasathi.entity.Patient;
import com.aarogyasathi.entity.PatientMedicalHistory;
import com.aarogyasathi.repository.PatientMedicalHistoryRepository;
import com.aarogyasathi.service.PatientMedicalHistoryService;
import com.aarogyasathi.service.PatientService;
import com.aarogysathi.dto.MedicineDto;
import com.aarogysathi.dto.PatientMedicalHistoryDto;
import com.aarogysathi.dto.ReportRequest;
import com.itextpdf.awt.geom.Rectangle2D;
import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Chunk;
import com.itextpdf.text.Document;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@CrossOrigin
public class PatientMedicalHistoryController {

	@Autowired
	private PatientMedicalHistoryService patientMedicalHistoryService;

	@Autowired
	private PatientService patientService;

	@Autowired
	private PatientMedicalHistoryRepository patientMedicalHistory;

//	@PostMapping("/report")
//	public ResponseEntity<String> report(@RequestBody ReportRequest reportRequest) {
//		PatientMedicalHistoryDto patientMedicalHistoryDto = reportRequest.getPatientMedicalHistoryDto();
//		MedicineDto medicineDto = reportRequest.getMedicineDto();
//
//		if (patientMedicalHistoryDto == null || medicineDto == null) {
//			return ResponseEntity.badRequest().body("Patient medical history or medicine data is missing");
//		}
//
//		Optional<Patient> patient = patientService.getPatientById(patientMedicalHistoryDto.getPatientId());
//		if (patient.isPresent()) {
//			PatientMedicalHistory patientMedicalHistory = new PatientMedicalHistory();
//
//			patientMedicalHistory.setVisitDate(patientMedicalHistoryDto.getVisitDate());
//			patientMedicalHistory.setSymptoms(patientMedicalHistoryDto.getSymptoms());
//			patientMedicalHistory.setSuggestion(patientMedicalHistoryDto.getSuggestion());
//			patientMedicalHistory.setPatient(patient.get());
//
//			Medicine medicine = new Medicine();
//
//			medicine.setMedicine(medicineDto.getMedicine());
//			medicine.setDosage(medicineDto.getDosage());
//			medicine.setDuration(medicineDto.getDuration());
//
//			medicine.setPatientMedicalHistory(patientMedicalHistory);
//
//			patientMedicalHistory.setMedicines(List.of(medicine));
//
//			patientMedicalHistoryService.addPatientMedicalHistory(patientMedicalHistory);
//
//			return ResponseEntity.ok("Data submitted successfully");
//		} else {
//			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Data submission failed. Check Patient ID");
//		}
//	}

	@CrossOrigin
	@PostMapping("/report")
	public ResponseEntity<String> report(@RequestBody ReportRequest reportRequest) {
	    PatientMedicalHistoryDto patientMedicalHistoryDto = reportRequest.getPatientMedicalHistoryDto();
	    List<MedicineDto> medicineDtos = reportRequest.getMedicineDto(); // Change to List<MedicineDto>

	    if (patientMedicalHistoryDto == null || medicineDtos == null || medicineDtos.isEmpty()) {
	        return ResponseEntity.badRequest().body("Patient medical history or medicine data is missing");
	    }

	    Optional<Patient> patient = patientService.getPatientById(patientMedicalHistoryDto.getPatientId());
	    if (patient.isPresent()) {
	        PatientMedicalHistory patientMedicalHistory = new PatientMedicalHistory();

	        patientMedicalHistory.setVisitDate(patientMedicalHistoryDto.getVisitDate());
	        patientMedicalHistory.setSymptoms(patientMedicalHistoryDto.getSymptoms());
	        patientMedicalHistory.setSuggestion(patientMedicalHistoryDto.getSuggestion());
	        patientMedicalHistory.setPatient(patient.get());

	        List<Medicine> medicines = new ArrayList<>();
	        for (MedicineDto medicineDto : medicineDtos) {
	            Medicine medicine = new Medicine();
	            medicine.setMedicine(medicineDto.getMedicine());
	            medicine.setDosage(medicineDto.getDosage());
	            medicine.setDuration(medicineDto.getDuration());
	            medicine.setPatientMedicalHistory(patientMedicalHistory);
	            medicines.add(medicine);
	        }

	        patientMedicalHistory.setMedicines(medicines);

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

//	@GetMapping("/history/{patientId}/download")
//	public void downloadLatestMedicalHistoryByPatientId(@PathVariable int patientId, HttpServletResponse response) {
//		PatientMedicalHistory latestMedicalHistory = patientMedicalHistoryService
//				.getLatestMedicalHistoryByPatientId(patientId);
//
//		if (latestMedicalHistory != null) {
//			response.setContentType("application/pdf");
//			response.setHeader("Content-Disposition", "attachment; filename=\"medical_history.pdf\"");
//
//			try (OutputStream outputStream = response.getOutputStream()) {
//				Document document = new Document();
//				PdfWriter.getInstance(document, outputStream);
//
//				document.open();
//				document.add(new Paragraph("Medical History"));
//				document.add(new Paragraph(""));
//
//				document.add(new Paragraph("Record ID: " + latestMedicalHistory.getRecordId()));
//				document.add(new Paragraph("Visit Date: " + latestMedicalHistory.getVisitDate()));
//				document.add(new Paragraph("Patient Name: " + latestMedicalHistory.getPatient().getName()));
//				document.add(new Paragraph("Patient Gender: " + latestMedicalHistory.getPatient().getGender()));
//				document.add(new Paragraph("Patient age: " + latestMedicalHistory.getPatient().getDateOfBirth()));
//				document.add(new Paragraph("Medicine Name: " + latestMedicalHistory.getMedicines()));
//				document.add(new Paragraph("Symptoms: " + latestMedicalHistory.getSymptoms()));
//				document.add(new Paragraph("Suggestion: " + latestMedicalHistory.getSuggestion()));
//				document.add(new Paragraph(""));
//
//				document.close();
//			} catch (Exception e) {
//				e.printStackTrace();
//			}
//		} else {
//			response.setStatus(HttpServletResponse.SC_NOT_FOUND);
//		}
//	}
//}

	@CrossOrigin
	@GetMapping("/history/{patientId}/download")
	public void downloadLatestMedicalHistoryByPatientId(@PathVariable int patientId, HttpServletResponse response) {
	    PatientMedicalHistory latestMedicalHistory = patientMedicalHistoryService.getLatestMedicalHistoryByPatientId(patientId);

	    if (latestMedicalHistory != null) {
	        response.setContentType("application/pdf");
	        response.setHeader("Content-Disposition", "attachment; filename=\"medical_history.pdf\"");

	        try (OutputStream outputStream = response.getOutputStream()) {
	            Document document = new Document();
	            PdfWriter.getInstance(document, outputStream);

	            Font titleFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 24, BaseColor.BLUE);
	            Font contentFont = FontFactory.getFont(FontFactory.TIMES_ROMAN, 12, BaseColor.BLACK);
	            Font labelFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 12, BaseColor.DARK_GRAY);
	            Font valueFont = FontFactory.getFont(FontFactory.TIMES_ROMAN, 12, BaseColor.BLACK);

	            document.open();

	            Paragraph title = new Paragraph("Medical Prescription", titleFont);
	            title.setAlignment(Element.ALIGN_CENTER);
	            document.add(title);

	            document.add(Chunk.NEWLINE);
	            Paragraph patientInfo = new Paragraph("Patient Information", labelFont);
	            document.add(patientInfo);

	            PdfPTable table = new PdfPTable(2);
	            table.setWidthPercentage(100);
	            table.setSpacingBefore(10f);
	            table.setSpacingAfter(10f);

	            addCell(table, "Record ID:", String.valueOf(latestMedicalHistory.getRecordId()), labelFont, valueFont);
	            addCell(table, "Visit Date:", latestMedicalHistory.getVisitDate().toString(), labelFont, valueFont);
	            addCell(table, "Patient Name:", latestMedicalHistory.getPatient().getName(), labelFont, valueFont);

	            // Extract medicine names
	            StringBuilder medicineNames = new StringBuilder();
	            for (Medicine medicine : latestMedicalHistory.getMedicines()) {
	                medicineNames.append(medicine.getMedicine()).append(", ");
	            }
	            String medicines = medicineNames.toString();
	            if (medicines.endsWith(", ")) {
	                medicines = medicines.substring(0, medicines.length() - 2); // Remove the trailing comma and space
	            }
	            addCell(table, "Medicine Name:", medicines, labelFont, valueFont);

	            addCell(table, "Symptoms:", latestMedicalHistory.getSymptoms(), labelFont, valueFont);
	            addCell(table, "Suggestion:", latestMedicalHistory.getSuggestion(), labelFont, valueFont);

	            document.add(table);

	            document.close();
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	    } else {
	        response.setStatus(HttpServletResponse.SC_NOT_FOUND);
	    }
	}

	private void addCell(PdfPTable table, String label, String value, Font labelFont, Font valueFont) {
	    PdfPCell labelCell = new PdfPCell(new Phrase(label, labelFont));
	    labelCell.setBorder(Rectangle2D.OUT_BOTTOM);
	    labelCell.setPadding(5);
	    table.addCell(labelCell);

	    PdfPCell valueCell = new PdfPCell(new Phrase(value, valueFont));
	    valueCell.setBorder(Rectangle2D.OUT_BOTTOM);
	    valueCell.setPadding(5);
	    table.addCell(valueCell);
	}
}