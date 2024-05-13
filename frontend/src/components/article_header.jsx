function IconText({ src, alt, text }) {
  return (
    <div className="flex gap-1.5 justify-center py-px tracking-tight whitespace-nowrap">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="shrink-0 aspect-square w-[19px]"
      />
      <div className="my-auto">{text}</div>
    </div>
  );
}
const ArticleHeader = ({ article }) => {
  const profileData = {
    name: "Davide Biscuso",
    username: "@biscuttu",
    occupation: "Product Designer",
    followers: 72,
    location: "London",
    joinedDate: "Joined September 2011",
    following: 569,
    profileImage:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5bd1dc5ecbab3571c2f6ff6296cef048563366432701991efb199a294bbd364f?apiKey=9e661a5e0ad74c878ca984d592b3752c&",
    avatarImage: article.cover,
    locationIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a211d12e35f23805d32751ffec1fc8a691311ae7989bd71f7fca3c5b55ec07a2?apiKey=9e661a5e0ad74c878ca984d592b3752c&",
    calendarIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/51b81a0300b47b1bcd63eae2ab0b39a5b09a7a473802dfcaa94a5e052de7ddbe?apiKey=9e661a5e0ad74c878ca984d592b3752c&",
  };

  return (
    <div className="flex flex-col w-[100%]">
      <header className="flex flex-col justify-center w-full bg-white max-md:max-w-full relative">
        <div className="flex overflow-hidden relative flex-col items-start px-3 pt-20 w-full min-h-[300px] max-md:pr-5 max-md:max-w-full ">
          <img
            loading="lazy"
            src={article.cover}
            className="object-cover absolute inset-0"
          />
        </div>
      </header>
      <main className="flex justify-between pt-20 ml-3  font-bold w-[610px] bg-transparent relative">
        <img
          loading="lazy"
          src={article.author?.avatar}
          className="absolute -top-[75px] w-[150px] h-[150px] object-cover z-10 rounded-full shadow-xl"
        />
        <div className="flex flex-col my-auto">
          <h1 className="text-xl tracking-tight text-neutral-900">
            {article.author?.name}
          </h1>
          <div className="mt-2.5 text-base tracking-tight text-slate-500">
            {article.author?.name}
          </div>
        </div>
        <div className="flex flex-col self-start text-base">
          <div className="tracking-tight text-neutral-900">
            {profileData.occupation}
          </div>
          <div className="flex gap-1.5 mt-3.5 whitespace-nowrap">
            <div className="text-neutral-900">{profileData.followers}</div>
            <div className="tracking-tight text-slate-500">Followers</div>
          </div>
        </div>
        <div className="flex flex-col text-base">
          <div className="flex gap-2.5 text-slate-500">
            <IconText
              src={profileData.locationIcon}
              alt="Location icon"
              text={article.author?.region}
            />
            <IconText
              src={profileData.calendarIcon}
              alt="Calendar icon"
              text={profileData.joinedDate}
            />
          </div>
          <div className="flex gap-1 mt-3 whitespace-nowrap">
            <div className="text-neutral-900">{profileData.following}</div>
            <div className="tracking-tight text-slate-500">Following</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ArticleHeader;
