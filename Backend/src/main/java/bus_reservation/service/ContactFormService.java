package bus_reservation.service;

import bus_reservation.model.Booking;
import bus_reservation.model.ContactForm;
import bus_reservation.repository.ContactFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactFormService {
    @Autowired
    private ContactFormRepository contactFormRepository;


    public ContactForm create(ContactForm contactdetails){
        return this.contactFormRepository.save(contactdetails);
    }


    public List<ContactForm> retrieve(){
        return contactFormRepository.findAll();
    }



//    public BusDetails UserFindByPlaces(BusDetails busDetails) {
//        return busDetailsRepository.findByPlaces(busDetails.getFrom(),busDetails.getArrivalPlace());
//    }
//

//

    public String delete(int queryNo) {
        if (contactFormRepository.existsById(queryNo)) {
            contactFormRepository.deleteById(queryNo);
            return queryNo + " deleted successfully!";
        } else {
            return "The employee data does not exist in records!";
        }
    }
    public Optional<ContactForm> update(ContactForm contactForm){
        if (contactFormRepository.existsById(contactForm.getQueryNo())){
            return Optional.of(contactFormRepository.save(contactForm));
        }else{
            return Optional.empty();
        }
    }

}

