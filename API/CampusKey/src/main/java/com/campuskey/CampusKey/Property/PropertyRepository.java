package com.campuskey.CampusKey.property;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Long> {

    Optional<Property> findByPropertyName(String propertyName);

    Optional<Property> findByPropertyAddress(String propertyAddress);

    List<Property> findByPropertyNameContaining(String propertyName);
    List<Property> findByLandlord_NameContaining(String landlordName);

    List<Property> findByPropertyAddressContaining(String propertyAddress);

    List<Property> findByLandlord_NameContainingAndPropertyAddressContainingAndPropertyNameContaining(
    String landlordName,
    String propertyAddress,
    String propertyName
);

}

