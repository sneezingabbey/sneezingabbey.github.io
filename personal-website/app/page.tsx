import SocialsPage from "./components/socialsPage";

export default function Home() {
  return (
    <div className="text-white flex flex-col justify-center items-center flex-grow">
      <h1 className="text-7xl font-bold mb-6 tracking-wider">
        Abbey
      </h1>

      <div className="border-t border-white w-full max-w-md p-8 rounded-lg shadow-2xl flex flex-col items-center justify-center">
        <ul
          className="items-center justify-center text-lg text-white list-disc"
          aria-label="Personal Information"
        >
          <li>She/Her</li>
          <li>22 Years Old</li>
        </ul>
      </div>

      <SocialsPage />
    </div>
  );
}
