import React, { useContext } from "react";
import { AuthContext } from "../../configFirebase";

const Home = () => {
  const { user } = useContext(AuthContext);
  return <div>Home</div>;
};

export default Home;
