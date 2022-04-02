import {React, useState, useEffect} from 'react';
import '../stylesheets/Home.css';
import {useNavigate} from 'react-router-dom';
import Categories from './Categories';

function Home() {
    return (
        <div className="container">
        <div className="heroSection">
            <h1 className="tagline">Best platform for <span className="highlight">viral</span> content.</h1>
            <button>Be a member</button>
        </div>
            <div className="allVideos">
                <div className="textSection">
                    <h2>All Videos</h2>
                    <p>Collection of our top videos</p>
                </div>
                <div className="cardContainer">
                    <div className="card">
                        <img src="/assets/imgCard.png"/>
                        <div className="cardContent">
                            <p className="cardTitle">First video</p>
                            <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/assets/imgCard.png"/>
                        <div className="cardContent">
                            <p className="cardTitle">First video</p>
                            <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                        </div>
                    </div>
                    
                    <div className="card">
                        <img src="/assets/imgCard.png"/>
                        <div className="cardContent">
                            <p className="cardTitle">First video</p>
                            <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/assets/imgCard.png"/>
                        <div className="cardContent">
                            <p className="cardTitle">First video</p>
                            <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/assets/imgCard.png"/>
                        <div className="cardContent">
                            <p className="cardTitle">First video</p>
                            <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/assets/imgCard.png"/>
                        <div className="cardContent">
                            <p className="cardTitle">First video</p>
                            <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                        </div>
                    </div>
                </div>
                <div className="moreSection">
                    <button>More videos</button>
                </div>
            </div>
            <div className="topVideos">
                <div className="textSection">
                    <h2>Top Videos</h2>
                    <p>Top videos this month</p>
                </div>
                <div className="cardContainer">
                    <div className="card">
                        <img src="/assets/imgCard.png"/>
                        <div className="cardContent">
                            <p className="cardTitle">First video</p>
                            <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/assets/imgCard.png"/>
                        <div className="cardContent">
                            <p className="cardTitle">First video</p>
                            <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/assets/imgCard.png"/>
                        <div className="cardContent">
                            <p className="cardTitle">First video</p>
                            <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/assets/imgCard.png"/>
                        <div className="cardContent">
                            <p className="cardTitle">First video</p>
                            <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/assets/imgCard.png"/>
                        <div className="cardContent">
                            <p className="cardTitle">First video</p>
                            <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/assets/imgCard.png"/>
                        <div className="cardContent">
                            <p className="cardTitle">First video</p>
                            <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/assets/imgCard.png"/>
                        <div className="cardContent">
                            <p className="cardTitle">First video</p>
                            <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                        </div>
                    </div>
                </div>
                <div className="moreSection">
                    <button>More videos</button>
                </div>
            </div>
            <Categories/>
        </div>
    )
}

export default Home