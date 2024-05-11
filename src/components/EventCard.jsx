import React from "react";
// import dummyData from "../dummy";
import { Link } from "react-router-dom";

const EventCard = ({ data }) => {
  return (
    <>
      <div className="mt-10 p-4 relative product-card block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 h-[320px] w-[250px] hover:cursor-pointer">
        <img
          className="rounded-t-lg h-[180px] w-full object-contain"
          src={`https://source.unsplash.com/250x180/?event`}
          //     ? image: //  { image
          // }
          alt=""
        />
        {/* h-[180px] w-full(width:100%) object-contain -----esto gareko to make the card size fixed, jatrai pic size aayye ni*/}

        <div className="">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {data?.name}
          </h5>
          <h4>{data?.date}</h4>
          {/* <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {shortDescription}
          </p> */}
          <Link to={`/events/${data?.id}`}>
            <button className="bg-green-200 text-black border-indigo-400 rounded-md mt-3 p-2">
              Register now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default EventCard;
