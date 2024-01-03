import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IUser {
  id : number;
  name : string;
  entidade : string;
}
interface IAuthentication {
  user : IUser[];
}

export const useUser = create<IAuthentication>(set => {
  return {
    user : []
  }
})
