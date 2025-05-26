package com.campuskey.CampusKey.property;

import java.math.BigDecimal;
import java.util.List;
import java.util.Set;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.campuskey.CampusKey.landlord.Landlord;
import com.campuskey.CampusKey.landlord.LandlordRepository;

@Configuration
public class PropertyConfig {

    @Bean
    CommandLineRunner commandLineRunner3(
            PropertyRepository propertyRepository,
            LandlordRepository landlordRepository) {
        return args -> {
            System.out.println("✅ Sample data added to the database.");
    

    };
}
}