package com.aj2.resumebuilder.api.model;

import java.util.ArrayList;

public class Resume {
    public ArrayList<Education> education = new ArrayList<>();
    public ArrayList<Experience> experience = new ArrayList<>();
    public Metadata metadata;
}
