package com.campuskey.CampusKey.landlord;

import java.util.ArrayList;
import java.util.List;

import com.campuskey.CampusKey.property.Property;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

import jakarta.persistence.Table;

@Entity
@Table(name = "landlord")
public class Landlord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "landlordId")
    private Long landlordId;

    private String name;
    private String surname;
    private String email;
    private String phone;

    @OneToMany(mappedBy = "landlord", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Property> properties = new ArrayList<>();

    
    public Landlord(){

    }

    public Landlord(String name,String surname , String email,String phone){
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.phone=phone;
    }

    public Long getId(){return landlordId;}
    public void setId(Long id){this.landlordId=id;}

    public String getName(){return name;}
    public void setName(String name){this.name=name;}

    public String getSurname(){return surname;}
    public void setSurname(String surname){this.surname=surname;}

    public String getEmail(){return email;}
    public void setEmail(String email){this.email=email;}

    public String getPhone(){return phone;}
    public void setPhone(String phone){this.phone=phone;}


    @Override
    public String toString(){
        return String.format(
            "landlord[id=%d,name=%s,surname=%s,email=%s,phone=%s]",
            landlordId,name,surname,email,phone);
    }
}
