package com.hostel.hostel_management;

import com.hostel.hostel_management.model.Room;
import com.hostel.hostel_management.model.Resident;
import com.hostel.hostel_management.repository.RoomRepository;
import com.hostel.hostel_management.repository.ResidentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initData(RoomRepository roomRepo, ResidentRepository residentRepo) {
        return args -> {
            Room r1 = roomRepo.save(new Room(null, "101", "Single", 5000.0, true));
            Room r2 = roomRepo.save(new Room(null, "102", "Double", 3500.0, false));
            Room r3 = roomRepo.save(new Room(null, "103", "Triple", 2500.0, true));
            
            residentRepo.save(new Resident(null, "John Doe", "john@example.com", "1234567890", r1, LocalDate.now()));
            residentRepo.save(new Resident(null, "Jane Smith", "jane@example.com", "0987654321", r3, LocalDate.now()));
        };
    }
}
