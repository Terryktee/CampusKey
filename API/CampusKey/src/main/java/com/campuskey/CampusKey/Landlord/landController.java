package com.campuskey.CampusKey.landlord;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
@RequestMapping("api/v1/landlord")
public class LandController {

    private final LandlordService landlordService;

    @Autowired
    public LandController(LandlordService landlordService){
        this.landlordService = landlordService;
    }

    @GetMapping
    public List<Landlord> getLandlord(){
        return landlordService.getlandlords();
    }

    @PostMapping
    public void registerNewLandlord(@RequestBody Landlord landlord) throws IllegalAccessException{
        landlordService.addNewlandlord(landlord);
    }

    @DeleteMapping("{landlordId}")
    public void deletelandlord(@PathVariable long landlordId) throws IllegalAccessException{
        landlordService.deletelandlord(landlordId);
    }

    @PutMapping("landlordId")
    public void updatelandlord(
        @PathVariable("landlordId") long landlordId,
        @RequestParam(required = false) String name,
        @RequestParam(required = false) String email
    ){
        landlordService.updatelandlord(landlordId,name,email);
    }
}
