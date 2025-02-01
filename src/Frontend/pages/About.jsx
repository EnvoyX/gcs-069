import bgImg from '../assets/images/about-hero.png';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="about-page-container flex flex-col">
      <img src={bgImg} className="about-hero-imag max-w-full mb-5" />
      <div className="about-page-content px-[23px] text-[#161616] mb-[55px]">
        <h1 className="leading-[38px] text-3xl mb-4 font-bold text-center">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="leading-[22px] text-xl text-center">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch.
        </p>
        <p className="leading-[22px] text-xl mt-2 text-center">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className="about-page-cta mb-10 bg-[#ffcc8d] text-[#161616] px-8 mx-[27px] pb-8 rounded-[5px]">
        <h2 className="m-0 py-[37px] text-2xl font-bold">
          Your destination is waiting.
          <br />
          Your van is ready.
        </h2>
        <Link
          className="link-button inline-block text-center bg-[#161616] py-[0.75rem] px-4 mt-[27px] self-start font-bold text-white rounded-[10px] transition-all cursor-pointer hover:scale-105 "
          to="/vans"
        >
          Explore our vans
        </Link>
      </div>
    </div>
  );
}
