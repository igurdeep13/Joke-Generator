import { useState } from "react";
import useJoke from "./hooks/useJoke";

function App() {
  const url = "https://api.freeapi.app/api/v1/public/randomjokes/joke/random";

  const [joke, fetchJoke] = useJoke(url);

  return (
    <>
      <div className="h-screen bg-gray-300 flex justify-center items-center ">
        <div
          className="w-1/3
          h-1/2 bg-gray-600 rounded-md flex justify-center items-center p-6 text-center flex-col gap-2"
        >
          <div className="text-white">
            {joke ? <p>{joke}</p> : <p>Loading joke...</p>}
          </div>

          <button className="bg-orange-400 rounded-md p-2" onClick={fetchJoke}>
            Get a new joke
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
