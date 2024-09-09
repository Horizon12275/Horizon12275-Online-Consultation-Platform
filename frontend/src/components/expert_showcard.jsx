import { Link } from "react-router-dom";

function ProfileImage({ src, alt }) {
  return (
    <div className="flex flex-col ">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="m-auto mr-3 shrink-0 object-cover w-[140px] h-[140px] rounded-full"
      />
    </div>
  );
}

function ProfileInfo({ name, price, specialty, rating }) {
  return (
    <div className="flex flex-col self-stretch mx-4 my-auto">
      <div className=" text-xl font-bold text-black">{name}</div>
      <div className=" text-base text-black">
        Price: <span className="text-rose-600">{price}</span>
        <br />
        Specialty: <span className="text-rose-600">{specialty}</span>
        <br />
        Rate: <span className="text-rose-600">{rating}</span>
      </div>
    </div>
  );
}

function ProfileIntroduction({ introduction }) {
  return (
    <div className="text-sm text-black">
      <h3
        className="font-semibold"
        style={{ color: "#4299e1", marginTop: "10px" }}
      >
        Introduction:
      </h3>
      <div style={{ marginTop: "15px" }}>{introduction}</div>
    </div>
  );
}

export default function ExpertShowCard({ item }) {
  return (
    <div
      style={{ maxWidth: "400px" }}
      className="transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
    >
      <Link to={`/expert/${item.id}`}>
        <div className="flex flex-col bg-white rounded-xl px-6 py-2 w-[400px] h-[330px] shadow">
          <div className="flex flex-col justify-center my-3">
            <div className="flex">
              <ProfileImage src={item.avatar} alt={item.name} />
              <ProfileInfo
                name={item.name}
                price={item.price}
                specialty={item.specialities?.map((item) => (
                  <Link to={`/expert?speciality=${item.id}`} key={item.id}>
                    {item.content}
                  </Link>
                ))}
                rating={item.rating}
              />
            </div>
          </div>
          <ProfileIntroduction introduction={item.aboutMe} />
        </div>
      </Link>
    </div>
  );
}

//
//</Link >
