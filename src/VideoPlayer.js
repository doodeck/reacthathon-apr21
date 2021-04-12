import { useRef, useMemo, useEffect } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import Hls from "hls.js";

export default function VideoPlayer({ isLive = false, playbackId, thumbTime }) {
  const videoRef = useRef(null);
  const videoSrc = `https://stream.mux.com/${playbackId}.m3u8`;
  const posterSrc = useMemo(() => {
    let src = `https://image.mux.com/${playbackId}/thumbnail.png`;
    if (thumbTime) {
      src = `${src}?time=${thumbTime}`;
    }
    return src;
  }, [playbackId, thumbTime]);

  useEffect(() => {
    let hls;

    if (videoRef.current) {
      const video = videoRef.current;
      const options = {};

      if (isLive) {
        options.controls = [
          "play-large",
          "play",
          "mute",
          "volume",
          "captions",
          "pip",
          "airplay",
          "fullscreen"
        ];
      } else {
        options.previewThumbnails = {
          enabled: true,
          src: `https://image.mux.com/${playbackId}/storyboard.vtt`
        };
      }

      /* */
      const player = new Plyr(video, options);
      console.log("player", player);
      /* */
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        console.log("we are in safari");
        video.src = videoSrc;
      } else if (Hls.isSupported()) {
        console.log("we are using HLS.js");
        hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
      } else {
        console.log("get a new browser");
      }
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [videoRef, isLive, videoSrc]);

  return (
    <div>
      <video controls poster={posterSrc} ref={videoRef} />
    </div>
  );
}
