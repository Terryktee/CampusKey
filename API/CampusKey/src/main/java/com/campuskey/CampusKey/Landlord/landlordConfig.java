package com.campuskey.CampusKey.landlord;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LandlordConfig {
    @Bean
    CommandLineRunner commandLineRunner2(LandlordRepository landlordRepository){
        return args -> {

            Landlord landlord1 = new Landlord(
                    
                    "John",
                    "Doe",
                    "ttkapumhaa@gmail.com",
                    "263774592474"
            );

            landlordRepository.save(landlord1);

};
    }
}