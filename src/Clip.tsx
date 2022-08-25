import { useRef, memo } from "react";

export default memo(function Clip({
  src,
  onPlay,
  onPause,
}: {
  src: any;
  onPlay: any;
  onPause: any;
}) {
  const clipRef = useRef<HTMLVideoElement>(null!);

  const countRef = useRef(0);
  countRef.current++;

  return (
    <div>
      <h2>{src.title}</h2>
      <video src={src.url} ref={clipRef} />
      <p>
        <button
          onClick={() => {
            clipRef.current.play();
            onPlay();
          }}
        >
          Play
        </button>
        <button
          onClick={() => {
            clipRef.current.pause();
            onPause();
          }}
        >
          Pause
        </button>
      </p>
    </div>
  );
});
