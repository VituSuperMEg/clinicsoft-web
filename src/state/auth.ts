import create from 'zustand';
import { persist } from 'zustand/middleware';
import { api } from '../services/api';
import { desformatarCPF } from '../helpers/format';
import { Messages } from '../helpers/messages';
import { setToken } from '../services/auth';

interface IUser {
  id: string;
  name: string;
  email: string;
}

interface IAuthentication {
  user: IUser;
  isAuthenticated: boolean;
  onLogin: (cpf: string, password: string) => Promise<void>;
  logout: () => void;
}

const TOKEN_WEB = '@clinicsoft-token';
const msg = new Messages();

const isAuthenticated = () => localStorage.getItem(TOKEN_WEB) !== null;

export const useUser = create(
  persist<IAuthentication>(
    set => ({
      user: {} as IUser,
      isAuthenticated: isAuthenticated(),
      onLogin: async (cpf: string, password: string) => {
        try {
          const response = await api.post('/login/', {
            username: desformatarCPF(cpf),
            password: password,
          });

          if (response.data) {
            set({ isAuthenticated: true, user: response.data.user_info });
            setToken(response.data.token);
          }
        } catch (error) {
          msg.error(error.response.data.non_field_errors[0]);
          // msg.error('Erro durante a autenticação:', error);
        }
      },
      logout: () => {
        localStorage.removeItem(TOKEN_WEB);
        set({ isAuthenticated: false });
      },
    }),
    {
      name: 'authentication-storage',
      getStorage: () => localStorage,
    }
  )
);
