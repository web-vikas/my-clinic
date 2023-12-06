import React, { useEffect, useState } from "react";
import Config from "../../config";
import axios from "axios";
import { Link, Navigate, useLocation } from "react-router-dom";
export const Home = () => {
  const [data, setData] = useState([]);

  const init = () => {
    axios({
      method: "get",
      url: `${Config.API_URL}/doctor/get-doctors`,
    })
      .then((res) => {
        setData(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <section>
      <div className="flex gap-3 justify-end bg-blue-500 p-2 mb-5">
        {/* <Link
          to="/patient/login"
          className="font-medium text-white hover:underline dark:text-blue"
        >
          Patient Login
        </Link> */}
        <Link
          to="/login"
          className="font-medium text-white hover:underline dark:text-blue"
        >
          Doctor Login
        </Link>
      </div>
      <div className="mx-auto  max-w-screen-lg p-10 border-2 ">
        <h1 className="text-2xl md:text-4xl text-center font-bold">
          Select your doctor for slot booking
        </h1>
        <hr className="my-8" />
        <div>
          <div className="flex flex-wrap justify-center gap-4 ">
            {data?.map((val, i) => {
              return (
                <Link
                  key={i}
                  className="rounded flex-[0_0_40%] max-sm:flex-[0_0_100%] border-2  lg:flex-[0_0_30%] py-4"
                  to={`/book?id=${val?._id}`}
                >
                  <h1 className="text-2xl font-semibold text-center">
                    {val?.name}
                  </h1>
                  <p className="text-center">{val?.specialist}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
