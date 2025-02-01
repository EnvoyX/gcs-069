import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="container min-h-screen m-auto flex justify-center items-center ">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h1 className="text-3xl font-bold mb-5">
          Sorry, the page you were looking for was not found
        </h1>
        <Link
          to={`/`}
          className="bg-[#161616] py-4 px-2 rounded-lg text-white text-center w-full md:w-lg"
        >
          Return to home
        </Link>
      </div>
    </section>
  );
}
