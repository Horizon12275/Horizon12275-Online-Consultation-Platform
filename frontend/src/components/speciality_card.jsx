import { useEffect, useState } from "react";
import { getRecommendedExperts } from "../services/expertService";
import { Link } from "react-router-dom";

const SpecialityCard = ({ expert }) => {
  return (
    <div className="flex flex-col gap-0 rounded shadow-lg">
      <Link to={`/expert/${expert.id}`} className="gap-0 mt-3 text-blue-300">
        <img
          loading="lazy"
          src={expert.avatar}
          alt=""
          className="gap-0 w-[400px] aspect-[1.1] object-cover"
        />
      </Link>
      <div className="flex flex-col gap-3 p-3 bg-white">
        <div
          className="gap-0 text-black"
          style={{ fontSize: "25px", padding: "5px" }}
        >
          {expert.name}
        </div>
        <div
          className="gap-0 text-neutral-400"
          style={{ fontSize: "20px", padding: "5px" }}
        >
          {`Speciality: ${expert.specialities?.map(
            (speciality) => speciality.content+" "
          )} `}
        </div>
        <Link
          to={`/expert/${expert.id}/consultation`}
          className="gap-0 text-blue-300"
          style={{ fontSize: "15px", padding: "5px" }}
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
          className="justify-center self-start px-12 py-6 text-base font-extrabold leading-5 text-center text-white rounded-full max-md:px-5 shadow-lg"
          style={{ background: "#2e90fa", fontSize: "25px" }}
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
