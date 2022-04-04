import React from 'react';
import '../stylesheets/SingleVideo.css';
import {useNavigate, Link} from 'react-router-dom';
import videojs from "video.js";
import "video.js/dist/video-js.css";

function SingleVideo( props ) {


    const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const { options, onReady } = props;

  React.useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const player = playerRef.current = videojs(videoElement, options, () => {
        console.log("player is ready");
        onReady && onReady(player);
      });
    } else {
      // you can update player here [update player through props]
      // const player = playerRef.current;
      // player.autoplay(options.autoplay);
      // player.src(options.sources);
    }
  }, [options, "https://www.youtube.com/watch?v=mqxgP8WlxJQ"]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div className="container">
        <div className="singleVideo section">
            <div className="singleVideoLeft">
                <div className="videoSection">
                    {/* <img src="/assets/imgCard.png"/> */}
                    <video ref={videoRef} className="video-js vjs-default-skin" data-setup='{"fluid": true}' />
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
                    <Link to="/video/12345">
                        <div className="singlesuggestion">
                                <div className="suggestionImage">
                                    <img  src="/assets/imgCard.png"/>
                                </div>
                                <div className="suggestionText">
                                    <p className="suggestionTitle">Suggestion title</p>
                                    <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                                </div>
                        </div>
                    </Link>
                    <Link to="/video/12345">
                        <div className="singlesuggestion">
                                <div className="suggestionImage">
                                    <img  src="/assets/imgCard.png"/>
                                </div>
                                <div className="suggestionText">
                                    <p className="suggestionTitle">Suggestion title</p>
                                    <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                                </div>
                        </div>
                    </Link>
                    <Link to="/video/12345">
                        <div className="singlesuggestion">
                                <div className="suggestionImage">
                                    <img  src="/assets/imgCard.png"/>
                                </div>
                                <div className="suggestionText">
                                    <p className="suggestionTitle">Suggestion title</p>
                                    <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                                </div>
                        </div>
                    </Link>
                    <Link to="/video/12345">
                        <div className="singlesuggestion">
                                <div className="suggestionImage">
                                    <img  src="/assets/imgCard.png"/>
                                </div>
                                <div className="suggestionText">
                                    <p className="suggestionTitle">Suggestion title</p>
                                    <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                                </div>
                        </div>
                    </Link>
                    <Link to="/video/12345">
                        <div className="singlesuggestion">
                                <div className="suggestionImage">
                                    <img  src="/assets/imgCard.png"/>
                                </div>
                                <div className="suggestionText">
                                    <p className="suggestionTitle">Suggestion title</p>
                                    <p className="views"><i class="bi bi-eye-fill"></i> 2,345,600</p>
                                </div>
                        </div>
                    </Link>
                    
                    
                </div>
            </div>   
        </div>
    </div>
  )
}

export default SingleVideo