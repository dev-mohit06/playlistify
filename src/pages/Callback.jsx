import { useAuth } from '../common/context.jsx';
import { useNavigate } from 'react-router-dom';
import { getTokenFromUrl } from '../common/auth.js';
import { useEffect } from 'react';

const Callback = () => {
    const { setToken } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const hash = getTokenFromUrl();
        const _token = hash.access_token;
        console.log(_token);
        if (_token) {
            setToken(_token);
            window.location.hash = '';
            navigate('/');
        } else {
            navigate('/sign-in');
        }
    }, [setToken, navigate]);

    return <div>Loading...</div>;
};

export default Callback;