package bus_reservation.controller;
import java.util.List;
import java.util.Optional;
import bus_reservation.model.Booking;
import bus_reservation.model.BusDetails;
import bus_reservation.model.ContactForm;
import bus_reservation.service.BookingService;
import bus_reservation.service.BusDetailsService;
import bus_reservation.service.ContactFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/*
    CRUD - Create, Retrieve, Update, Delete
    POST    /booking/b1/bookings	    create new Booking
    GET	    /booking/b1/bookings	    retrieve all Employees
    GET	    /booking/b1/bookings:bookingID	retrieve a bookings by :bookingID
    PUT	    /booking/b1/bookings/   	update a bookings
    DELETE  /booking/b1/bookings:bookingID	delete a bookings by :bookingID
*/

@CrossOrigin(origins ="http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping("user")
public class ApiController {
    @Autowired
    private BusDetailsService busDetailsService;
    @Autowired
    private BookingService bookingService;
    @Autowired
    private ContactFormService contactFormService;


    // Booking Model
    @GetMapping("/getBookings/{id}")
    public Optional<Booking> getBookings(@PathVariable Integer id) {
        return bookingService.getBookingByID(id);
    }




    @GetMapping("/getAllBookings")
    public List<Booking> getALLBookings() {
        return bookingService.retrieve();
    }

    @PostMapping("/saveBookings")
    public Booking saveBookings(@RequestBody Booking booking) {
        return this.bookingService.create(booking);
//            Optional<Booking> _booking = BookingService.create(booking);
//            if(_booking.isPresent()){
//                return "Your Booking data has been saved successfully!";
//            }else{
//                return "Booking already exist in records";
//            }
    }

    @PutMapping("/updateBooking")
    public String updateBooking(@RequestBody Booking booking) {
        Optional<Booking> _booking = bookingService.update(booking);
        if (_booking.isPresent()) {
            return "The employee data has been updated successfully!";

        } else {
            return "The employee data does not exist in records!";
        }
    }

    @DeleteMapping("/delete/{id}")
    public String deleteBookingId(@PathVariable("id") int bookingId) {
        return bookingService.delete(bookingId);
    }


    // Bus details Model

    @GetMapping("/getAllBusDetails")
    public List<BusDetails> getAllBusDetails() {
        return busDetailsService.retrieve();
    }

    @PostMapping("/saveBusDetails")
    public BusDetails saveBusDetails(@RequestBody BusDetails busDetails) {
        return this.busDetailsService.create(busDetails);
    }
//    @GetMapping(value = "/search")
//    public ResponseEntity<List<BusDetails>> getsBuses(@RequestParam String arrivalPlace,@RequestParam String fromPlace,@RequestParam Date busDate){
//    List<BusDetails> detailedBusDetails = busDetailsService.getBuses(arrivalPlace, fromPlace, busDate);
//    return ResponseEntity.ok(detailedBusDetails);
//    }

//    @GetMapping("/BusDetails/{from}/{arrivalPlace}")
//    public BusDetails UserFindByPlaces(@ModelAttribute("busDetails") BusDetails busDetails, Model model) {
//        BusDetails busDetails1 = busDetailsService.UserFindByPlaces(busDetails);
//        model.addAttribute("busDetails1",busDetails1);
//        return busDetails1;
    @PutMapping("/updateBusDetails")
    public String updateBusDetails(@RequestBody BusDetails busDetails) {
        Optional<BusDetails> _busDetails = busDetailsService.update(busDetails);
        if (_busDetails.isPresent()) {
            return "The employee data has been updated successfully!";

        } else {
            return "The employee data does not exist in records!";
        }
    }

    @DeleteMapping("/busDelete/{id}")
    public String busDelete(@PathVariable("id") int busNo) {
        return busDetailsService.delete(busNo);
    }


//    Contact Form
    @DeleteMapping("/deleteQuery/{id}")
      public String deleteQuery(@PathVariable("id") int queryNo) {

            return contactFormService.delete(queryNo);
    }


        @GetMapping("/getAllQueries")
    public List<ContactForm> getAllQueries() {

        return contactFormService.retrieve();
    }

    @PostMapping("/saveQueries")
    public ContactForm saveQueries(@RequestBody ContactForm contactForm) {
        return this.contactFormService.create(contactForm);
    }
    @PutMapping("/updateQuery")
    public String updateQuery(@RequestBody ContactForm contactForm) {
        Optional<ContactForm> _contactForm = contactFormService.update(contactForm);
        if (_contactForm.isPresent()) {
            return "The  data has been updated successfully!";
        } else {
            return "The  data does not exist in records!";
        }
    }
}
