import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import { LikeOutlined, LikeTwoTone } from "@ant-design/icons";
import { getTids, likeTweet } from "../services/tweetLikeService";
import { Image } from "antd";

function ProfileImage({ src, alt }) {
  return (
    <img src={src} alt={alt} className="aspect-square w-[49px] rounded-full" />
  );
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
    src && (
      <div className="flex flex-col justify-center py-2.5 rounded-2xl max-md:max-w-full">
        <div className="flex flex-col justify-center items-start rounded-2xl border border-solid border-slate-400 max-md:pr-5 max-md:max-w-full">
          <Image
            src={src}
            alt={alt}
            width={721}
            //className="object-cover max-w-full aspect-[2.08] w-[721px]"
          />
        </div>
      </div>
    )
  );
}

function TweetAction({ icon, count, color, handleClick }) {
  return (
    <div
      className={`flex cursor-pointer gap-2.5 ${color}`}
      onClick={handleClick}
    >
      <img src={icon} alt="" className="shrink-0 aspect-square w-[18px]" />
      <div className="my-auto">{count}</div>
    </div>
  );
}

function TweetActions({ actions }) {
  return (
    <div className="flex gap-0 py-1 pr-20 text-sm font-bold whitespace-nowrap text-slate-500 max-md:flex-wrap max-md:pr-5 mt-10">
      <div className="mr-2">Like It :</div>
      {actions.map((action, index) => (
        <TweetAction
          key={index}
          icon={action.icon}
          count={action.count}
          color={action.color}
          handleClick={action.handleClick}
        />
      ))}
    </div>
  );
}

function FeedDisplay({ tweet }) {
  const { user, setUser } = useAuth();
  const [tids, setTids] = useState([]); //cids is an array of comment ids that the user has liked
  const [replying, setReplying] = useState(null);

  useEffect(() => {
    //get the comment ids that the user has liked
    if (user) {
      getTids().then((res) => {
        setTids(res);
      });
    }
  }, [user]);
  const actions = [
    {
      icon: tids.includes(tweet.id)
        ? "/heartIcon.png"
        : "https://cdn.builder.io/api/v1/image/assets/TEMP/fa10d6ed0faeb00fb3dcbb006b723fd158e47f915cdce681e8e759ed8e0b7bcc?apiKey=f52c53764647463db8da4a641cad04a5&",
      count: tweet.likes.length,
      handleClick: () => handleLike(tweet),
    },
  ];
  const handleReply = (id) => {
    setReplying(replying === id ? null : id);
  };
  const handleLike = (tweet) => {
    const tid = tweet.id;

    likeTweet(tid)
      .then((res) => {
        if (tids.includes(tid)) {
          setTids(tids.filter((t) => t !== tid));
          tweet.likes = tweet.likes.filter((l) => l.user.id !== user.id);
        } else {
          setTids([...tids, tid]);
          tweet.likes.push({ user: { id: user.id } });
        }
      })
      .catch((e) => alert(e));
  };
  return (
    tweet && (
      <div className="flex flex-col justify-end max-w-[831px] m-auto">
        <div className="flex flex-col justify-center w-full max-md:max-w-full">
          <div className="w-full bg-gray-200 min-h-[1px] max-md:max-w-full" />
        </div>
        <div className="flex gap-2.5 pl-4 mt-2.5 w-full max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
          <div className="flex flex-col items-start pb-20">
            <ProfileImage
              src={tweet.poster?.avatar}
              alt="Profile picture of Devon Lane"
            />
          </div>
          <div className="flex flex-col py-1 max-md:max-w-full">
            <UserInfo
              name={tweet.poster?.username}
              username=""
              timestamp={new Date(tweet.time).toDateString()}
            />
            <TweetContent text={tweet.content} />
            <TweetImage
              src={tweet.image}
              alt="Image attached to Devon Lane's tweet"
            />
            <TweetActions actions={actions} />
          </div>
        </div>
      </div>
    )
  );
}

export default FeedDisplay;
