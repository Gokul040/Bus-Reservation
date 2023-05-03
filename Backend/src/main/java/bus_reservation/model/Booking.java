package bus_reservation.model;
import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="booking")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="booking_id")
    private int bookingId;

    @Column(name="passenger_name")
    private String passengerName;

    @Column(name="contact_number")
    private long contactNumber;

    @Column(name="from_place")
    private String fromPlace;

    @Column(name="arrival_place")
    private String arrivalPlace;

    @Column(name="bus_date")
    @Temporal(TemporalType.DATE)
    private Date busDate;

    @Column(name="bus_no")
    private int busNo;

    public Booking() {
    }

    public Booking(int bookingId, String passengerName, long contactNumber, String fromPlace, Date busDate, int busNo,String arrivalPlace) {
        this.bookingId = bookingId;
        this.passengerName = passengerName;
        this.contactNumber = contactNumber;
        this.fromPlace = fromPlace;
        this.busDate = busDate;
        this.busNo = busNo;
        this.arrivalPlace = arrivalPlace;
    }

    public int getBookingId() {
        return bookingId;
    }

    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
    }

    public String getPassengerName() {
        return passengerName;
    }

    public void setPassengerName(String passengerName) {
        this.passengerName = passengerName;
    }

    public long getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(long contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getFromPlace() {
        return fromPlace;
    }

    public void setFromPlace(String fromPlace) {
        this.fromPlace = fromPlace;
    }

    public String getArrivalPlace() {
        return arrivalPlace;
    }

    public void setArrivalPlace(String arrivalPlace) {
        this.arrivalPlace = arrivalPlace;
    }

    public Date getbusDate() {
        return busDate;
    }

    public void setbusDate(Date travelDate) {
        this.busDate = travelDate;
    }

    public int getBusNo() {
        return busNo;
    }

    public void setBusNo(int busNo) {
        this.busNo = busNo;
    }
}

