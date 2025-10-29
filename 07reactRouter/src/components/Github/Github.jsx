import React from "react";
import { useLoaderData } from "react-router-dom";

export function Github() {
  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-600 rounded-2xl p-3 text-white text-3xl">
      Github Followers:{data.followers}
      <div className="flex justify-center">
        <img
          className="flex justify-center"
          src={data.avatar_url}
          alt="github pictures"
          width={300}
          srcset=""
        />
      </div>
    </div>
  );
}


