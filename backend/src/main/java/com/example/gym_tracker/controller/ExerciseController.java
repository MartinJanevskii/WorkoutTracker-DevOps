package com.example.gym_tracker.controller;

import com.example.gym_tracker.models.Exercise;
import com.example.gym_tracker.service.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/exercises")
public class ExerciseController {

    @Autowired
    private ExerciseService exerciseService;

    @GetMapping
    public List<Exercise> findAll(){
        return exerciseService.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Exercise createExercise(@RequestBody Exercise e){
        return exerciseService.createExercise(e);
    }

    @DeleteMapping("/{id}")
    public void deleteExercise(@PathVariable String id){
        exerciseService.deleteExercise(id);
    }
}
