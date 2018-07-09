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
      </div>
    );
};

export default VideoDetail;
