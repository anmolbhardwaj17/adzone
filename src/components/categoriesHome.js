import React from 'react';

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
                        <img src="/assets/imgCard.png"/>    
                    </div>
                    <div className="card">
                        <img src="/assets/imgCard.png"/>    
                    </div>
                    <div className="card">
                        <img src="/assets/imgCard.png"/>    
                    </div>
                    <div className="card">
                        <img src="/assets/imgCard.png"/>    
                    </div>
                    <div className="card">
                        <img src="/assets/imgCard.png"/>    
                    </div>
                </div>
                <div className="moreSection">
                    <button>ALL CATEGORIES</button>
                </div>
            </div>
    </div>
  )
}

export default Categories