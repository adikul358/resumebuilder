package com.aj2.resumebuilder.api.model;

public class Experience {
    private String title;
    private String company;
    private String location;
    private float grade;
    private String start_date;
    private String end_date;
    private String description;


    // Getter Methods

    public String getTitle() {
        return title;
    }

    public String getCompany() {
        return company;
    }

    public String getLocation() {
        return location;
    }

    public float getGrade() {
        return grade;
    }

    public String getStart_date() {
        return start_date;
    }

    public String getEnd_date() {
        return end_date;
    }

    public String getDescription() {
        return description;
    }

    // Setter Methods

    public void setTitle( String title ) {
        this.title = title;
    }

    public void setCompany( String company ) {
        this.company = company;
    }

    public void setLocation( String location ) {
        this.location = location;
    }

    public void setGrade( float grade ) {
        this.grade = grade;
    }

    public void setStart_date( String start_date ) {
        this.start_date = start_date;
    }

    public void setEnd_date( String end_date ) {
        this.end_date = end_date;
    }

    public void setDescription( String description ) {
        this.description = description;
    }
}
