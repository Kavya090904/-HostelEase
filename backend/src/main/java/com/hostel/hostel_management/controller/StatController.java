package com.hostel.hostel_management.controller;

import com.hostel.hostel_management.repository.ComplaintRepository;
import com.hostel.hostel_management.repository.PaymentRepository;
import com.hostel.hostel_management.repository.ResidentRepository;
import com.hostel.hostel_management.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/stats")
@CrossOrigin(origins = "*")
public class StatController {
    @Autowired private RoomRepository roomRepository;
    @Autowired private ResidentRepository residentRepository;
    @Autowired private PaymentRepository paymentRepository;
    @Autowired private ComplaintRepository complaintRepository;

    @GetMapping
    public Map<String, Long> getStats() {
        Map<String, Long> stats = new HashMap<>();
        stats.put("totalRooms", roomRepository.count());
        stats.put("totalResidents", residentRepository.count());
        stats.put("totalComplaints", complaintRepository.count());
        stats.put("totalPayments", paymentRepository.count());
        return stats;
    }
}
