import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg'
import padlock from '../../assets/padlock.png'


export default function Login(){
    const [userName, setUserNname ] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function login(e){
        e.preventDefault();

        const data ={
            userName,
            password,
        };

        try {
            const response = await api.post('api/auth/v1/signin', data);

            localStorage.setItem('userName', userName);
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);

            navigate('/books');
        } catch (err) {
            alert('Login failed Try again!');;
        }
    }

    return(
        <>
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Login" />
                <form onSubmit={login}>
                    <h1>Access your Account</h1>

                    <input 
                        placeholder="UserName" 
                        value={userName}
                        onChange={e => setUserNname(e.target.value)}
                    />

                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button className="button" type="submit">Login</button>
                </form>
            </section>

            <img src={padlock} alt="Login" />
        </div>
        </>
    )
}