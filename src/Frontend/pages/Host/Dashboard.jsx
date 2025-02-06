import { Link } from "react-router-dom";
import { getDataVans } from "../../lib/getVan";

export default function Dashboard() {
  const vans = getDataVans();
  const hostVansEls = vans.map((van) => (
    <div className="host-van-single" key={van.id}>
      <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
      <div className="host-van-info">
        <h3>{van.name}</h3>
        <p>${van.price}/day</p>
      </div>
      <Link to={`vans/${van.id}`} className="ml-auto mr-5">
        View
      </Link>
    </div>
  ));
  return (
    <>
      <section className="host-dashboard-earnings">
        <div className="info">
          <h1>Welcome!</h1>
          <p>
            Income last <span>30 days</span>
          </p>
          <h2>$2,260</h2>
        </div>
        <Link to="income">Details</Link>
      </section>
      <section className="host-dashboard-reviews">
        <h2>Review score</h2>
        <svg
          stroke="#ff8c38"
          fill="#ff8c38"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="25px"
          width="25px"
          xmlns="http://www.w3.org/2000/svg"
          className="star"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
        </svg>
        <p>
          <span>5.0</span>/5
        </p>
        <Link to="reviews">Details</Link>
      </section>
      <section className="host-dashboard-vans">
        <div className="top">
          <h2>Your listed vans</h2>
          <Link to="vans">View all</Link>
        </div>
        <div className="host-vans-list">
          <section>{hostVansEls}</section>
        </div>
      </section>
    </>
  );
}
