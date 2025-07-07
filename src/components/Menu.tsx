import jojoLogo from "../img/jojo_logo.png";

interface MenuProps {
  setDifficulty: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function Menu({ setDifficulty }: MenuProps) {
  return (
    <section className="flex flex-col h-screen items-center">
      <img
        src={jojoLogo}
        srcSet={`${jojoLogo} 800w`}
        alt="A baby smiling with a yellow headband."
        className="mt-3 w-fit max-w-2xl top-0 relative"
      />
      <div
        className="mt-auto mb-[10vh] md:mb-[8vh] flex
      flex-col gap-15 font-[western] items-center"
      >
        <p className="text-white text-4xl sm:text-5xl transition delay-100 duration-1000 ease-in-out hover:rotate-5000 hover:scale-0">
          MEMORY GAME
        </p>

        <div className="flex w-fit flex-wrap text-2xl gap-2 sm:text-4xl sm:gap-8 text-[#027b9d]">
          <button
            type="button"
            onClick={() => setDifficulty("easy")}
            className="rounded-full bg-white px-6 py-2 cursor-pointer transition delay-100 duration-1000 ease-in-out hover:-scale-100 hover:bg-[#027b9d] hover:text-white hover:rotate-3600"
          >
            Easy
          </button>
          <button
            type="button"
            onClick={() => setDifficulty("medium")}
            className="rounded-full bg-white px-6 py-2 cursor-pointer transition delay-100 duration-1000 ease-in-out hover:-scale-100 hover:bg-[#027b9d] hover:text-white hover:rotate-3600"
          >
            Medium
          </button>
          <button
            type="button"
            onClick={() => setDifficulty("hard")}
            className="rounded-full bg-white px-6 py-2 cursor-pointer transition delay-100 duration-1000 ease-in-out hover:-scale-100 hover:bg-[#027b9d] hover:text-white hover:rotate-3600"
          >
            Hard
          </button>
        </div>
      </div>
    </section>
  );
}
