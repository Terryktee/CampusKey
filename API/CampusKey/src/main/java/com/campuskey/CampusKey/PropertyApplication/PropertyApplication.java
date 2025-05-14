package com.campuskey.CampusKey.PropertyApplication;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name="PropertyApplicationS")
public class PropertyApplication {

    @Id
    @SequenceGenerator(
        name = "PropertyApplication_sequence",
        sequenceName = "PropertyApplication_sequence",
        allocationSize = 1,
        initialValue= 1
    )
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "PropertyApplication_sequence"
    )
    private Long applicationId; 

    private String studentId;
    private String propertyId;  
    private String status;
    private String landlordId;

    public PropertyApplication() {}

    public PropertyApplication(String studentId, String propertyId, String status, String landlordId) {
        this.studentId = studentId;
        this.propertyId = propertyId;
        this.status = status;
        this.landlordId = landlordId;
    }

    public Long getApplicationId() { return applicationId; }
    public void setApplicationId(Long applicationId) { this.applicationId = applicationId; }

    public String getStudentId() { return studentId; }
    public void setStudentId(String studentId) { this.studentId = studentId; }

    public String getPropertyId() { return propertyId; }
    public void setPropertyId(String propertyId) { this.propertyId = propertyId; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getLandlordId() { return landlordId; }
    public void setLandlordId(String landlordId) { this.landlordId = landlordId; }

    @Override
    public String toString() {
        return String.format(
            "PropertyApplication[applicationId=%d, studentId=%s, propertyId=%s, status=%s, landlordId=%s]",
            applicationId, studentId, propertyId, status, landlordId
        );
    }
}
