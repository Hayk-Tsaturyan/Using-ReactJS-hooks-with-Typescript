import { useState, useCallback, useMemo } from "react";
import "./Clip.css";
import Clip from "./Clip";

function Clip2() {
  const [isPlaying, setIsPlaying] = useState(false);

  const onPlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const onPause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const videoData = useMemo(() => {
    return {
      url: "http://www.808.dk/vstreamer.asp?video=gizmo.mp4",
    };
  }, []);

  return (
    <div className="App">
      <Clip src={videoData} onPlay={onPlay} onPause={onPause} />
    </div>
  );
}

export default Clip2;
