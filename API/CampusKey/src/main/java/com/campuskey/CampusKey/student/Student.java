package com.campuskey.CampusKey.student;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.hibernate.annotations.DialectOverride.Version;

import com.campuskey.CampusKey.property.Property;
import com.campuskey.CampusKey.propertyApplication.PropertyApplication;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;

import jakarta.persistence.Table;

@Entity
@Version(major = 0)
@Table(name = "student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "studentId")
    private Long studentId;

    private String name;
    private String surname;
    private String email;
    private String phone;
    private String studentNumber;
    private Integer studentYear;
    
    
    @ManyToMany
    @JoinTable(
        name = "student_property",
        joinColumns = @JoinColumn(name = "id"),
        inverseJoinColumns = @JoinColumn(name = "propertyId")
    )
    private Set<Property> properties;
    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private List<PropertyApplication> applications = new ArrayList<>();


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

    public Long getId() { return studentId; }
    public void setId(Long studentId) { this.studentId = studentId; }

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
            studentId, name, surname, email, phone, studentNumber, studentYear);
    }
}
