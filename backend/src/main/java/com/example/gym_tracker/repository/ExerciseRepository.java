package com.example.gym_tracker.repository;

import com.example.gym_tracker.models.Exercise;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ExerciseRepository extends MongoRepository<Exercise, String>{
}
