import * as React from "react";

function ProfileImage({ src, alt }) {
  return <img src={src} alt={alt} className="aspect-square w-[49px] rounded-full" />;
}

function UserInfo({ name, username, timestamp }) {
  return (
    <div className="flex gap-1 py-0.5 text-base font-bold text-slate-500 max-md:flex-wrap">
      <div className="text-neutral-900">{name}</div>
      <div>{username}</div>
      <div className="self-start">·</div>
      <div className="max-md:max-w-full">{timestamp}</div>
    </div>
  );
}

function TweetContent({ text }) {
  return (
    <div className="justify-center text-base font-bold text-neutral-900 max-md:max-w-full">
      {text}
    </div>
  );
}

function TweetImage({ src, alt }) {
  return (
    <div className="flex flex-col justify-center py-2.5 rounded-2xl max-md:max-w-full">
      <div className="flex flex-col justify-center items-start rounded-2xl border border-solid border-slate-400 max-md:pr-5 max-md:max-w-full">
        <img
          src={src}
          alt={alt}
          className="object-cover max-w-full aspect-[2.08] w-[721px]"
        />
      </div>
    </div>
  );
}

function TweetAction({ icon, count, color }) {
  return (
    <div className={`flex gap-2.5 ${color}`}>
      <img src={icon} alt="" className="shrink-0 aspect-square w-[18px]" />
      <div className="my-auto">{count}</div>
    </div>
  );
}

function TweetActions() {
  const actions = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/568db98d5656fd1f5d74c19096c2fae7bf742adfd6e74201fe20c68a474b0f3a?apiKey=9e661a5e0ad74c878ca984d592b3752c&",
      count: "61",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1086a74faca91ddf3df9114659c989cca4babb298e55a3a641b0848f4423dcb9?apiKey=9e661a5e0ad74c878ca984d592b3752c&",
      count: "12",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/099a74efeea1059cfba72862a07ea0b1f284e841db6ac1e903b918a687999ff1?apiKey=9e661a5e0ad74c878ca984d592b3752c&",
      count: "6.2K",
      color: "text-rose-500",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb6f47689c17a8a13e42d0fe52f89b3687fe30a67e14d2251adfcc8f6f9b4a32?apiKey=9e661a5e0ad74c878ca984d592b3752c&",
      count: "61",
    },
  ];

  return (
    <div className="flex gap-0 py-1 pr-20 text-sm font-bold whitespace-nowrap text-slate-500 max-md:flex-wrap max-md:pr-5">
      {actions.map((action, index) => (
        <TweetAction
          key={index}
          icon={action.icon}
          count={action.count}
          color={action.color}
        />
      ))}
    </div>
  );
}

function FeedDisplay({ tweet }) {
  return (
    <div className="flex flex-col justify-end max-w-[831px] m-auto">
      <div className="flex flex-col justify-center w-full max-md:max-w-full">
        <div className="w-full bg-gray-200 min-h-[1px] max-md:max-w-full" />
      </div>
      <div className="flex gap-2.5 pl-4 mt-2.5 w-full max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
        <div className="flex flex-col items-start pb-20">
          <ProfileImage
            src={tweet.poster.avatar}
            alt="Profile picture of Devon Lane"
          />
        </div>
        <div className="flex flex-col py-1 max-md:max-w-full">
          <UserInfo name={tweet.poster.username} username="@johndue" timestamp={new Date(tweet.time).toDateString()} />
          <TweetContent text={tweet.content} />
          <TweetImage
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2d6cd9fdce7ad26e6da0a1e133265b83891ca1a384025e59c4bcb46d0dea9af?apiKey=9e661a5e0ad74c878ca984d592b3752c&"
            alt="Image attached to Devon Lane's tweet"
          />
          <TweetActions />
        </div>
      </div>
    </div>
  );
}

export default FeedDisplay;
