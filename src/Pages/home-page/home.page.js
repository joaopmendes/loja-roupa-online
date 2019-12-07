import React, { useContext } from "react";
import { FirebaseContext } from "../../configFirebase";

const Home = () => {
  const firebase = useContext(FirebaseContext).firebaseApp;
  const user = firebase.auth().currentUser;
  console.log(user);
  return <div>Home</div>;
};

export default Home;
