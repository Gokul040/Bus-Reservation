package bus_reservation.service;

import java.util.List;
import java.util.Optional;

import bus_reservation.model.Booking;
import bus_reservation.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;

    public Optional<Booking> getBookingByID(int bookingId){
        return bookingRepository.findById(bookingId);
    }
    public Booking create(Booking booking){
              return this.bookingRepository.save(booking);
//                if (bookingRepository.existsById(booking.getBookingId())){
//                    return Optional.empty();
//                }
//                else{
//                    return Optional.of(bookingRepository.save(booking));
//                }
    }
    public List<Booking> retrieve(){
        return bookingRepository.findAll();
    }
//
//
    public Optional<Booking> update(Booking booking){
        if (bookingRepository.existsById(booking.getBookingId())){
            return Optional.of(bookingRepository.save(booking));
        }else{
            return Optional.empty();
        }
    }
//
    public String delete(int bookingId) {
        if (bookingRepository.existsById(bookingId)) {
            bookingRepository.deleteById(bookingId);
            return bookingId + " deleted successfully!";
        } else {
            return "The employee data does not exist in records!";
        }
//
//    }

    }
}
