import React from 'react';
import {useNavigate, Link} from 'react-router-dom';

function singleCategory() {
  return (
    <div className="container">
      <div className="allVideos section">
                <div className="textSection">
                    <h2>Single Category Title</h2>
                    <p>Collection of our top videos</p>
                </div>
                <div className="cardContainer">
                    <div className="card">
                        <Link to="/video/12345">
                            <img src="https://random.imagecdn.app/1920/1080"/>
                            <div className="cardContent">
                                <p className="cardTitle">First video</p>
                                <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                            </div>
                        </Link>
                    </div>
                    <div className="card">
                        <Link to="/video/12345">
                            <img src="https://random.imagecdn.app/1920/1080"/>
                            <div className="cardContent">
                                <p className="cardTitle">First video</p>
                                <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                            </div>
                        </Link>
                    </div>
                    <div className="card">
                        <Link to="/video/12345">
                            <img src="https://random.imagecdn.app/1920/1080"/>
                            <div className="cardContent">
                                <p className="cardTitle">First video</p>
                                <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                            </div>
                        </Link>
                    </div>
                    <div className="card">
                        <Link to="/video/12345">
                            <img src="https://random.imagecdn.app/1920/1080"/>
                            <div className="cardContent">
                                <p className="cardTitle">First video</p>
                                <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                            </div>
                        </Link>
                    </div>
                    <div className="card">
                        <Link to="/video/12345">
                            <img src="https://random.imagecdn.app/1920/1080"/>
                            <div className="cardContent">
                                <p className="cardTitle">First video</p>
                                <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                            </div>
                        </Link>
                    </div>
                    <div className="card">
                        <Link to="/video/12345">
                            <img src="https://random.imagecdn.app/1920/1080"/>
                            <div className="cardContent">
                                <p className="cardTitle">First video</p>
                                <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                            </div>
                        </Link>
                    </div>
                    <div className="card">
                        <Link to="/video/12345">
                            <img src="https://random.imagecdn.app/1920/1080"/>
                            <div className="cardContent">
                                <p className="cardTitle">First video</p>
                                <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                            </div>
                        </Link>
                    </div>
                    <div className="card">
                        <Link to="/video/12345">
                            <img src="https://random.imagecdn.app/1920/1080"/>
                            <div className="cardContent">
                                <p className="cardTitle">First video</p>
                                <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                            </div>
                        </Link>
                    </div>
                    <div className="card">
                        <Link to="/video/12345">
                            <img src="https://random.imagecdn.app/1920/1080"/>
                            <div className="cardContent">
                                <p className="cardTitle">First video</p>
                                <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                            </div>
                        </Link>
                    </div>
                    
                    
                    
                </div>
                <div className="moreSection">
                <Link to="/allCategory"><button>Load more</button></Link>
                </div>
            </div>
    </div>
  )
}

export default singleCategory