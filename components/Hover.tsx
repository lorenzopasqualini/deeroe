import { data } from "@/portfolio/data";
import Image from "next/image";

const Hover = () => {
  return (
    <div>
      {data.map((i, idx) => (
        <>
          <div id="texts" className="flex justify-center items-center">
            <div key={idx} className="flex items-center">
              <h1 className="text-[6rem] uppercase font-medium">{i.address}</h1>
              <p className="text-[1.3rem] ml-6 mt-8 uppercase font-medium">
                / {i.city}
              </p>
            </div>
            <h1 className="text-[6rem] font-medium">*{idx + 1}</h1>
          </div>

          <ul id="images" className="flex w-full">
            {i.images.map((url, idx) => (
              <li key={idx}>
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
        </>
      ))}
    </div>
  );
};

export default Hover;
