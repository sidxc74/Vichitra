

import {create} from 'zustand';

const isAuth = JSON.parse(sessionStorage.getItem('isAuth'))

const useAuthStore = create((set) => ({

  isAuthenticated:  isAuth ? isAuth: false,
  login: () => set({isAuthenticated: true} ),
  logout: () => set( {isAuthenticated: false} ),
}));

export default useAuthStore;