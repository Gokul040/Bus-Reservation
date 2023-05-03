package bus_reservation.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="bus_details")
public class BusDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="bus_no")
    private int busNo;

    @Column(name="bus_name")
    private String busName;

    @Column(name="from_place")
    private String fromPlace;

    @Column(name="arrival_place")
    private String arrivalPlace;

    @Column(name="bus_coach")
    private String busCoach ;

    @Column(name="travel_time")
    private int travelTime;

    @Column(name="bus_date")
    private Date busDate;

    public BusDetails() {

    }

    public BusDetails(int busNo, String busName, String fromPlace, String arrivalPlace, String busCoach, int travelTime,Date busDate) {
        this.busNo = busNo;
        this.busName = busName;
        this.fromPlace = fromPlace;
        this.arrivalPlace = arrivalPlace;
        this.busCoach = busCoach;
        this.travelTime = travelTime;
        this.busDate = busDate;
    }

    public Date getBusDate() {
        return busDate;
    }

    public void setBusDate(Date busDate) {
        this.busDate = busDate;
    }

    public int getBusNo() {
        return busNo;
    }

    public void setBusNo(int busNo) {
        this.busNo = busNo;
    }

    public String getBusName() {
        return busName;
    }

    public void setBusName(String busName) {
        this.busName = busName;
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

    public String getBusCoach() {
        return busCoach;
    }

    public void setBusCoach(String busCoach) {
        this.busCoach = busCoach;
    }

    public int getTravelTime() {
        return travelTime;
    }

    public void setTravelTime(int travelTime) {
        this.travelTime = travelTime;
    }

}
