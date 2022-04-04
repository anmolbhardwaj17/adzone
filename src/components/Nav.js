import React from 'react';
import '../stylesheets/Nav.css';
import {useNavigate, Link} from 'react-router-dom';


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
                <Link to="/">
                    <p>Brand</p>
                </Link>
            </div>   
        </nav>
    )
}

export default Nav
