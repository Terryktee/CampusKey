package com.campuskey.CampusKey.amenity;

public class amenityDTO {
    private Long id;
    private String name;

    public amenityDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public long getId(){return id;}
    public String getName(){return name;}

    public void setId(Long id){this.id=id;}
    public void setName(String name){this.name=name;}
}
