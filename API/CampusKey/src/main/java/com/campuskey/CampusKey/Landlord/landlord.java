package com.campuskey.CampusKey.Landlord;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name = "landlord")
public class landlord {

    @Id
    @SequenceGenerator(
        name = "landlord_sequence",
        sequenceName = "landlord_sequence",
        allocationSize = 1,
        initialValue = 1
    )

    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "landlord_sequence"
    )
    private Long id;
    private String name;
    private String surname;
    private String email;
    private String phone;

    public landlord(){

    }

    public landlord(String name,String surname , String email,String phone){
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.phone=phone;
    }

    public Long getId(){return id;}
    public void setId(Long id){this.id=id;}

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
            id,name,surname,email,phone);
    }
}
