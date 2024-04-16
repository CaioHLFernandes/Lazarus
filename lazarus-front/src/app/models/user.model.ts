import { Profile } from "./profile.model";

export interface User {
    id?: number;
    nome: string;
    perfis?: Profile[];
    perfisId: number[];
  }
  