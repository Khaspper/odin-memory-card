import { useEffect, useState, useRef } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedGif, setFetchedGif] = useState(false);
  const kakyoin = useRef("");
  const giphyURL = "https://api.giphy.com/v1/gifs/";
  const kakyoinId = "wUf0jPd2ksY92";
  const giphyAPIkey = "BR2DuOOkBFz9u2pzDHyKSRgQHfk8gzSQ";

  //! This is for development only
  const didFetch = useRef(false);

  useEffect(() => {
    if (didFetch.current) return;
    didFetch.current = true;
    async function fetchGif() {
      try {
        const response = await fetch(
          `${giphyURL}${kakyoinId}?api_key=${giphyAPIkey}`
        );

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new TypeError("Oops, we haven't got JSON!");
        }
        const json = await response.json();
        kakyoin.current = json.data.images.original.url;
        setFetchedGif(true);
      } catch (error) {
        console.log("Error: ", error);
        setIsLoading(false);
      }
    }
    fetchGif();
  }, []);

  useEffect(() => {
    if (fetchedGif) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [fetchedGif, isLoading]);

  return <>{isLoading ? <div>True</div> : <div>False</div>}</>;
}

export default App;
