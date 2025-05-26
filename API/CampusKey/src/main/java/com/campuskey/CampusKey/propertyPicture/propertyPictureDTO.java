package com.campuskey.CampusKey.propertyPicture;

public class propertyPictureDTO {
    
    private Long id;
    private String imageUrl;

    public propertyPictureDTO(Long id, String imageUrl) {
        this.id = id;
        this.imageUrl = imageUrl;
    }

    public Long getId() {
        return id;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
    
}