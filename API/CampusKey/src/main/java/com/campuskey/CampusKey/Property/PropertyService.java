package com.campuskey.CampusKey.Property;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
public class PropertyService {

    private final PropertyRepository propertyRepository;

    public PropertyService(PropertyRepository propertyRepository){
        this.propertyRepository = propertyRepository;
    }

    public List<Property> getProperty(){
        return propertyRepository.findAll();
    }

    public Property getPropertyById(Long propertyId){
        return propertyRepository.findById(propertyId)
            .orElseThrow(() -> new IllegalStateException(
                "Property with id " + propertyId + " does not exist"
            ));
    }
        
    public void addNewProperty(Property property) throws IllegalAccessException{
        Optional <Property> propertyOptional = propertyRepository.findByPropertyAddress(
            property.getPropertyAddress());
            if (propertyOptional.isPresent()){
                throw new IllegalAccessException("Property Already Exists");
            }
            propertyRepository.save(property);
    }

    public void deleteProperty(Long propertyId ) throws IllegalAccessException{
        boolean exists = propertyRepository.existsById(propertyId);
        if (!exists){
            throw new IllegalAccessException("Property does not exist");
        }
        propertyRepository.deleteById(propertyId);
    }

    @Transactional
    public void updateProperty(Long propertyId , String propertyName , String propertyAddress) {
        Property property = propertyRepository.findById(propertyId).
        orElseThrow(() -> new IllegalStateException(
            "Property doe not exist"
        ));

        if(propertyName != null &&
        propertyName.length() > 0 &&
        !Objects.equals(property.getPropertyName(), propertyName)){
            property.setPropertyName(propertyName);
        }

        	if (propertyAddress != null && 
		propertyAddress.length() > 0 &&
		 !Objects.equals(property.getPropertyAddress(),propertyAddress)){
			Optional<Property> propertyOptional = propertyRepository.findByPropertyAddress(propertyAddress);
			if (propertyOptional.isPresent()){
				throw new IllegalStateException(" landlord Number taken");
			}
			property.setPropertyAddress(propertyAddress);;
		}
    }
}
