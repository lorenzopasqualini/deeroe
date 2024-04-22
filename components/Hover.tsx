import { data } from "@/portfolio/data";
import Image from "next/image";

const Hover = () => {
  return (
    <>
      {data.map((i, idx) => (
        <div key={idx} className="h-[8rem] overflow-hidden relative cursor-pointer">
          <div id="texts" className="flex justify-around items-center">
            <div className="flex items-center">
              <h1 className="text-[6rem] uppercase font-medium">{i.address}</h1>
              <p className="text-[1.3rem] ml-6 mt-8 uppercase font-medium">
                / {i.city}
              </p>
            </div>
            <h1 className="text-[6rem] font-medium">*{idx + 1}</h1>
          </div>

          <div className="absolute top-0 flex items-center">
            <div>—</div>
            <ul id="images" className="flex w-full">
              {i.images.map((url, idx) => (
                <li key={idx} className="mt-4 w-[16rem]">
                  <div className="relative ml-[4rem]">
                    <Image
                      src={url}
                      alt="portfolio"
                      width={500}
                      height={250}
                      className="h-full object-cover"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Hover;
