import { useEffect, useState } from "react";
import { getRecommendedExperts } from "../services/expertService";
import { Link } from "react-router-dom";

const SpecialityCard = ({ expert }) => {
  return (
    <div className="flex flex-col gap-0 rounded">
      <Link
        to={`/expert/${expert.id}`}
        className="gap-0 mt-3 text-blue-300"
      >
        <img
          loading="lazy"
          src={expert.avatar}
          alt=""
          className="gap-0 w-[400px] aspect-[1.1] "
        />
      </Link>
      <div className="flex flex-col gap-3 p-3 bg-white">
        <div className="gap-0 text-black">{expert.name}</div>
        <Link
          to={`/expert/${expert.id}/consultation`}
          className="gap-0 mt-3 text-blue-300"
        >
          {"CONSULT NOW"}
        </Link>
      </div>
    </div>
  );
};


function ShowSpeciality() {
  const [experts, setExperts] = useState([]);
  useEffect(() => {
    getRecommendedExperts().then((data) => {
      setExperts(data);
    });
  }, []);

  return (
    <div>
      <div className="flex gap-5 mt-10 justify-between w-full max-md:flex-wrap max-md:max-w-full">
        <div className="gap-0 text-6xl tracking-tight leading-[64px] text-neutral-400 max-md:flex-wrap max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
          <h2 className="text-5xl leading-[52px] text-black">
            30+ Specialities
          </h2>
          <p className="text-4xl leading-10 text-neutral-400">
            Consult with top experts across specialities
          </p>
        </div>
        <Link
          to={"/expert"}
          className="justify-center self-start px-8 py-4 text-base font-extrabold leading-5 text-center text-white bg-gray-900 rounded-full max-md:px-5"
        >
          View all specialities
        </Link>
      </div>

      <div className="flex gap-5 justify-between pr-5 mt-7 text-base font-medium max-md:flex-wrap">
        {experts.map((expert, index) => (
          <SpecialityCard key={index} expert={expert} />
        ))}
      </div>
    </div>
  );
}

export default ShowSpeciality;
