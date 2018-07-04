import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
      <div>
      <div className="video-detail col-md-10 mt-10">
          <div className="embed-responsive embed-responsive-16by9">
              <iframe src={url} className="embed-responsive-item">
              </iframe>
          </div>
      </div>
        <p className='col-md-2'>I dedicate this website to my dear virgin friends Rafa, Sung, and Dylan, who has always been there for me. Especially Dylan because he is gay.
          <br/> Sincerely,<br/>
          Choi
          <br/><br/>
          ---------------------------
          <br/><br/><br/><br/><br/>
          ad space
          <br/><br/><br/><br/><br/>
          ---------------------------
        </p>
      </div>
    );
};

export default VideoDetail;
