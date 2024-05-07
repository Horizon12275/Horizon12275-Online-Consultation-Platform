
const SpecialityCard = ({ image, title, buttonText }) => {
    return (
    <div className="flex flex-col gap-0 rounded">
      <img loading="lazy" src={image} alt="" className="gap-0 w-full aspect-[1.79]" />
      <div className="flex flex-col gap-3 p-3 bg-white">
        <div className="gap-0 text-black">{title}</div>
        <div className="gap-0 mt-3 text-blue-300">{buttonText}</div>
      </div>
    </div>
  );
}

function handleSpeciality() {
  window.location.href="/expert";
}

function ShowSpeciality() {
    const specialities = [
        {
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7359cd29946c09e1ffd57e134d46fece6c1ce2fbb45328c900332ef91548877e?apiKey=273a9e43b39c48c2a08ea907e27f337f&",
          title: "Issues in field of law",
          buttonText: "CONSULT NOW",
        },
        {
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7359cd29946c09e1ffd57e134d46fece6c1ce2fbb45328c900332ef91548877e?apiKey=273a9e43b39c48c2a08ea907e27f337f&",
          title: "Issues in field of law",
          buttonText: "CONSULT NOW",
        },
        {
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7359cd29946c09e1ffd57e134d46fece6c1ce2fbb45328c900332ef91548877e?apiKey=273a9e43b39c48c2a08ea907e27f337f&",
          title: "Issues in field of law",
          buttonText: "CONSULT NOW",
        },
        {
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7359cd29946c09e1ffd57e134d46fece6c1ce2fbb45328c900332ef91548877e?apiKey=273a9e43b39c48c2a08ea907e27f337f&",
          title: "Issues in field of law",
          buttonText: "CONSULT NOW",
        },
      ];

  return (
    <div>
    <div className="flex gap-5 mt-10 justify-between w-full max-md:flex-wrap max-md:max-w-full">
      <div className="gap-0 text-6xl tracking-tight leading-[64px] text-neutral-400 max-md:flex-wrap max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
        <h2 className="text-5xl leading-[52px] text-black">30+ Specialities</h2>
        <p className="text-4xl leading-10 text-neutral-400">
          Consult with top experts across specialities
        </p>
      </div>
      <button onClick={handleSpeciality} 
        className="justify-center self-start px-8 py-4 text-base font-extrabold leading-5 text-center text-white bg-gray-900 rounded-full max-md:px-5">
        View all specialities
      </button>
    </div>

    <div className="flex gap-5 justify-between pr-5 mt-7 text-base font-medium max-md:flex-wrap">
      {specialities.map((speciality, index) => (
        <SpecialityCard key={index} {...speciality} />
      ))}
    </div>
    </div>
  )
}

export default ShowSpeciality;