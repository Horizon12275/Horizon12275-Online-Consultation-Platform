

const ConsultationCard = ({ image, title, description, buttonText }) => (
    <div className="flex flex-col gap-0 rounded">
      <img loading="lazy" src={image} alt="" className="gap-0 w-full aspect-[1.79]" />
      <div className="flex flex-col gap-3 px-3 pt-3 pb-1.5 bg-white">
        <div className="gap-0 text-base font-medium text-black">{title}</div>
        {description && <div className="gap-0 mt-3 text-sm text-neutral-700">{description}</div>}
        {buttonText && <div className="gap-0 mt-4 text-blue-300">{buttonText}</div>}
      </div>
    </div>
  );

function ShowConsultation() {
    const consultations = [
      {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7359cd29946c09e1ffd57e134d46fece6c1ce2fbb45328c900332ef91548877e?apiKey=273a9e43b39c48c2a08ea907e27f337f&",
        title: "Dentist",
        description: "Teething troubles? Schedule a dental checkup",
      },
      {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7359cd29946c09e1ffd57e134d46fece6c1ce2fbb45328c900332ef91548877e?apiKey=273a9e43b39c48c2a08ea907e27f337f&",
        title: "Dentist",
        description: "Teething troubles? Schedule a dental checkup",
      },
      {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7359cd29946c09e1ffd57e134d46fece6c1ce2fbb45328c900332ef91548877e?apiKey=273a9e43b39c48c2a08ea907e27f337f&",
        title: "Dentist",
        description: "Teething troubles? Schedule a dental checkup",
      },
      {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7359cd29946c09e1ffd57e134d46fece6c1ce2fbb45328c900332ef91548877e?apiKey=273a9e43b39c48c2a08ea907e27f337f&",
        title: "Dentist",
        description: "Teething troubles? Schedule a dental checkup",
      },
    ];

  return (
    <div>
        <div className="gap-0 self-start mt-20 text-6xl tracking-tight leading-[64px] text-neutral-400 max-md:flex-wrap max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
        <h2 className="text-5xl leading-[52px] text-black">
          Book an appointment for an on-line consultation
        </h2>
        <p className="text-4xl leading-10 text-neutral-400">
          Consult with top experts across specialities
        </p>
      </div>

      <div className="flex gap-5 justify-between self-start pr-1.5 mt-7 max-md:flex-wrap">
        {consultations.map((consultation, index) => (
          <ConsultationCard key={index} {...consultation} />
        ))}
      </div>
    </div>
  );
}

export default ShowConsultation;