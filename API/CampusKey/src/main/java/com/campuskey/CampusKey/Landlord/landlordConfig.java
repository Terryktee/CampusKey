package com.campuskey.CampusKey.Landlord;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class landlordConfig {
    @Bean
    CommandLineRunner commandLineRunner2(landlordRepository landlordRepository){
        return args -> {

            landlord landlord1 = new landlord(
                    
                    "John",
                    "Doe",
                    "ttkapumhaa@gmail.com",
                    "263774592474"
            );

            landlordRepository.save(landlord1);

};
    }
}