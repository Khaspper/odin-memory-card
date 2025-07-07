import { useState } from "react";
import Menu from "./Menu";

export default function MainPage() {
  const [difficulty, setDifficulty] = useState<string | null>(null);
  return (
    <div id="main-page" className="w-screen h-screen">
      {difficulty === null ? (
        <Menu setDifficulty={setDifficulty} />
      ) : (
        <div>
          Show the cards here but in another component just return it here
        </div>
      )}
    </div>
  );
}
