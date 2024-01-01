package com.aarogyasathi.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aarogyasathi.entity.Admin;
import com.aarogyasathi.entity.Patient;

public interface AdminRepository extends JpaRepository<Admin, Integer>{

	public Optional<Admin> findByEmailAndPassword(String email, String password);
	
}
