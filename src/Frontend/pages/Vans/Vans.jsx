import getVans from "../../lib/api";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";

export function loader() {
  return getVans();
}

export default function Vans() {
  const vans = useLoaderData();

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  const filteredVans = typeFilter
    ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
    : vans;

  const vanElements = filteredVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={`${van.id}`}
        state={{ searchParam: `?${searchParams.toString()}`, type: typeFilter }}
        aria-label={`View details for ${van.name}, 
                             priced at $${van.price} per day`}
      >
        <img
          src={van.imageUrl}
          alt={`Image of ${van.name}`}
          className="rounded-lg"
        />
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
          <div className="van-list-filter-buttons flex items-center gap-5 mt-3">
            <div>
              <Link
                onClick={() => handleFilterChange("type", "simple")}
                className={` ${
                  typeFilter === "simple" ? "selected" : null
                } van-type simple bg-[#FFEAD0] py-1 px-4 rounded-lg`}
              >
                Simple
              </Link>
            </div>
            <div>
              <Link
                onClick={() => handleFilterChange("type", "luxury")}
                className={`van-type ${
                  typeFilter === "luxury" ? "selected" : null
                }  luxury bg-[#FFEAD0] py-1 px-4 rounded-lg`}
              >
                Luxury
              </Link>
            </div>
            <div>
              <Link
                onClick={() => handleFilterChange("type", "rugged")}
                className={`van-type ${
                  typeFilter === "rugged" ? "selected" : null
                } rugged bg-[#FFEAD0] py-1 px-4 rounded-lg`}
              >
                Rugged
              </Link>
            </div>
          </div>
          {typeFilter && (
            <Link
              onClick={() => handleFilterChange("type", null)}
              className="van-type clear-filters underline"
            >
              Clear filters
            </Link>
          )}
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
