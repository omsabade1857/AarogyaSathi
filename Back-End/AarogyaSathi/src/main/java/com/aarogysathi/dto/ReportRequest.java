package com.aarogysathi.dto;

public class ReportRequest {

	private PatientMedicalHistoryDto patientMedicalHistoryDto;
	private MedicineDto medicineDto;

	public PatientMedicalHistoryDto getPatientMedicalHistoryDto() {
		return patientMedicalHistoryDto;
	}

	public void setPatientMedicalHistoryDto(PatientMedicalHistoryDto patientMedicalHistoryDto) {
		this.patientMedicalHistoryDto = patientMedicalHistoryDto;
	}

	public MedicineDto getMedicineDto() {
		return medicineDto;
	}

	public void setMedicineDto(MedicineDto medicineDto) {
		this.medicineDto = medicineDto;
	}

}
