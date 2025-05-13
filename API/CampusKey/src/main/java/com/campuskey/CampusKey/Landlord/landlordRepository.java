package com.campuskey.CampusKey.Landlord;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface landlordRepository  extends JpaRepository<landlord,Long> {

    Optional <landlord> findByEmail(String email);
}
//         return "landlord{" +