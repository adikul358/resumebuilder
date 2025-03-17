package com.aj2.resumebuilder.api.model;

public class Education {

        private String degree;
        private String institution;
        private String location;
        private float grade;
        private String start_date;
        private String end_date;
        private String description;

        // Getter Methods
        public String getDegree() {
            return degree;
        }
        public String getInstitution() {
            return institution;
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
        public void setDegree( String degree ) {
            this.degree = degree;
        }
        public void setInstitution( String institution ) {
            this.institution = institution;
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
