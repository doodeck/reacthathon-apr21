import "./styles.css";
import VideoPlayer from "./VideoPlayer";
import Nav from "./Nav";

const LIVE_PLAYBACK_ID = "y9FWwBybxSJtqdsGMvcicRAQZYN2ZclIQ6902n23orSc";

export default function Homepage() {
  return (
    <div className="App">
      <Nav />
      <h1>Live streaming with Mux!</h1>
      <VideoPlayer isLive playbackId={LIVE_PLAYBACK_ID} />
    </div>
  );
}
