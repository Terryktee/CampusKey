package com.campuskey.CampusKey.property;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
public class PropertyService {

    private final PropertyRepository propertyRepository;

    public PropertyService(PropertyRepository propertyRepository) {
        this.propertyRepository = propertyRepository;
    }

    /*public List<Property> getProperty() {
        return propertyRepository.findAll();
    }

    public Property getPropertyById(Long propertyId) {
        return propertyRepository.findById(propertyId)
                .orElseThrow(() -> new RuntimeException("Property not found"));
    }*/
     public List<propertyDTO> getAllProperties() {
        return propertyRepository.findAll()
                .stream()
                .map(propertyDTO::new)
                .collect(Collectors.toList());
    }

    /**
 * Filters properties using the provided criteria.
 * Pass `null` or empty values for any filters you want to skip.
 */

    public List<propertyDTO> getbyFiltering(String landlordName , String propertyAddress , String propertyName, List<String> roomTypes , List<String> amenities){
        return propertyRepository.findWithFilters(landlordName ,  propertyAddress , propertyName,  roomTypes , amenities) 
        .Stream()
        .map(propertyDTO::new)
        .collect(Collectors.toList());
    }

    public Optional<propertyDTO> getPropertyById(Long propertyId) {
        return propertyRepository.findById(propertyId)
                .map(propertyDTO::new);
    }

    public List<Property> searchProperties(String landlordName, String propertyAddress, String propertyName) {
        if (landlordName != null && propertyAddress != null && propertyAddress != null) {
            return propertyRepository.findByLandlord_NameContainingAndPropertyAddressContainingAndPropertyNameContaining(
    landlordName, propertyAddress, propertyName
);
        } else if (landlordName != null) {
            return propertyRepository.findByLandlord_NameContaining(landlordName);
        }else if(propertyName != null) {
            return propertyRepository.findByPropertyNameContaining(propertyName);
        } else if (propertyAddress != null) {
            return propertyRepository.findByPropertyAddressContaining(propertyAddress);
        } else {
            return propertyRepository.findAll();
        }
    }

    public void addNewProperty(Property property) throws IllegalAccessException {
        Optional<Property> propertyOptional = propertyRepository.findByPropertyAddress(
                property.getPropertyAddress());
        if (propertyOptional.isPresent()) {
            throw new IllegalAccessException("Property Already Exists");
        }
        propertyRepository.save(property);
    }

    public void deleteProperty(Long propertyId) throws IllegalAccessException {
        boolean exists = propertyRepository.existsById(propertyId);
        if (!exists) {
            throw new IllegalAccessException("Property does not exist");
        }
        propertyRepository.deleteById(propertyId);
    }

    @Transactional
    public void updateProperty(Long propertyId, String propertyName, String propertyAddress) {
        Property property = propertyRepository.findById(propertyId).orElseThrow(() -> new IllegalStateException(
                "Property doe not exist"));

        if (propertyName != null &&
                propertyName.length() > 0 &&
                !Objects.equals(property.getPropertyName(), propertyName)) {
            property.setPropertyName(propertyName);
        }

        if (propertyAddress != null &&
                propertyAddress.length() > 0 &&
                !Objects.equals(property.getPropertyAddress(), propertyAddress)) {
            Optional<Property> propertyOptional = propertyRepository.findByPropertyAddress(propertyAddress);
            if (propertyOptional.isPresent()) {
                throw new IllegalStateException(" landlord Number taken");
            }
            property.setPropertyAddress(propertyAddress);
            ;
        }
    }
}
