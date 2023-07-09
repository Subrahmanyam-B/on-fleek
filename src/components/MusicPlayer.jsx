import Image from "next/image";
import Pause from "/public/assets/pause.svg";
import Play from "/public/assets/play.svg";

import { useEffect, useRef, useState } from "react";
import { getAssetsURl } from "@/utils/lib";

const MusicPlayer = ({ active, setOpen, data, open }) => {
  const audioRef = useRef(null);

  const notClickAble = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const [duration, setDuration] = useState(0);

  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    setDuration(audioRef.current.duration);
    setCurrentTime(audioRef.current.currentTime);
    if (isPlaying && active && !open) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [active, isPlaying, open]);

  useEffect(() => {
    if (!active) {
      setIsPlaying(false);
    }
  }, [active]);

  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", (e) => {
      setCurrentTime(e.target.currentTime);
    });
  }, []);

  return (
    <>
      <div
        className="music-player bg-[#FFFFFF29] p-2 rounded-lg sm:w-72 w-64  z-50 absolute md:right-10 top-24  md:left-auto left-1/2 md:-translate-x-0 -translate-x-1/2 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          const el = notClickAble.current;
          if (!el || el.contains(e.target)) {
            return;
          }
          setOpen(true);
        }}
      >
        <audio
          className="hidden"
          ref={audioRef}
          src={getAssetsURl(data?.file)}
        ></audio>
        <div className="flex gap-3 w-full">
          <div className="md:w-16 md:h-16 h-14 w-14 bg-white rounded-lg relative">
            <Image
              src={getAssetsURl(data?.cover)}
              alt="cover"
              fill
              className="absolute w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-1">
            <div className="flex flex-col justify-between gap-1 w-full">
              <div className="flex justify-between gap-3 items-center md:text-base text-sm">
                <div>{data?.title}</div>
                <div className="w-1 h-1 bg-white/50 rounded-full" />
                <div className="text-white/75 md:text-sm text-xs">
                  {data?.artists[0].artists_id?.name}
                </div>
              </div>
              <div
                className="flex gap-3 w-full items-center"
                ref={notClickAble}
              >
                <button onClick={() => setIsPlaying(!isPlaying)}>
                  <Image
                    src={isPlaying ? Pause : Play}
                    alt="pause"
                    className="md:w-6 md:h-6 h-4 w-4"
                  />
                </button>
                <div className="flex-1 h-1 w-full grid place-items-center">
                  <input
                    type="range"
                    className="rounded-lg overflow-hidden appearance-none bg-gray-400 h-full w-full"
                    min={0}
                    max={duration}
                    value={currentTime}
                    onChange={(e) => {
                      audioRef.current.currentTime = e.target.value;
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;
