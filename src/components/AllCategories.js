import React from 'react';
import '../stylesheets/AllCategories.css';
import {useNavigate, Link} from 'react-router-dom';

function AllCategories() {
  return (
    <div className="container">
        <div className="categories section">
                <div className="textSection">
                    <h2>Categories</h2>
                    <p>Our most famous categories</p>
                </div>
                <div className="cardContainer categoryPos">
                    <div className="card">
                        <Link to="/category/name">
                            <img src="https://random.imagecdn.app/1920/1080"/> 
                        </Link>   
                    </div>
                    <div className="card">
                        <Link to="/category/name">
                            <img src="https://random.imagecdn.app/1920/1080"/> 
                        </Link>   
                    </div>
                    <div className="card">
                        <Link to="/category/name">
                            <img src="https://random.imagecdn.app/1920/1080"/> 
                        </Link>   
                    </div>
                    <div className="card">
                        <Link to="/category/name">
                            <img src="https://random.imagecdn.app/1920/1080"/> 
                        </Link>   
                    </div>
                    <div className="card">
                        <Link to="/category/name">
                            <img src="https://random.imagecdn.app/1920/1080"/> 
                        </Link>   
                    </div>
                    <div className="card">
                        <Link to="/category/name">
                            <img src="https://random.imagecdn.app/1920/1080"/> 
                        </Link>   
                    </div>
                    <div className="card">
                        <Link to="/category/name">
                            <img src="https://random.imagecdn.app/1920/1080"/> 
                        </Link>   
                    </div>
                    <div className="card">
                        <Link to="/category/name">
                            <img src="https://random.imagecdn.app/1920/1080"/> 
                        </Link>   
                    </div>
                    <div className="card">
                        <Link to="/category/name">
                            <img src="https://random.imagecdn.app/1920/1080"/> 
                        </Link>   
                    </div>
                    
                </div>
            </div>
    </div>
  )
}

export default AllCategories