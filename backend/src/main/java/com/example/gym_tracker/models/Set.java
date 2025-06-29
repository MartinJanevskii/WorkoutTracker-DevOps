package com.example.gym_tracker.models;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
//@Document(collection = "sets")
public class Set {

    @JsonProperty("id")
    private String id;

    @JsonProperty("reps")
    private int reps;

    @JsonProperty("weight")
    private double weight;

    @JsonProperty("rpe")
    private double rpe;

    @JsonProperty("restDuration")
    private int restDuration;

    @JsonProperty("setNumber")
    private int setNumber;

    @JsonProperty("exerciseId")
    private String exerciseId;
}
