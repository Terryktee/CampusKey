package com.campuskey.CampusKey.PropertyApplication;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PropertyApplicationRepository extends JpaRepository<PropertyApplication,Long>{

    Optional <PropertyApplication> findByApplicationId(Long ApplicationId);
    Optional <PropertyApplication> findByStatus(String Status);

}
