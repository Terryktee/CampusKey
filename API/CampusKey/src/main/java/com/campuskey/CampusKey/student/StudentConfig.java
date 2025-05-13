package com.campuskey.CampusKey.student;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class StudentConfig {

    @Bean
    CommandLineRunner commandLineRunner(StudentRepository studentRepository){
        return args -> {

            Student student1 = new Student(
                    
                    "John",
                    "Doe",
                    "john@gmail.com",
                    "263779434081",
                    "n02422803p",
                    2024
                    );
            Student student2 = new Student(
                    
                    "Jane",
                    "Doe",
                    "jane@gmail.com",
                    "263779434081",
                    "n02422803p",
                    2024
                    );

            studentRepository.saveAll(
                List.of(student1,student2)
            );
                    
        };
        
    }              
}
