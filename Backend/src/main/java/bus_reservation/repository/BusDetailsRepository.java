package bus_reservation.repository;

import bus_reservation.model.BusDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface BusDetailsRepository extends JpaRepository<BusDetails, Integer> {


}
