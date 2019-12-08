import React, { useEffect } from "react";
import { FirebaseDbUtils } from "../../utils/db.utils";

const Home = () => {
  useEffect(() => {
    FirebaseDbUtils.getAllItemsFromDb();
  }, []);
  return <div>Home</div>;
};

export default Home;
