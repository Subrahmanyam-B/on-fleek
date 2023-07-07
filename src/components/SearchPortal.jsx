import ReactPortal from "./React-Portal";
import Image from "next/image";
import { useEffect, useState } from "react";
import Search from "/public/assets/search-normal.svg";
import Close from "/public/assets/close.svg";
import { useDebounce } from "@/utils/useDebounce";
import { client } from "@/utils/axios";
import Product from "./Product";
import { useRouter } from "next/router";

export default function SearchPortal({ isOpen, handleClose }) {
  const [search, setSearch] = useState("");

  const debounceValue = useDebounce(search, 500);

  const [data, setData] = useState(null);

  const router = useRouter();

  const close = () => {
    handleClose();
    setSearch("");
  };

  useEffect(() => {
    async function fetchData() {
      try {
        if (debounceValue) {
          const { data } = await client.get(
            `/items/product?fields=*,images.*&filter[title][_contains]=${debounceValue}`
          );
          setData(data.data);
          console.log(data);
        } else {
          setData([]);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [debounceValue]);

  useEffect(() => {
    close();
  }, [router]);

  return (
    <>
      <ReactPortal wrapperId="search">
        <div
          className={`fixed inset-0 bottom-auto h-full w-full ${
            isOpen ? "top-0" : "-top-[100%]"
          } h-screen bg-black p-4 z-50 transition-all duration-300 ease-in-out flex flex-col gap-5`}
        >
          <div className="flex items-center rounded-lg px-1">
            <Image
              src={Search}
              alt={"Search Icon"}
              width={5}
              height={5}
              className="w-5 h-5"
            />
            <input
              type="text"
              placeholder="Search Products"
              className="w-full border-none text-white bg-transparent p-2 px-4 outline-none"
              autoFocus
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <Image
              src={Close}
              alt={"Close Icon"}
              width={20}
              height={20}
              className="h-5 w-5 cursor-pointer"
              onClick={() => {
                close();
              }}
            />
          </div>
          <div className=" flex-1">
            {data?.length > 0 ? (
              <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5 text-white">
                {data?.map((item, i) => (
                  <Product key={i} data={item} />
                ))}
              </div>
            ) : (
              <div className="w-full h-full grid place-items-center text-white/50">
                <div>{Boolean(data) && "No Products"}</div>
              </div>
            )}
          </div>
        </div>
      </ReactPortal>
    </>
  );
}
