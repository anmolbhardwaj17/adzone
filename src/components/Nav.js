import React from 'react';
import '../stylesheets/Nav.css';
import {useNavigate} from 'react-router-dom';


function Nav() {

    // const navigate = useNavigate();
    
  
    // const toHome = () =>{ 
    //     navigate('/')
    // }

    // const toProjects = () =>{ 
    //     navigate('/projects')
    // }

    return (
        <nav>
            <div className="brand">
                <p>Adzone</p>
            </div>   
        </nav>
    )
}

export default Nav
