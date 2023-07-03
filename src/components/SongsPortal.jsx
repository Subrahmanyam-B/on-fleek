import Image from "next/image";
import Modal from "./Modal";
import Verified from "/public/assets/verified.svg";
import Headphone from "/public/assets/headphones.svg";
import Clock from "/public/assets/clock.svg";

const SongsPortal = ({ isOpen, setOpen }) => {
  return (
    <>
      <Modal isOpen={isOpen} handleClose={() => setOpen(false)} title="Audio">
        <div className="w-full pt-5">
          <div className="w-full h-72 bg-white/30 rounded-xl relative">
            <img
              src={
                "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96"
              }
              alt="Artist Cover"
              //   fill
              className="absolute w-full h-full object-cover rounded-xl z-0"
            />
            <div className="relative z-20 bg-black/80 h-full w-full flex items-center">
              <div className="py-10 px-10 flex flex-col gap-5">
                <div className="flex gap-2 items-center">
                  <Image src={Verified} alt="verified" width={20} height={20} />
                  <div className="text-white/70 text-sm">Verified Artist</div>
                </div>
                <div className="text-3xl">Ed Sheeran</div>
                <div className="flex gap-2 items-center">
                  <Image
                    src={Headphone}
                    alt="verified"
                    width={20}
                    height={20}
                  />
                  <div className="text-sm">82,736,050 monthly listeners</div>
                </div>
                <div>
                  <button className="bg-primary px-7 py-2 rounded-full">
                    Play
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full pt-5 space-y-3">
            <div>Popular</div>
            <div className="songs-list w-full ">
              <div className="song flex w-full gap-5 h-16 items-center justify-between ">
                <div>1</div>
                <div className="flex-1 flex items-center justify-center h-full gap-5">
                  <div className="flex-1 items-center flex gap-2">
                    <div className="relative w-12 h-12 rounded-xl bg-white/40"></div>
                    <div>Perfect</div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={Headphone}
                      alt="headphone"
                      width={20}
                      height={20}
                    />
                    <div className="text-sm">82,736,050</div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image src={Clock} alt="clock" width={20} height={20} />
                    <div className="text-sm">3:27</div>
                  </div>
                </div>
              </div>
              <div className="song flex w-full gap-5 h-16 items-center justify-between ">
                <div>1</div>
                <div className="flex-1 flex items-center justify-center h-full gap-5">
                  <div className="flex-1 items-center flex gap-2">
                    <div className="relative w-12 h-12 rounded-xl bg-white/40"></div>
                    <div>Perfect</div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={Headphone}
                      alt="headphone"
                      width={20}
                      height={20}
                    />
                    <div className="text-sm">82,736,050</div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image src={Clock} alt="clock" width={20} height={20} />
                    <div className="text-sm">3:27</div>
                  </div>
                </div>
              </div>
              <div className="song flex w-full gap-5 h-16 items-center justify-between ">
                <div>1</div>
                <div className="flex-1 flex items-center justify-center h-full gap-5">
                  <div className="flex-1 items-center flex gap-2">
                    <div className="relative w-12 h-12 rounded-xl bg-white/40"></div>
                    <div>Perfect</div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={Headphone}
                      alt="headphone"
                      width={20}
                      height={20}
                    />
                    <div className="text-sm">82,736,050</div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image src={Clock} alt="clock" width={20} height={20} />
                    <div className="text-sm">3:27</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SongsPortal;
