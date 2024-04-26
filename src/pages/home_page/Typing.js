import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
  return (
    <Typewriter
      options={{
        strings: ["მასაჟისტი", "ბიოლოგი"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Typing;
