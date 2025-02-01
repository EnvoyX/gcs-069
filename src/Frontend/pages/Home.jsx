import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container flex flex-col items-center">
      <h1 className="font-bold text-4xl leading-[42px]">
        You got the travel plans, we got the travel vans.
      </h1>
      <p className="leading-[24px]">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link
        to="vans"
        className="inline-block text-center bg-[#FF8C38] py-[0.75rem] mt-[27px] w-full md:w-lg font-bold text-white rounded-[5px] transition-all cursor-pointer hover:scale-105  "
      >
        Find your van
      </Link>
    </div>
  );
}
