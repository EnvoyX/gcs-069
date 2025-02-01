import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function VansDetail() {
  const params = useParams();
  const [vanDetail, setVanDetails] = useState(null);

  useEffect(() => {
    const fetchVanDetail = async () => {
      const response = await fetch(`/api/vans/${params.id}`);
      const data = await response.json();
      const van = data?.vans;
      setVanDetails(van);
    };
    fetchVanDetail();
  }, [params.id]);

  console.log(vanDetail);

  return (
    <div className="van-detail-container p-[27px]">
      {vanDetail ? (
        <div className="van-detail md:grid md:grid-cols-2 items-center flex flex-col text-[#161616]">
          <img
            src={vanDetail.imageUrl}
            className="rounded-[5px] my-12 w-full md:w-128 md:h-auto"
          />
          <div className="van-information flex flex-col ml-0">
            <i
              className={`van-type ${vanDetail.type} selected mb-4 self-start`}
            >
              {vanDetail.type}
            </i>
            <h2 className="text-4xl mb-3">{vanDetail.name}</h2>
            <p className="van-price text-xl mb-3">
              <span className="font-[700] text-2xl">${vanDetail.price}</span>
              /day
            </p>
            <p>{vanDetail.description}</p>
            <button className="link-button bg-[#FF8C38] text-white text-lg mt-4 w-full lg:w-96">
              Rent this van
            </button>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
