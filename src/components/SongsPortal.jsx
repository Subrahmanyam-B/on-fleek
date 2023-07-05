import Image from "next/image";
import Modal from "./Modal";
import Verified from "/public/assets/verified.svg";
import Headphone from "/public/assets/headphones.svg";
import Clock from "/public/assets/clock.svg";
import { getAssetsURl } from "@/utils/lib";
import { useEffect, useState, useRef } from "react";

const SongsPortal = ({ isOpen, setOpen, artist }) => {
  const audioRef = useRef(null);

  const [activeSong, setActiveSong] = useState("");

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current.src = getAssetsURl(activeSong?.file);
  }, [activeSong]);

  useEffect(() => {
    if (isPlaying && activeSong) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, activeSong]);

  return (
    <>
      <audio ref={audioRef} className="hidden"></audio>
      <Modal
        isOpen={isOpen}
        handleClose={() => {
          setOpen(false);
          setIsPlaying(false);
        }}
        title="Audio"
      >
        <div className="w-full pt-5">
          <div className="w-full h-72 bg-white/30 rounded-xl relative">
            <Image
              src={getAssetsURl(artist?.cover)}
              alt="Artist Cover"
              fill
              className="absolute w-full h-full object-cover rounded-xl z-0"
            />
            <div className="relative z-20 bg-black/80 h-full w-full flex items-center">
              <div className="py-10 px-10 flex flex-col gap-5">
                {artist?.verified && (
                  <div className="flex gap-2 items-center">
                    <Image
                      src={Verified}
                      alt="verified"
                      width={20}
                      height={20}
                    />
                    <div className="text-white/70 text-sm">Verified Artist</div>
                  </div>
                )}
                <div className="text-3xl">{artist?.name}</div>
                <div className="flex gap-2 items-center">
                  <Image
                    src={Headphone}
                    alt="verified"
                    width={20}
                    height={20}
                  />
                  <div className="text-sm">
                    {artist?.monthly_listners} monthly listeners
                  </div>
                </div>
                <div>
                  <button
                    className="bg-primary px-7 py-2 rounded-full"
                    onClick={() => {
                      if (!isPlaying) {
                        setActiveSong(artist?.songs[0]?.song_id);
                        setIsPlaying(true);
                      } else {
                        setActiveSong(null);
                        setIsPlaying(false);
                      }
                    }}
                  >
                    {isPlaying ? "Pause" : "Play"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full pt-5 space-y-1">
            <div>Popular</div>
            <div className="songs-list w-full">
              {artist?.songs?.map((item, i) => {
                const { song_id: song } = item;
                return (
                  <div
                    key={i}
                    className={`song flex md:flex-row flex-col w-full gap-5 h-20 items-center justify-between cursor-pointer ${
                      activeSong?.id === song?.id && "text-orange-500"
                    }`}
                    onClick={() => {
                      if (activeSong && activeSong?.id !== song?.id) {
                        setActiveSong(song);
                      } else {
                        if (!isPlaying) {
                          setActiveSong(song);
                          setIsPlaying(true);
                        } else {
                          setActiveSong(null);
                          setIsPlaying(false);
                        }
                      }
                    }}
                  >
                    <div className="md:block hidden">{i + 1}</div>
                    <div className="flex-1 md:w-auto w-full flex items-center justify-center h-full gap-5">
                      <div className="flex-1 items-center flex gap-2">
                        <div className="relative w-12 h-12 rounded-xl bg-white/40">
                          <Image
                            src={getAssetsURl(song?.cover)}
                            alt="Song Cover"
                            fill
                            className="absolute w-full h-full object-cover rounded-xl z-0"
                          />
                        </div>
                        <div>{song.title}</div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <Image
                          src={Headphone}
                          alt="headphone"
                          width={20}
                          height={20}
                        />
                        <div className="text-sm">{song?.monthly_listener}</div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <Image src={Clock} alt="clock" width={20} height={20} />
                        <div className="text-sm">{song?.length}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SongsPortal;
