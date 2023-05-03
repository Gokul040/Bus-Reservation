package bus_reservation.model;

import javax.persistence.*;


@Entity
@Table(name="contact_form")
public class ContactForm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="query_no")
    private int queryNo;

    @Column(name="user_name")
    private String userName;

    @Column(name="email_address")
    private String emailAddress;
    @Column(name="feedback_messages")
    private String feedbackMessages;
    @Column(name="feedback_status")
    private boolean feedbackStatus;

    public ContactForm(int queryNo, String userName, String emailAddress, String feedbackMessages, boolean feedbackStatus) {
        this.queryNo = queryNo;
        this.userName = userName;
        this.emailAddress = emailAddress;
        this.feedbackMessages = feedbackMessages;
        this.feedbackStatus = feedbackStatus;
    }

    public boolean getFeedbackStatus() {
        return feedbackStatus;
    }

    public void setFeedbackStatus(boolean feedbackStatus) {
        this.feedbackStatus = feedbackStatus;
    }

    public ContactForm() {
    }

    public String getFeedbackMessages() {
        return feedbackMessages;
    }

    public void setFeedbackMessages(String feedbackMessages) {
        this.feedbackMessages = feedbackMessages;
    }



    public int getQueryNo() {
        return queryNo;
    }

    public void setQueryNo(int queryNo) {
        this.queryNo = queryNo;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public boolean isFeedbackStatus() {
        return feedbackStatus;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }
}
