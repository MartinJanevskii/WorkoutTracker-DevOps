package com.example.gym_tracker.service;

import com.example.gym_tracker.models.Workout;
import com.example.gym_tracker.repository.WorkoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class WorkoutService {

    @Autowired
    private WorkoutRepository workoutRepository;

    public Workout createWorkout (Workout e){
        return workoutRepository.save(e);
    }

    public List<Workout> findAll(){
        List<Workout> workouts = workoutRepository.findAll();
        Collections.reverse(workouts);
        return workouts;
    }

    public void deleteWorkout(String id){
        if (workoutRepository.existsById(id))
            workoutRepository.deleteById(id);
    }

    public Workout getWorkoutById(String id){
        Optional<Workout> e = workoutRepository.findById(id);
        return e.orElse(null);
    }

}
