import { useEffect } from "react";
import ReactPortal from "./React-Portal";
import Image from "next/image";

const Modal = ({ children, isOpen, handleClose, title, modalSize }) => {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  const modalSizeClass = modalSize === "large" ? "lg:w-1/2" : "lg:w-1/2";

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="modal">
      <div
        className={`fixed inset-0 bottom-auto h-full w-full ${
          isOpen ? "z-40 bg-black/70 opacity-100" : "-z-10 opacity-0"
        }`}
      >
        <div
          className={`fixed right-0 top-0 z-40 h-full w-full bg-black text-white p-5 transition-transform md:absolute md:w-1/2 md:p-10 ${modalSizeClass} ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="text-2xl uppercase">{title}</div>

            <div className="flex items-center gap-3">
              <button className="p-2" onClick={() => handleClose()}>
                <Image
                  src={"/assets/close.svg"}
                  alt="Close Icon"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
          <div className="no-scrollbar h-full w-full overflow-y-auto pb-10">
            {children}
          </div>
        </div>
      </div>
    </ReactPortal>
  );
};

Modal.defaultProps = {
  modalSize: "small",
  children: null,
  title: "",
  handleClose: () => console.log("close"),
  isOpen: false,
};

export default Modal;
