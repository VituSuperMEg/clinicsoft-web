import { create } from "zustand";
import { persist } from "zustand/middleware";
import { api } from "../services/api";

interface IUser {
  id: number;
  name: string;
  entidade: string;
}

interface IAuthentication {
  isAuthenticated: boolean;
  onLogin: (cpf: string, password: string) => Promise<void>;
}

export const useUser = create<IAuthentication>(set => {
  return {
    isAuthenticated: true,
    onLogin: async (cpf: string, password: string) => {
      try {
        const response = await api.post('/login/', {
          cpf : cpf,
          senha : password
        });
        if (response.data) {
          set({ isAuthenticated : true });
        }
      } catch (error) {
        console.error('Erro durante a autenticação:', error);
      }
    },
  };
});
