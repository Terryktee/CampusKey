package com.campuskey.CampusKey.property;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("api/v1/property")
public class PropertyController {

    private final PropertyService propertyService;

    @Autowired
    public PropertyController(PropertyService propertyService) {
        this.propertyService = propertyService;
    }
/* 
 * @GetMapping
    public List<Property> getProperty() {
        return propertyService.getProperty();
    }

    @GetMapping("/{propertyId}")
    public ResponseEntity<Property> getPropertyById(@PathVariable Long propertyId) {
        Property property = propertyService.getPropertyById(propertyId);
        return ResponseEntity.ok(property);
    }
*/
    


     @GetMapping
    public List<propertyDTO> getAllProperties() {
        return propertyService.getAllProperties();
    }

    @GetMapping("/{propertyId}")
    public ResponseEntity<propertyDTO> getPropertyById(@PathVariable Long propertyId) {
        return propertyService.getPropertyById(propertyId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

     @GetMapping("/search")
    public ResponseEntity<List<Property>> getAllProperties(
            @RequestParam(required = false) String landlord,
            @RequestParam(required = false) String address,
            @RequestParam(required = false) String name)
             {
        List<Property> properties = propertyService.searchProperties(landlord, address,name);
        return ResponseEntity.ok(properties);
    }

    @PostMapping()
    public void registerNewProperty(@RequestBody Property property) throws IllegalAccessException {
        propertyService.addNewProperty(property);
    }

    @DeleteMapping("{propertyId}")
    public void deleteProperty(@PathVariable Long propertyId) throws IllegalAccessException {
        propertyService.deleteProperty(propertyId);
    }

    @PutMapping("{propertyId}")
    public void updateProperty(
            @PathVariable("propertyId") Long propertyId,
            @RequestParam(required = false) String propertyName,
            @RequestParam(required = false) String propertyAddress) {
        propertyService.updateProperty(propertyId, propertyName, propertyAddress);
    }

}
