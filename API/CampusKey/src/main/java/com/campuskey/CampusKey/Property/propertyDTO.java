package com.campuskey.CampusKey.property;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import com.campuskey.CampusKey.amenity.amenityDTO;
import com.campuskey.CampusKey.propertyPicture.propertyPictureDTO;

public class propertyDTO {
    private Long id;
    private String propertyName;
    private String propertyType;
    private String propertyAddress;
    private String propertyPrice;
    private String propertyDescription;

    private Set<amenityDTO> amenities;
    private List<propertyPictureDTO> pictures;

    public propertyDTO(Property property) {
        this.id = property.getPropertyId();
        this.propertyName = property.getPropertyName();

        this.amenities = property.getPropertyAmenties().stream()
                .map(a -> new amenityDTO(a.getId(), a.getName()))
                .collect(Collectors.toSet());

        this.pictures = property.getPictures().stream()
                .map(p -> new propertyPictureDTO(
                        p.getId(), p.getimageUrl()))
                .collect(Collectors.toList());

        this.propertyType = property.getPropertyType(); 
        this.propertyAddress = property.getPropertyAddress(); 
        this.propertyPrice = property.getPropertyPrice(); 
        this.propertyDescription = property.getPropertyDescription(); 
    }

    public Long getId() {return id;}

    public String getName() {return propertyName;}

    public Set<amenityDTO> getAmenties() {return amenities;}

    public List<propertyPictureDTO> getPictures() {return pictures;}

    public void setId(Long id) {this.id = id;}

    public void setName(String propertyName) {this.propertyName = propertyName;}

    public void setPropertyAmenties(Set<amenityDTO> amenties) {this.amenities = amenties;}

    public void setPropertyPictures(List<propertyPictureDTO> pictures) {this.pictures = pictures;}

    public String getPropertyType() {return propertyType;}

    public void setPropertyType(String propertyType) {this.propertyType = propertyType;}

    public String getPropertyAddress() {return propertyAddress;}

    public void setPropertyAddress(String propertyAddress) {this.propertyAddress = propertyAddress;}

    public String getPropertyPrice() {return propertyPrice;}

    public void setPropertyPrice(String propertyPrice) {this.propertyPrice = propertyPrice;}

    public String getPropertyDescription() { return propertyDescription;}

    public void setPropertyDescription(String propertyDescription) {this.propertyDescription = propertyDescription;}

    

}
