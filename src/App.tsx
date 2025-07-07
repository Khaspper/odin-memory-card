import { useEffect, useState } from "react";
//! Uncomment this later
// import LoadingScreen from "./components/LoadingScreen";
import MainPage from "./components/MainPage";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  //! Uncomment this later
  // return <>{isLoading ? <LoadingScreen /> : <MainPage />}</>;
  return (
    <>
      <MainPage />
    </>
  );
}

export default App;
