package com.example.lazarus.entity;

import jakarta.annotation.Nonnull;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "Perfil")
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Nonnull
    private String descricao;
    public Profile() {
    }
}
