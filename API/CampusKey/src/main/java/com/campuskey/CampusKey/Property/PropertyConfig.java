package com.campuskey.CampusKey.Property;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PropertyConfig {

    @Bean
    CommandLineRunner commandLineRunner3(PropertyRepository studentRepository){
        return args -> {
     Property property1 = new Property(
                "Campus Key",
                "Apartment",
                "123 Main St, Cityville, ST 12345",
                "1000.00",                   // propertyPrice as String
                 "Spacious 4-bedroom unit",
                 "image1.jpg",
                  "gas stove,wifi",null
                 );
        Property property2 = new Property(
                "Campus Key",
                "Apartment",
                "456 Elm St, Townsville, ST 67890",
                "1200.00",                   // propertyPrice as String
                 "Modern 3-bedroom unit",
                 "image2.jpg",
                  "wifi",
                  "6567"

                 );
            studentRepository.saveAll(List.of(property1, property2));
        };

    }
}