import React from 'react';
import '../stylesheets/SingleVideo.css';

function SingleVideo() {
  return (
    <div className="container">
        <div className="singleVideo section">
            <div className="singleVideoLeft">
                <div className="videoSection">
                    <img src="/assets/imgCard.png"/>
                </div>
                <div className="VideoSectionText">
                    <h2>Title</h2>
                    <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                    <p className="description">This is the description</p>
                </div>
                <hr/>
                <div className="comments">
                    <h3>Comments</h3>
                    <div className="singleComment">
                        <div className="commentLeft">
                            <img className="commentAvatar" src="/assets/imgCard.png"/>
                        </div>
                        <div className="commentRight">
                            <p className="commentName">Lucifer</p>
                            <p className="commentText">This is some good hit.</p>
                        </div>
                    </div>
                    <div className="singleComment">
                        <div className="commentLeft">
                            <img className="commentAvatar" src="/assets/imgCard.png"/>
                        </div>
                        <div className="commentRight">
                            <p className="commentName">Lucifer</p>
                            <p className="commentText">This is some good hit.</p>
                        </div>
                    </div>
                    <div className="singleComment">
                        <div className="commentLeft">
                            <img className="commentAvatar" src="/assets/imgCard.png"/>
                        </div>
                        <div className="commentRight">
                            <p className="commentName">Lucifer</p>
                            <p className="commentText">This is some good hit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="singleVideoRight">
                <p className="bold">Suggestions</p>
                <div className="suggestContainer">
                    <div className="singlesuggestion">
                        <div className="suggestionImage">
                            <img  src="/assets/imgCard.png"/>
                        </div>
                        <div className="suggestionText">
                            <p className="suggestionTitle">Suggestion title</p>
                            <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                        </div>
                    </div>
                    <div className="singlesuggestion">
                        <div className="suggestionImage">
                            <img  src="/assets/imgCard.png"/>
                        </div>
                        <div className="suggestionText">
                            <p className="suggestionTitle">Suggestion title</p>
                            <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                        </div>
                    </div>
                    <div className="singlesuggestion">
                        <div className="suggestionImage">
                            <img  src="/assets/imgCard.png"/>
                        </div>
                        <div className="suggestionText">
                            <p className="suggestionTitle">Suggestion title</p>
                            <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                        </div>
                    </div>
                    <div className="singlesuggestion">
                        <div className="suggestionImage">
                            <img  src="/assets/imgCard.png"/>
                        </div>
                        <div className="suggestionText">
                            <p className="suggestionTitle">Suggestion title</p>
                            <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    </div>
  )
}

export default SingleVideo