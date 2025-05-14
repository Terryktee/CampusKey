package com.campuskey.CampusKey.Property;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name = "property")
public class Property {

    @Id
    @SequenceGenerator(
        name = "property_sequence",
        sequenceName = "property_sequence",
        allocationSize = 1,
        initialValue= 1
    )
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "property_sequence"
    )
    private Long propertyId;
    private String propertyName;
    private String propertyType;
    private String propertyAddress;
    private String propertyPrice;
    private String propertyDescription;
    private String propertyImage;
    private String propertyAmenties;
    private String LandlordId;
    
    public Property(){}
    public Property( String propertyName, String propertyType, String propertyAddress, String propertyPrice,String propertyDescription, String propertyImage,  String propertyAmenties,String LandlordId ) {
        
        this.propertyName = propertyName;
        this.propertyType = propertyType;
        this.propertyAddress = propertyAddress;
        this.propertyPrice = propertyPrice;
        this.propertyDescription = propertyDescription;
        this.propertyImage = propertyImage;
        this.propertyAmenties = propertyAmenties;
        this.LandlordId = LandlordId;
    }

    public Long getPropertyId() {return propertyId;}
    public void setPropertyId(Long propertyId) {this.propertyId = propertyId;}

    public  String getPropertyName() {return propertyName;}
    public void setPropertyName(String propertyName) {this.propertyName = propertyName;}

    public  String getPropertyType() {return propertyType;}
    public void setPropertyType(String propertyType) {this.propertyType = propertyType;}

    public  String getPropertyAddress() {return propertyAddress;}
    public void setPropertyAddress(String propertyAddress) {this.propertyAddress = propertyAddress;}

    public  String getPropertyPrice() {return propertyPrice;}
    public void setPropertyPrice(String propertyPrice) {this.propertyPrice = propertyPrice;}

    public  String getPropertyDescription() {return propertyDescription;}
    public void setPropertyDescription(String propertyDescription) {this.propertyDescription = propertyDescription;}

    public  String getPropertyImage() {return propertyImage;}
    public void setPropertyImage(String propertyImage) {this.propertyImage = propertyImage;}

    public  String getPropertyAmenties() {return propertyAmenties;}
    public void setPropertyAmenties(String propertyAmenties) {this.propertyAmenties = propertyAmenties;}

    public  String getLandlordId() {return LandlordId;}
    public void setLandlordId(String LandlordId) {this.LandlordId = LandlordId;}

    public String toString(){
        return String.format(
            "Property[propertyId=%d, propertyName='%s', propertyType='%s', propertyAddress='%s', propertyPrice='%s', propertyDescription='%s', propertyImage='%s', propertyLandlordId='%s', propertyAmenties='%s']",
                propertyId,propertyName,propertyType,propertyAddress,propertyPrice,propertyDescription,propertyImage,LandlordId,propertyAmenties);
    }

}
