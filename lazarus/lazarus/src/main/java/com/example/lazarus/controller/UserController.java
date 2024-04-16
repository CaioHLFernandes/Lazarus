package com.example.lazarus.controller;

import com.example.lazarus.entity.Profile;
import com.example.lazarus.entity.User;
import com.example.lazarus.repository.ProfileRepository;
import com.example.lazarus.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ProfileRepository profileRepository;

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> usuarios = userRepository.findAll();
        return new ResponseEntity<>(usuarios, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUsuarioById(@PathVariable Long id) {
        User usuario = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario not found with id " + id));
        return new ResponseEntity<>(usuario, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<User> createUsuario(@RequestBody User usuario) {
        // Obter os perfis correspondentes aos IDs fornecidos no usuário
        List<Profile> perfis = profileRepository.findAllById(usuario.getPerfisId());
        usuario.setPerfis(perfis);
        User savedUsuario = userRepository.save(usuario);
        return new ResponseEntity<>(savedUsuario, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUsuario(@PathVariable Long id, @RequestBody User usuarioDetails) {
        User usuario = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario not found with id " + id));
        List<Profile> perfis = profileRepository.findAllById(usuarioDetails.getPerfisId());
        usuario.setNome(usuarioDetails.getNome());
        usuario.setPerfis(perfis);

        User updatedUsuario = userRepository.save(usuario);
        return new ResponseEntity<>(updatedUsuario, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUsuario(@PathVariable Long id) {
        userRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
