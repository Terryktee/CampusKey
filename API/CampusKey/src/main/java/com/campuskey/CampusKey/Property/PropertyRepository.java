package com.campuskey.CampusKey.property;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Long> {
    EntityManager em;

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

List<Property> findWithFilters(
    //finish the code
    @Param("landlordName") String landlordName,
    @Param("propertyAddress") String propertyAddress,
    @Param("propertyName") String propertyName,
    @Param("roomTypes") List<String> roomTypes,
    @Param("amenities") List<String> amenities

    CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Property> cq = cb.createQuery(Property.class);

        Root<Property> book = cq.from(Property.class);
        Predicate authorNamePredicate = cb.equal(book.get("author"), authorName);
        Predicate titlePredicate = cb.like(book.get("title"), "%" + title + "%");
        cq.where(authorNamePredicate, titlePredicate);

        TypedQuery<Book> query = em.createQuery(cq);
        return query.getResultList();
);


}

