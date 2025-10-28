package com.aj2.latexresumebuilder;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
public class LatexResumeBuilderApplication {

    private final ObjectMapper mapper = new ObjectMapper();

    public static void main(String[] args) {
        SpringApplication.run(LatexResumeBuilderApplication.class, args);
    }

//    Sample endpoint
    @PostMapping("/hello")
    @CrossOrigin(origins = "http://localhost:3005")
    public ObjectNode sayHello(@RequestParam(value = "myName", defaultValue = "World") String name) {
        ObjectNode json = mapper.createObjectNode();
        ObjectNode json2 = mapper.createObjectNode();
        json.put("message", "Hello " + name + "!");

        json2.put("id", 123);
        json2.put("coord", 12.24145);

        json.set("data", json2);
        return json;
    }

}
