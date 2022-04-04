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
                            <img src="/assets/imgCard.png"/> 
                        </Link>   
                    </div>
                    <div className="card">
                        <Link to="/category/name">
                            <img src="/assets/imgCard.png"/> 
                        </Link>   
                    </div>
                    <div className="card">
                        <Link to="/category/name">
                            <img src="/assets/imgCard.png"/> 
                        </Link>   
                    </div>
                    <div className="card">
                        <Link to="/category/name">
                            <img src="/assets/imgCard.png"/> 
                        </Link>   
                    </div>
                    <div className="card">
                        <Link to="/category/name">
                            <img src="/assets/imgCard.png"/> 
                        </Link>   
                    </div>
                    <div className="card">
                        <Link to="/category/name">
                            <img src="/assets/imgCard.png"/> 
                        </Link>   
                    </div>
                    
                </div>
                <div className="moreSection">
                <Link to="/allcategories"><button>ALL CATEGORIES</button></Link>
                </div>
            </div>
    </div>
  )
}

export default Categories