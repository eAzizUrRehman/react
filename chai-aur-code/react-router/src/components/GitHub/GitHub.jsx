import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const GitHub = () => {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/eAzizUrRehman")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   });

  const data = useLoaderData();

  return (
    <div className="mx-auto my-10 flex flex-col items-center justify-center gap-5">
      <img
        src={data.avatar_url}
        alt=""
        width={300}
        height={300}
        className="rounded-full"
      />
      <span className="text-center text-2xl font-bold">
        Number of followers on GitHub: {data.followers}
      </span>
    </div>
  );
};

export default GitHub;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/eAzizUrRehman");
  return response.json();
};
