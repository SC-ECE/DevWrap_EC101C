import { featuredProducts } from "@/data";
import Image from "next/image";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* WRAPPER */}
      <div className="w-max flex p-4">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className=" w-screen h-[60vh] flex flex-col items-center justify-around hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/* IMAGE CONTAINER */}
            <div className="relative flex-1 w-full ">
              {item.img && (
                <Image
                  src={item.img}
                  alt=""
                  fill
                  className="object-contain hover:rotate-[60deg] transition-all duration-500"
                />
              )}
            </div>
            {/* TEXT CONTAINER */}
            <div className="flex-1 flex flex-col  items-center justify-center text-center gap-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">₹{item.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
