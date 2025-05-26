package com.campuskey.CampusKey.amenity;

import java.util.ArrayList;
import java.util.List;

import com.campuskey.CampusKey.property.Property;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

@Entity
public class Amenity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToMany(mappedBy = "amenities")
    private List<Property> properties = new ArrayList<>();

    public Amenity(Long id, String name){
        this.id=id;
        this.name=name;
    }
    
    public Long getId(){return id;}
    public void setId(Long id){this.id=id;}

    public String getName(){return name;}
    public void setName(String name){this.name=name;}

    @Override
    public String toString(){
        return String.format(
            "Amenity[ id = %d,name=%s]",id,name
        );
    }

}


