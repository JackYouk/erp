import { useContext } from 'react';
import { AuthContext } from '../contexts/firebase-context';

export const useAuth = () => useContext(AuthContext);
