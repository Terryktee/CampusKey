package com.campuskey.CampusKey.Property;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.DeleteExchange;

@RestController
@RequestMapping("api/v1/property")
public class PropertyController {

    private final PropertyService propertyService;

    @Autowired
    public PropertyController(PropertyService propertyService){
        this.propertyService = propertyService;
    }

    @GetMapping
    public List<Property> getProperty(){
        return propertyService.getProperty();
    }
    @PostMapping()
    public void registerNewProperty(@RequestBody Property property) throws IllegalAccessException{
        propertyService.addNewProperty(property);
    }
    @DeleteExchange("{propertyId}")
    public void deleteProperty(@PathVariable Long propertyId) throws IllegalAccessException{
        propertyService.deleteProperty(propertyId);
    }
    @PutMapping("{propertyId}")
    public void updateProperty(
        @PathVariable("propertyId") Long propertyId,
        @RequestParam(required = false) String propertyName,
        @RequestParam(required = false) String propertyAddress
    ){
        propertyService.updateProperty(propertyId,propertyName,propertyAddress);
    }

}
