import "./styles.css";
import Nav from "./Nav";
import VideoPlayer from "./VideoPlayer";

const RECORDINGS = [
  {
    playbackId: "4Hr8AotE2Kuj6f3jhxjnv02jeJI8ip50101yYXGmqqnS2c",
    thumbTime: 4
  },
  {
    playbackId: "OvmHIlGvC02eVHiVcm01jxXyfHXj7AuSk01k2jxuoF98vs",
    thumbTime: 6
  },
  {
    playbackId: "Lc8c7I6m02yUwSV7mM02JWTpAaaz7qO9X69OrZRPcANwE",
    thumbTime: 15
  },
  {
    playbackId: "Jb02ltpQU9LebWdIsw4PaAbUXlGCKn00fIfGFjsAkuFMc",
    thumbTime: 4
  }
];

export default function Recordings() {
  return (
    <div className="App">
      <Nav />
      <h2>Recordings</h2>
      <div class="recordings-list">
        {RECORDINGS.map(({ playbackId, thumbTime }) => {
          return (
            <div class="recording">
              <VideoPlayer playbackId={playbackId} thumbTime={thumbTime} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
