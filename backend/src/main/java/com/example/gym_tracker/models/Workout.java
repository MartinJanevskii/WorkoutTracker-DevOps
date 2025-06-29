package com.example.gym_tracker.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;


import java.time.Instant;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "workouts")
public class Workout {

    @JsonProperty("id")
//    @Field("_id")
    @Id
    private String id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("date")
    private Instant date;

    @JsonProperty("sets")
    private List<Set> sets;
}
