import { Link, useLocation, useParams } from "react-router-dom";
import { getDataVans } from "../../lib/getVan";
// import getVans from '../../lib/getVans';

// export const loader = ({ params }) => {
//   return getVans(params.id);
// };

export default function VansDetail() {
  const { id } = useParams();
  const location = useLocation();
  console.log(location);
  const vans = getDataVans(id);
  const vanDetail = vans[0];
  return (
    <div className="van-detail-container p-[27px]">
      <Link
        to={`..${location.state ? location.state.searchParam : null}`}
        relative="path"
        className="back-button ml-10 mt-5 inline-block "
      >
        &larr;{" "}
        <span>
          Back to {location.state.type ? location.state.type : "all"} vans
        </span>
      </Link>
      <div className="van-detail md:grid md:grid-cols-2 items-center flex flex-col text-[#161616]">
        <img
          src={vanDetail.imageUrl}
          className="rounded-[5px] my-12 w-full md:w-xl md:h-auto mx-auto"
        />
        <div className="van-information flex flex-col md:ml-5 ml-0">
          <i className={`van-type ${vanDetail.type} selected mb-4 self-start`}>
            {vanDetail.type}
          </i>
          <h2 className="text-4xl mb-3">{vanDetail.name}</h2>
          <p className="van-price text-xl mb-3">
            <span className="font-[700] text-2xl">${vanDetail.price}</span>
            /day
          </p>
          <p>{vanDetail.description}</p>
          <button className="link-button inline-block text-center font-[700]  bg-[#FF8C38] border-0 rounded-[5px] py-3 text-white text-lg mt-4 w-full lg:w-96 cursor-pointer transition-all">
            Rent this van
          </button>
        </div>
      </div>
    </div>
  );
}
