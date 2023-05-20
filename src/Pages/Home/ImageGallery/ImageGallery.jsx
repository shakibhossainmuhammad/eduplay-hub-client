import React from 'react';
import { Link } from 'react-router-dom';

export default function ImageGallery() {
  return (
    <div>
      <h1 className="text-center font-bold py-10 text-5xl dark:text-white">
        New Collection
      </h1>
      <p className="text-center text-lg font-bold">
        Customers’ favorite products this week. What’s so special?
        <Link className="text-2xl text-yellow-500"> Check it out!</Link>
      </p>

      <div className=" px-4 py-8 items-center ">
        <div className="grid w-full h-[60rem] grid-cols-4 grid-rows-4 grid-flow-col gap-2">
          <div className="w-full row-span-2" data-aos="fade-up">
            <img
              src="https://m.media-amazon.com/images/I/61-UAerLUGL._AC_SL1200_.jpg"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100"
            />
          </div>
          <div className="w-full col-span-2 row-span-2" data-aos="fade-down">
            <img
              src="https://m.media-amazon.com/images/I/81hv7ygcjvL._AC_SL1500_.jpg"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>
          <div className="w-full" data-aos="fade-right">
            <img
              src="https://m.media-amazon.com/images/I/716Ll6jmGTL._SL1500_.jpg"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>
          <div className="w-full" data-aos="fade-left">
            <img
              src="https://m.media-amazon.com/images/I/716Ll6jmGTL._SL1500_.jpg"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>
          <div
            className="w-full col-span-2 row-span-2"
            data-aos="fade-up-right"
          >
            <img
              src="https://m.media-amazon.com/images/I/91yQefngVjL._AC_SL1500_.jpg"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>

          <div className="w-full col-span-2" data-aos="fade-up-left">
            <img
              src="https://m.media-amazon.com/images/I/91B2ftaRW7L._AC_SL1500_.jpg"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>
          <div className="w-full" data-aos="fade-down-right">
            <img
              src="https://m.media-amazon.com/images/I/9127lY9p28L._AC_SL1500_.jpg"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>
          <div className="w-full" data-aos="fade-down-left">
            <img
              src="https://m.media-amazon.com/images/I/9127lY9p28L._AC_SL1500_.jpg"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
