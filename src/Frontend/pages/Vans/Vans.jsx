import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Vans() {
  const [vans, setVans] = useState([]);
  const fetchVans = async () => {
    const response = await fetch('/api/vans');
    const data = await response.json();
    const vans = data?.vans;
    setVans(vans);
  };
  useEffect(() => {
    fetchVans();
  }, []);

  //    const [vans, setVans] = useState([])
  //     useEffect(() => {
  //         fetch("/api/vans")
  //             .then(res => res.json())
  //             .then(data => setVans(data.vans))
  //     }, [])

  const vanElements = vans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={`/vans/${van.id}`}
        aria-label={`View details for ${van.name}, 
                             priced at $${van.price} per day`}
      >
        <img src={van.imageUrl} alt={`Image of ${van.name}`} />
        <div className="van-info flex justify-between gap-2 mb-2 mt-2">
          <p className="text-2xl font-bold">{van.name}</p>
          <p className="text-2xl font-bold flex flex-col">
            ${van.price}
            <span className="text-lg">/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <section>
      <div className="heading flex flex-col px-6">
        <h1 className="text-2xl font-bold">Explore our van options</h1>
        <div className="filters flex justify-between items-center">
          <div className="filter-category flex items-center gap-5 mt-3">
            <div>
              <button className="bg-[#FFEAD0] py-1 px-4 rounded-lg">
                Simple
              </button>
            </div>
            <div>
              <button className="bg-[#FFEAD0] py-1 px-4 rounded-lg">
                Luxury
              </button>
            </div>
            <div>
              <button className="bg-[#FFEAD0] py-1 px-4 rounded-lg">
                Rugged
              </button>
            </div>
          </div>
          <button className="underline">Clear filters</button>
        </div>
      </div>
      <div className="van-container px-6 mb-5 ">
        <div className="van-list grid grid-cols-2 gap-[34px] mt-[57px] justify-items-center">
          {vanElements}
        </div>
      </div>
    </section>
  );
}
