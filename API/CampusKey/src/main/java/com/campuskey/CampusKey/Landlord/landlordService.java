package com.campuskey.CampusKey.landlord;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
public class LandlordService {

    private final LandlordRepository landlordRepository;

    public LandlordService(LandlordRepository landlordRepository){
        this.landlordRepository = landlordRepository;
    }
    
    public List<Landlord> getlandlords(){
        return landlordRepository.findAll();
    }

    
    public void addNewlandlord(Landlord landlord) throws IllegalAccessException{
        Optional <Landlord> landbyOptional = landlordRepository.findByEmail(
            landlord.getEmail()
        );

        if (landbyOptional.isPresent()){
            throw new IllegalAccessException("landlord with email" + landlord.getEmail() + "already exists");
        }

        landlordRepository.save(landlord);
    }

    public void deletelandlord(long landlordId) throws IllegalAccessException{
        boolean exists = landlordRepository.existsById(landlordId);
        if (!exists){
            throw new IllegalAccessException("landlord does not exist");
        }
        landlordRepository.deleteById(landlordId);
    }

    @Transactional
    public void updatelandlord(Long landlordId,String name,String email ){
        Landlord landlord = landlordRepository.findById(landlordId).
        orElseThrow(()-> new IllegalStateException(
            "landlord with id" + landlordId + "does not exist"
        ));
        if (name != null && 
		name.length() > 0 &&
		 !Objects.equals(landlord.getName(),name)){
			landlord.setName(name);
		}
		if (email != null && 
		email.length() > 0 &&
		 !Objects.equals(landlord.getEmail(),email)){
			Optional<Landlord> landlordOptional = landlordRepository.findByEmail(email);
			if (landlordOptional.isPresent()){
				throw new IllegalStateException(" landlord Number taken");
			}
			landlord.setEmail(email);
		}
       
    }
}
