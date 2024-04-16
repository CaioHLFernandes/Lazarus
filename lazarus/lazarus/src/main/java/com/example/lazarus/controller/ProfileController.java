package com.example.lazarus.controller;

import com.example.lazarus.entity.Profile;
import com.example.lazarus.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/profile")
public class ProfileController {
    @Autowired
    private ProfileRepository profileRepository;

    @GetMapping
    public ResponseEntity<List<Profile>> getAllProfiles() {
        List<Profile> perfis = profileRepository.findAll();
        return new ResponseEntity<>(perfis, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Profile> getProfileById(@PathVariable Long id) {
        Profile perfil = profileRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Perfil not found with id " + id));
        return new ResponseEntity<>(perfil, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Profile> createProfile(@RequestBody Profile perfil) {
        Profile savedPerfil = profileRepository.save(perfil);
        return new ResponseEntity<>(savedPerfil, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Profile> updateProfile(@PathVariable Long id, @RequestBody Profile profileDetails) {
        Profile perfil = profileRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Perfil not found with id " + id));

        perfil.setDescricao(profileDetails.getDescricao());

        Profile updatedPerfil = profileRepository.save(perfil);
        return new ResponseEntity<>(updatedPerfil, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProfile(@PathVariable Long id) {
        profileRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}