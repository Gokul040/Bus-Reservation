package bus_reservation.service;

import bus_reservation.model.Booking;
import bus_reservation.model.BusDetails;
import bus_reservation.repository.BookingRepository;
import bus_reservation.repository.BusDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

@Service
public class BusDetailsService {
    @Autowired
    private BusDetailsRepository busDetailsRepository;


    public BusDetails create(BusDetails busDetails){
        return this.busDetailsRepository.save(busDetails);
//                if (bookingRepository.existsById(booking.getBookingId())){
//                    return Optional.empty();
//                }
//                else{
//                    return Optional.of(bookingRepository.save(booking));
//                }
    }
    public List<BusDetails> retrieve(){
        return busDetailsRepository.findAll();
    }

//    public List<BusDetails> getBuses(String arrivalPlace, String fromPlace,Date busDate){
//        return busDetailsRepository.findByBusDetails(arrivalPlace,fromPlace,busDate);
//    }



//    public BusDetails UserFindByPlaces(BusDetails busDetails) {
//        return busDetailsRepository.findByPlaces(busDetails.getFrom(),busDetails.getArrivalPlace());
//    }
//


    public Optional<BusDetails> update(BusDetails busDetails){
        if (busDetailsRepository.existsById(busDetails.getBusNo())){
            return Optional.of(busDetailsRepository.save(busDetails));
        }else{
            return Optional.empty();
        }
    }

    public String delete(int busNo) {
        if (busDetailsRepository.existsById(busNo)) {
            busDetailsRepository.deleteById(busNo);
            return busNo + " deleted successfully!";
        } else {
            return "The employee data does not exist in records!";
        }

    }

}

