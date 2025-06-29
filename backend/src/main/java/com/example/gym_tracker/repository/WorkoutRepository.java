package com.example.gym_tracker.repository;

import com.example.gym_tracker.models.Workout;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface WorkoutRepository extends MongoRepository<Workout, String> {
}
