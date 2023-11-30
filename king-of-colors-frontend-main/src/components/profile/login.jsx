import React, { useState, useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext.jsx';
import axios from 'axios';
import './../../assets/styles/login.css';
import Navbar from '../../common/Navbar.jsx';


function Login() {
  const {token, setToken} = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, {
        auth: {
        username: username,
        email: email,
        password: password}, 
        scope: ["user"]}
      ).then((response) => {
        console.log('Login successful');
        setError(false);
        setMsg("Login exitoso!");
        // Recibimos el token y lo procesamos
        const access_token = response.data.access_token;
        localStorage.setItem('token', access_token);
        setToken(access_token);
        console.log("Se seteo el token: ", token);
      }).catch((error) => {
        console.error('An error occurred while trying to login:', error);
        setError(true);// aquí puede haber más lógica para tratar los errores
      })

  };


  return (

    <div className="Login">
      <Navbar> </Navbar>
      {msg.length > 0 && <div className="successMsg"> {msg} </div>}

      {error && <div className="error">Hubo un error con el Login, por favor trata nuevamente.</div>}
      <form onSubmit={handleSubmit}>
        <label className='texto_login'>
          Username:
          <input 
            type="text" 
            name="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </label>
        <label className='texto_login'>
          Email:
          <input 
            type="email" 
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <label className='texto_login'>
          Password:
          <input 
            type="password" 
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Login;