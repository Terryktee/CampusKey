package com.campuskey.CampusKey.propertyApplication;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;


@Service
public class PropertyApplicationService {

    private final PropertyApplicationRepository propertyApplicationRepository;

    public PropertyApplicationService(PropertyApplicationRepository propertyApplicationRepository){
        this.propertyApplicationRepository = propertyApplicationRepository;
    }

    public List<PropertyApplication> getApplications(){
        return propertyApplicationRepository.findAll();
    }

    public void postApplication(PropertyApplication propertyApplication) throws IllegalAccessException{
       Optional <PropertyApplication> ApplicationOptional=  propertyApplicationRepository.findById(
        propertyApplication.getApplicationId()
        );

        if(ApplicationOptional.isPresent()){
            throw new IllegalAccessException("Application already done");
        }
        propertyApplicationRepository.save(propertyApplication);
    }

    public void cancelApplication(Long ApplicationId) throws  IllegalStateException{
        boolean exists = propertyApplicationRepository.existsById(ApplicationId);
        if (!exists){
            throw new IllegalStateException("Application not found");
        }
        propertyApplicationRepository.deleteById(ApplicationId);

    }
}
