package bus_reservation.repository;

import bus_reservation.model.BusDetails;
import bus_reservation.model.ContactForm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactFormRepository extends JpaRepository<ContactForm, Integer> {


}
