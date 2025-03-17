package com.aj2.resumebuilder.api.model;

public class Metadata {
    private String name;
    private String email;
    private String phone;
    private String linkedin;
    private String github;
    private String website;


    // Getter Methods

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }

    public String getLinkedin() {
        return linkedin;
    }

    public String getGithub() {
        return github;
    }

    public String getWebsite() {
        return website;
    }

    // Setter Methods

    public void setName( String name ) {
        this.name = name;
    }

    public void setEmail( String email ) {
        this.email = email;
    }

    public void setPhone( String phone ) {
        this.phone = phone;
    }

    public void setLinkedin( String linkedin ) {
        this.linkedin = linkedin;
    }

    public void setGithub( String github ) {
        this.github = github;
    }

    public void setWebsite( String website ) {
        this.website = website;
    }
}
