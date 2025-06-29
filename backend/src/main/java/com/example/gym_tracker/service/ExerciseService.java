package com.example.gym_tracker.service;

import com.example.gym_tracker.models.Exercise;
import com.example.gym_tracker.repository.ExerciseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExerciseService {

    @Autowired
    private ExerciseRepository exerciseRepository;

    public List<Exercise> findAll(){
        return exerciseRepository.findAll();
    }

    public void deleteExercise (String id){
        if (exerciseRepository.existsById(id))
            exerciseRepository.deleteById(id);
    }

    public Exercise getExerciseById(String id){
        Optional<Exercise> e = exerciseRepository.findById(id);
        return e.orElse(null);
    }

    public Exercise createExercise(Exercise e){
        return exerciseRepository.save(e);
    }
}
