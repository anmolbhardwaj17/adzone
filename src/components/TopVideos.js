import React from 'react';
import {useNavigate, Link} from 'react-router-dom';

function TopVideos() {
  return (
    <div className="container">
        <div className="topVideos section">
                <div className="textSection">
                    <h2>Top Videos</h2>
                    <p>Top videos this month</p>
                </div>
                <div className="cardContainer">
                    
                    <div className="card">
                        <Link to="/video/12345">
                            <img src="/assets/imgCard.png"/>
                            <div className="cardContent">
                                <p className="cardTitle">First video</p>
                                <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                            </div>
                        </Link>
                    </div>
                    <div className="card">
                        <Link to="/video/12345">
                            <img src="/assets/imgCard.png"/>
                            <div className="cardContent">
                                <p className="cardTitle">First video</p>
                                <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                            </div>
                        </Link>
                    </div>
                    <div className="card">
                        <Link to="/video/12345">
                            <img src="/assets/imgCard.png"/>
                            <div className="cardContent">
                                <p className="cardTitle">First video</p>
                                <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                            </div>
                        </Link>
                    </div>
                    <div className="card">
                        <Link to="/video/12345">
                            <img src="/assets/imgCard.png"/>
                            <div className="cardContent">
                                <p className="cardTitle">First video</p>
                                <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                            </div>
                        </Link>
                    </div>
                    <div className="card">
                        <Link to="/video/12345">
                            <img src="/assets/imgCard.png"/>
                            <div className="cardContent">
                                <p className="cardTitle">First video</p>
                                <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                            </div>
                        </Link>
                    </div>
                    <div className="card">
                        <Link to="/video/12345">
                            <img src="/assets/imgCard.png"/>
                            <div className="cardContent">
                                <p className="cardTitle">First video</p>
                                <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                            </div>
                        </Link>
                    </div>
                    <div className="card">
                        <Link to="/video/12345">
                            <img src="/assets/imgCard.png"/>
                            <div className="cardContent">
                                <p className="cardTitle">First video</p>
                                <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
    </div>
  )
}

export default TopVideos