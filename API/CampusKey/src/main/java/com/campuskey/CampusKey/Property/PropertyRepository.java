package com.campuskey.CampusKey.Property;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PropertyRepository extends JpaRepository<Property,Long> {

    Optional <Property> findByPropertyName(String propertyName);
    Optional <Property> findByPropertyAddress(String propertyAddress);
}
