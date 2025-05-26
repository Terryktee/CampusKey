package com.campuskey.CampusKey.landlord;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LandlordRepository  extends JpaRepository<Landlord,Long> {

    Optional <Landlord> findByEmail(String email);
}
//         return "landlord{" +