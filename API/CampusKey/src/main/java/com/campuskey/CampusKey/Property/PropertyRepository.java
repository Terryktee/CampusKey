package com.campuskey.CampusKey.property;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
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

@Query("SELECT DISTINCT p FROM Property p " +
       "LEFT JOIN p.amenities a " +
       "WHERE " +
       "(:landlordName IS NULL OR LOWER(p.landlord.name) LIKE LOWER(CONCAT('%', :landlordName, '%'))) AND " +
       "(:propertyAddress IS NULL OR LOWER(p.propertyAddress) LIKE LOWER(CONCAT('%', :propertyAddress, '%'))) AND " +
       "(:propertyName IS NULL OR LOWER(p.propertyName) LIKE LOWER(CONCAT('%', :propertyName, '%'))) AND " +
       "(:roomTypes IS NULL OR p.roomType IN :roomTypes) AND " +
       "(:amenities IS NULL OR a.name IN :amenities)")
List<Property> findWithFilters(
    @Param("landlordName") String landlordName,
    @Param("propertyAddress") String propertyAddress,
    @Param("propertyName") String propertyName,
    @Param("roomTypes") List<String> roomTypes,
    @Param("amenities") List<String> amenities
);


}

