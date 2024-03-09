import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();

  return (
    <div className="mx-auto my-10 text-center text-2xl font-bold">
      User ID = {userId}
    </div>
  );
};

export default User;
