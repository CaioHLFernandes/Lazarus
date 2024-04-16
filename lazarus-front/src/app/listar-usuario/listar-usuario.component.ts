import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss']
})
export class ListarUsuarioComponent implements OnInit {
  usuarios: User[] = [];
  perfisList: any[] = [];
  novoUsuarioNome: string = '';
  perfilSelecionado: number[] = [];
  usuarioSelecionado: User | null = null;
  usuarioEditado: User | null = null;

  constructor(private usuarioService: UserService, private perfilService: ProfileService) { }

  ngOnInit(): void {
    this.getUsuarios();
    this.getPerfis();
  }

  criarUsuario(): void {
    if (this.novoUsuarioNome.trim() && this.perfilSelecionado.length > 0) {
      const novoUsuario = {
        nome: this.novoUsuarioNome,
        perfisId: this.perfilSelecionado
      };
      this.usuarioService.criarUsuario(novoUsuario).subscribe(usuario => {
        this.usuarios.push(usuario);
        this.novoUsuarioNome = '';
        this.perfilSelecionado = [];
      });
    }
  }

  atualizarUsuario(): void {
    if (this.usuarioEditado) {
      this.usuarioService.atualizarUsuario(this.usuarioEditado).subscribe(updatedUsuario => {
        const index = this.usuarios.findIndex(u => u.id === updatedUsuario.id);
        if (index !== -1) {
          this.usuarios[index] = updatedUsuario;
        }
        this.fecharModalEditarUsuario();
      });
    }
  }

  deletarUsuario(id: number): void {
    this.usuarioService.deletarUsuario(id).subscribe(() => {
      this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
    });
  }

  getUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe(usuarios => this.usuarios = usuarios);
  }

  getPerfis(): void {
    this.perfilService.getPerfis().subscribe(perfis => this.perfisList = perfis);
  }

  abrirModalEditarUsuario(usuario: User): void {
    this.usuarioSelecionado = usuario;
    this.usuarioEditado = { ...usuario }; // Clona o usuário para evitar alterações diretas no objeto original
  }

  fecharModalEditarUsuario(): void {
    this.usuarioSelecionado = null;
    this.usuarioEditado = null;
  }
  togglePerfil(perfilId: number): void {
    if (this.usuarioEditado) {
      const index = this.usuarioEditado.perfisId.indexOf(perfilId);
      if (index === -1) {
        this.usuarioEditado.perfisId.push(perfilId); // Adiciona perfil se não estiver presente
      } else {
        this.usuarioEditado.perfisId.splice(index, 1); // Remove perfil se estiver presente
      }
    }
  }
}
