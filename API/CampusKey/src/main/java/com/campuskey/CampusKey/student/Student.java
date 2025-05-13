package com.campuskey.CampusKey.student;
import org.hibernate.annotations.DialectOverride.Version;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Version(major = 0)
@Table(name = "student")
public class Student {

    @Id
    @SequenceGenerator(
        name = "student_sequence",
        sequenceName="student_sequence",
        allocationSize = 1,
        initialValue = 1
    )
    
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator= "student_sequence"
        
        )

    private Long id;

    private String name;
    private String surname;
    private String email;
    private String phone;
    private String studentNumber;
    private Integer studentYear;

    // No-args constructor required by JPA
    public Student() {
    }

    public Student( String name, String surname, String email, String phone, String studentNumber, Integer studentYear) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.studentNumber = studentNumber;
        this.studentYear = studentYear;
    }

    // Getters and setters...

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getSurname() { return surname; }
    public void setSurname(String surname) { this.surname = surname; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getStudentNumber() { return studentNumber; }
    public void setStudentNumber(String studentNumber) { this.studentNumber = studentNumber; }

    public Integer getStudentYear() { return studentYear; }
    public void setStudentYear(Integer studentYear) { this.studentYear = studentYear; }

    @Override
    public String toString() {
        return String.format(
            "Student[id=%d, name=%s, surname=%s, email=%s, phone=%s, studentNumber=%s, studentYear=%d]",
            id, name, surname, email, phone, studentNumber, studentYear);
    }
}
