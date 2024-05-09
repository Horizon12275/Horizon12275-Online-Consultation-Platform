import Link from "antd/es/typography/Link";

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
      <h3 className="font-semibold" style={{ color: "#4299e1" }}>
        Introduction:
      </h3>
      {introduction}
    </div>
  );
}

export default function ExpertShowCard({ item }) {
  console.log("item:", item);
 
  return (
    <div>
      <Link href={`/expert/${item.id}`}>
        <div className="flex flex-col bg-white rounded-xl px-6 py-2 w-[400px] h-[330px] shadow-sm">
          <div className="flex flex-col justify-center my-3">
            <div className="flex">
              <ProfileImage src={item.image} alt={item.name} />
              <ProfileInfo
                name={item.name}
                price={item.price}
                //specialty={allTags.map((tag) => tag + " ")}
                rating={item.rating}
              />
            </div>
          </div>
          <ProfileIntroduction introduction={item.introduction} />
        </div>
      </Link>
    </div>
  );
}

//
//</Link >
