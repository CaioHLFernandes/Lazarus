package com.example.lazarus.entity;

import jakarta.annotation.Nonnull;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "Usuario")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Nonnull
    private String nome;

    @ManyToMany
    private List<Profile> perfis;

    private List<Long> perfisId;
    public User() {
    }
}
