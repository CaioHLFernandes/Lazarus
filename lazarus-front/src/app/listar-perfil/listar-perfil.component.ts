import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../models/profile.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listar-perfil',
  templateUrl: './listar-perfil.component.html',
  styleUrls: ['./listar-perfil.component.scss']
})
export class ListarPerfilComponent implements OnInit {
  perfis: Profile[] | undefined;
  novoPerfilDescricao: string = ''
  perfilSelecionado: Profile | null = null;
  perfilEditado: Profile | null = null;

  constructor(private httpClient: HttpClient, private profileService: ProfileService) {
  }
  ngOnInit(): void {
    this.carregarPerfis();
  }

  carregarPerfis() {
    this.profileService.getPerfis().subscribe((profiles: Profile[] | undefined) => {
      this.perfis = profiles;
    });
  }

  criarPerfil(): void {
    if (this.novoPerfilDescricao.trim()) {
      const novoPerfil = {
        descricao: this.novoPerfilDescricao
      };
      this.profileService.criarPerfil(novoPerfil).subscribe(perfil => {
        this.perfis?.push(perfil);
        this.novoPerfilDescricao = ''; 
      });
    }
  }

  deletarPerfil(id: number) {
    this.profileService.deletarPerfil(id).subscribe(() => {
      this.carregarPerfis();
    });
  }

  abrirModalEditarPerfil(profile: Profile) {
    this.perfilSelecionado = profile;
    this.perfilEditado = { ...profile }; 
  }

  fecharModalEditarPerfil() {
    this.perfilSelecionado = null;
    this.perfilEditado = null;
  }

  atualizarPerfil() {
    if (this.perfilEditado) {
      this.profileService.atualizarPerfil(this.perfilEditado).subscribe(() => {
        this.carregarPerfis();
        this.fecharModalEditarPerfil(); 
      });
  }
}
}
