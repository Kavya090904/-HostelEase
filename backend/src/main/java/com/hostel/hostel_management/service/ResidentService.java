package com.hostel.hostel_management.service;

import com.hostel.hostel_management.model.Resident;
import com.hostel.hostel_management.repository.ResidentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ResidentService {
    @Autowired
    private ResidentRepository residentRepository;

    public List<Resident> getAllResidents() {
        return residentRepository.findAll();
    }

    public Resident saveResident(Resident resident) {
        return residentRepository.save(resident);
    }

    public Resident getResidentById(Long id) {
        return residentRepository.findById(id).orElse(null);
    }

    public void deleteResident(Long id) {
        residentRepository.deleteById(id);
    }
}
