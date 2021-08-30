import React from "react";
import { auth } from "../firebase";

const Feed: React.FC = () => {

  return (
    <div>
      Feed
      <button onClick={ () => auth.signOut()}>ろぐあうと</button>
    </div>
  );
};

export default Feed;
