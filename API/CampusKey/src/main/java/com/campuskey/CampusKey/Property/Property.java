package com.campuskey.CampusKey.property;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.campuskey.CampusKey.landlord.Landlord;
import com.campuskey.CampusKey.propertyPicture.PropertyPicture;
import com.campuskey.CampusKey.amenity.Amenity;
import com.campuskey.CampusKey.student.Student;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "property")
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "propertyId")
    private Long propertyId;

    private String propertyName;
    private String propertyType;
    private String propertyAddress;
    private String propertyPrice;
    private String propertyDescription;
    private String propertyImage;

    @ManyToMany
    @JoinTable(name="amenity_property",
            joinColumns = @JoinColumn(name="propertyId"),
            inverseJoinColumns = @JoinColumn(name="id")
            )
    private Set<Amenity> amenities = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "landlordId")
    @JsonManagedReference
    private Landlord landlord;

    @ManyToMany
    @JoinTable(name = "saved_properties", joinColumns = @JoinColumn(name = "propertyId"), inverseJoinColumns = @JoinColumn(name = "studentId"))
    private List<Student> studentsWhoSaved = new ArrayList<>();

    @OneToMany(mappedBy = "property", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<PropertyPicture> pictures = new ArrayList<>();

    public Property() {
    }

    public Property(String propertyName, String propertyType, String propertyAddress, String propertyPrice,
            String propertyDescription, String propertyImage, Set<Amenity> amenities) {
        this.propertyName = propertyName;
        this.propertyType = propertyType;
        this.propertyAddress = propertyAddress;
        this.propertyPrice = propertyPrice;
        this.propertyDescription = propertyDescription;
        this.propertyImage = propertyImage;
        this.amenities = amenities;
    }

    // Getters and Setters

    public Long getPropertyId() {
        return propertyId;
    }

    public void setPropertyId(Long propertyId) {
        this.propertyId = propertyId;
    }

    public String getPropertyName() {
        return propertyName;
    }

    public void setPropertyName(String propertyName) {
        this.propertyName = propertyName;
    }

    public String getPropertyType() {
        return propertyType;
    }

    public void setPropertyType(String propertyType) {
        this.propertyType = propertyType;
    }

    public String getPropertyAddress() {
        return propertyAddress;
    }

    public void setPropertyAddress(String propertyAddress) {
        this.propertyAddress = propertyAddress;
    }

    public String getPropertyPrice() {
        return propertyPrice;
    }

    public void setPropertyPrice(String propertyPrice) {
        this.propertyPrice = propertyPrice;
    }

    public String getPropertyDescription() {
        return propertyDescription;
    }

    public void setPropertyDescription(String propertyDescription) {
        this.propertyDescription = propertyDescription;
    }

    public String getPropertyImage() {
        return propertyImage;
    }

    public void setPropertyImage(String propertyImage) {
        this.propertyImage = propertyImage;
    }

    public Set<Amenity> getPropertyAmenties() {
        return amenities;
    }

    public void setPropertyAmenties(Set<Amenity> amenties) {
        this.amenities = amenties;
    }

    public Landlord getLandlord() {
        return landlord;
    }

    public void setLandlord(Landlord landlord) {
        this.landlord = landlord;
    }

    public List<Student> getStudentsWhoSaved() {
        return studentsWhoSaved;
    }

    public void setStudentsWhoSaved(List<Student> studentsWhoSaved) {
        this.studentsWhoSaved = studentsWhoSaved;
    }

    public List<PropertyPicture> getPictures() {
        return pictures;
    }

    public void setPictures(List<PropertyPicture> pictures) {
        this.pictures = pictures;
    }

    @Override
    public String toString() {
        return String.format(
                "Property[propertyId=%d, propertyName='%s', propertyType='%s', propertyAddress='%s', " +
                        "propertyPrice='%s', propertyDescription='%s', propertyImage='%s', propertyAmenties='%s']",
                propertyId, propertyName, propertyType, propertyAddress, propertyPrice, propertyDescription,
                propertyImage, amenities);
    }
}
