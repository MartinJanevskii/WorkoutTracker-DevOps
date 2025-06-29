package com.example.gym_tracker.controller;

import com.example.gym_tracker.models.Workout;
import com.example.gym_tracker.service.WorkoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/workouts")
public class WorkoutController {

    @Autowired
    private WorkoutService workoutService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Workout createWorkout(@RequestBody Workout workout) {
        System.out.println(workout);
        return workoutService.createWorkout(workout);
    }

    @GetMapping
    public List<Workout> getAllWorkouts() {
        return workoutService.findAll();
    }

    @GetMapping("/{id}")
    public Workout getWorkoutById(@PathVariable String id) {
        System.out.println("getworkout " + id);
        return workoutService.getWorkoutById(id);
    }
}
