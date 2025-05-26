package com.campuskey.CampusKey.propertyApplication;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/applications")

public class PropertyApplicationController {
    private final PropertyApplicationService propertyApplicationService ;
    @Autowired
    public PropertyApplicationController(PropertyApplicationService propertyApplicationService){
        this.propertyApplicationService = propertyApplicationService;
    }

    @GetMapping
    public List <PropertyApplication> getApplications(){
        return propertyApplicationService.getApplications();
    }

    @PostMapping
    public void Apply(@RequestBody PropertyApplication propertyApplication ) throws IllegalAccessException{
        propertyApplicationService.postApplication(propertyApplication);
    }
    @DeleteMapping("{applicationId}")
    public void cancelApplication(@PathVariable Long applicationId ) throws IllegalStateException{
         propertyApplicationService.cancelApplication(applicationId);
    }
}
