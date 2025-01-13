import { useState, useEffect } from "react";

function useJoke(url) {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJoke(data.data.content);
      console.log(data.data.content);
    } catch (error) {
      console.error("Error fetching  Joke:", error);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, [url]);
  return [joke, fetchJoke];
}

export default useJoke;
