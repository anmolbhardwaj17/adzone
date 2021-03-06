import React from 'react';
import {useNavigate, Link} from 'react-router-dom';

function Categories() {
  return (
    <div>
        <div className="categories section">
                <div className="textSection">
                    <h2>Categories</h2>
                    <p>Our most famous categories</p>
                </div>
                <div className="cardContainer">
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
                <div className="moreSection">
                <Link to="/allcategories"><button>All categories</button></Link>
                </div>
            </div>
    </div>
  )
}

export default Categories