package com.campuskey.CampusKey.propertyPicture;

import com.campuskey.CampusKey.property.Property;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class PropertyPicture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "property_id")
    private Property property;

     public PropertyPicture() {}

    public PropertyPicture(Long id , String imageUrl){
        this.id=id;
        this.imageUrl=imageUrl;
    }
    public Long getId(){return id;}
    public String getimageUrl(){return imageUrl;}

    public void setId(Long id){this.id=id;}
    public void setimageUrl(String imageUrl){this.imageUrl=imageUrl;}


}

