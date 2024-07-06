'use client'

import { PlayIcon, PauseIcon, MusicalNoteIcon } from "@heroicons/react/20/solid";
import { useRef, useState } from "react";

export const PlayerWedding = () => {

  const [play, setPlay] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null);

  function toogleAudio(): void {
    if (play) {
      audioRef.current?.pause();
      setPlay(false);
    } else {
      void audioRef.current?.play();
      setPlay(true);
    }
  }

  return (
    <>
      <div className="flex flex-row items-center">
        <button
          onClick={toogleAudio}
          type="button"
        >
          {!play ? (
            <PlayIcon className="h-8 w-8" arial-hidden="true" />
          ) : (<PauseIcon className="h-8 w-8" arial-hidden="true" />)}
        </button>
        <MusicalNoteIcon className="h-8 w-8" arial-hidden="true" />
        <audio ref={audioRef} loop src={'/assets/cancion.wav'} />
      </div>
    </>
  )
}
