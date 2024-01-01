package com.aarogyasathi.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aarogyasathi.entity.Admin;
import com.aarogyasathi.entity.Patient;
import com.aarogyasathi.exception.AdminServiceException;
import com.aarogyasathi.exception.PatientServiceException;
import com.aarogyasathi.repository.AdminRepository;
import com.aarogysathi.dto.LoginDetails;

@Service
public class AdminService {

	@Autowired
	private AdminRepository adminRepo;
	
	public Admin adminLogin(String email, String password) throws AdminServiceException{
		Optional<Admin> admin = adminRepo.findByEmailAndPassword(email, password);
		if(admin.isPresent())
			return admin.get();
		else
			throw new AdminServiceException("Invalid Email/Password");
	} 
	
}
