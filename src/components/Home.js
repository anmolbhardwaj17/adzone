import {React, useState, useEffect} from 'react';
import '../stylesheets/Home.css';
import {useNavigate, Link} from 'react-router-dom';
import Categories from './categoriesHome';

function Home() {
    return (
        <div className="container">
        {/* <div className="heroSection">
            <h1 className="tagline">the <span className="highlight">viral</span> content is here.</h1>
            <button>BE A MEMBER</button>
        </div> */}
            <div className="allVideos section">
                <div className="textSection">
                    <h2>All Videos</h2>
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
                    
                    
                    
                </div>
                <div className="moreSection">
                <Link to="/topVideos"><button>More videos</button></Link>
                </div>
            </div>
            <div className="topVideos section">
                <div className="textSection">
                    <h2>Top Videos</h2>
                    <p>Top videos this month</p>
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
                    
                </div>
                <div className="moreSection">
                <Link to="/topVideos"><button>More videos</button></Link>
                </div>
            </div>
            <Categories/>
        </div>
    )
}

export default Home