import React, {useContext, useState} from 'react';
import '../../common/Navbar.css'; 
import './../../assets/styles/login.css'; 
import { AuthContext } from '../../auth/AuthContext';

const LogoutButton = () => {
  const {logout} = useContext(AuthContext);
  const [msg, setMsg] = useState("");

  const handleLogout = () => {
    logout();
    setMsg("Has hecho logout con éxito!")
    setTimeout(() => {
        setMsg("");
      }, 3000);
  }

  return (
    <>
        {msg.length > 0 && <div className="successMsg"> {msg} </div>}
        <button className='buttons_navbar' onClick={handleLogout}>
        Cerrar sesión
        </button>
    </>
  );
}

export default LogoutButton;