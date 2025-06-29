package com.example.gym_tracker.models;

import com.example.gym_tracker.models.enums.MuscleGroup;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Document(collection = "exercises")
public class Exercise {
    @JsonProperty("id")
    @Field("_id")
    @Id
    private String id;

    @JsonProperty("muscleGroupList")
    private List<MuscleGroup> muscleGroupList;

    @JsonProperty("name")
    private String name;
}
