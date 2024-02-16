package com.aarogysathi.dto;

import java.util.List;

public class ReportRequest {

	private PatientMedicalHistoryDto patientMedicalHistoryDto;
	private List<MedicineDto> medicineDto;

	public PatientMedicalHistoryDto getPatientMedicalHistoryDto() {
		return patientMedicalHistoryDto;
	}

	public void setPatientMedicalHistoryDto(PatientMedicalHistoryDto patientMedicalHistoryDto) {
		this.patientMedicalHistoryDto = patientMedicalHistoryDto;
	}

	public List<MedicineDto> getMedicineDto() {
		return medicineDto;
	}

	public void setMedicineDto(List<MedicineDto> medicineDto) {
		this.medicineDto = medicineDto;
	}

}
