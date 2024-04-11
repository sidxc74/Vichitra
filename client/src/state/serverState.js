// useAuth.js
import { useMutation } from '@tanstack/react-query';
import { loginApi } from '../api/users.api';
import { useNavigate } from 'react-router-dom';
import useAuthStore from './clientState';


function useAuth() {

    const login = useAuthStore(state => state.login)
    const navigate = useNavigate()

    const authMutation = useMutation({mutationFn: async({formData,callbackFn}) => {
        try {
            
            const data = await callbackFn(formData);
            console.log("apisuccess",data)
            return data; 
        } catch (error) {
            
            console.error("Error during Auth:", error);
            throw error; 
        }
    },
    onSuccess:(data, variables) => {
        login();
            console.log('its success')
            navigate('/register')

    },
    onError: () => {
            console.log('its not')
    }
    

},
   
    );

    

    return authMutation;
}

export default useAuth;


