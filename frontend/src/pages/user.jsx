import React from 'react'
import { LeftOutlined } from '@ant-design/icons';
import { BasicLayout } from '../layouts'

const ProfileImage = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

const IconWithText = ({ src, alt, text }) => (
  <div className="flex gap-1.5 whitespace-nowrap">
    <ProfileImage src={src} alt={alt} className="shrink-0 gap-0 w-6 aspect-square" />
    <div className="flex-auto gap-0">{text}</div>
  </div>
);

const SocialLink = ({ src, alt, href }) => (
  <a href={href} className="flex gap-1.5 text-sky-500 whitespace-nowrap">
    <ProfileImage src={src} alt={alt} className="shrink-0 gap-0 w-6 aspect-square" />
    <div className="flex-auto gap-0">{href}</div>
  </a>
);

const TweetActions = ({ commentCount, retweetCount, likeCount }) => (
  <div className="flex gap-5 justify-between pr-20 mt-6 w-full text-base whitespace-nowrap text-slate-600 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
    <div className="flex gap-2.5">
      <ProfileImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c407252b3ac1d6f66076cd7b49637601906259d32ea5a54e5d541eff2418378?apiKey=273a9e43b39c48c2a08ea907e27f337f&" alt="Comment icon" className="shrink-0 gap-0 w-6 aspect-square" />
      <div className="gap-0">{commentCount}</div>
    </div>
    <div className="flex gap-2.5">
      <ProfileImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/27e954de9a089b7a156bf7c4036e753e0d7f97f468076ac03d5af1b878924714?apiKey=273a9e43b39c48c2a08ea907e27f337f&" alt="Retweet icon" className="shrink-0 gap-0 w-6 aspect-square" />
      <div className="gap-0">{retweetCount}</div>
    </div>
    <div className="flex gap-2.5">
      <ProfileImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/19ae10cdc7cfaef9da8f4ad3e9d421dfcf0e8e9ab1550a9b53eeca496cfe4c8f?apiKey=273a9e43b39c48c2a08ea907e27f337f&" alt="Like icon" className="shrink-0 gap-0 w-6 aspect-square" />
      <div className="gap-0">{likeCount}</div>
    </div>
    <ProfileImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/6224819cb1e6cb7cec8c65618cea845c730949ba5dfdde3df0df97e31fe3b192?apiKey=273a9e43b39c48c2a08ea907e27f337f&" alt="View icon" className="shrink-0 gap-0 w-6 aspect-square" />
    <ProfileImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/6dc0aea735ff99cf5cf6f8b17cf319459e694453e717ae1b7339959f8e73e80f?apiKey=273a9e43b39c48c2a08ea907e27f337f&" alt="Share icon" className="shrink-0 gap-0 w-6 aspect-square" />
  </div>
);

const Tweet = ({ avatarSrc, name, handle, timestamp, content, commentCount, retweetCount, likeCount }) => (
  <div className="flex gap-4 items-start self-center pl-10 px-5 text-black max-md:flex-wrap mt-5">
    <ProfileImage src={avatarSrc} alt={`${name}'s avatar`} className="shrink-0 gap-0 rounded-full aspect-square w-[60px]" />
    <div className="flex flex-col gap-1.5 self-stretch max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-1.5 self-start">
        <div className="gap-0 text-xl font-bold">{name}</div>
        <div className="gap-0 text-lg">{handle} · {timestamp}</div>
      </div>
      <div className="gap-0 mt-1.5 text-lg max-md:flex-wrap max-md:max-w-full">
        {content}
      </div>
      <TweetActions commentCount={commentCount} retweetCount={retweetCount} likeCount={likeCount} />
    </div>
    <ProfileImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/5dbb43e3f8b7033f59b49871d0181f879c4c948d400cbc728526e6228e080b14?apiKey=273a9e43b39c48c2a08ea907e27f337f&" alt="More options icon" className="shrink-0 gap-0 mt-3 aspect-[4.17] fill-black w-[17px]" />
  </div>
);

const tweets = [
  {
    avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/199684683654219d43523621c72a3a64c68f41a523bc5e1266f7c7bd6df95835?apiKey=273a9e43b39c48c2a08ea907e27f337f&",
    name: "Bobur",
    handle: "@bobur_mavlonov",
    timestamp: "Apr 1",
    content: "4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim",
    commentCount: 10,
    retweetCount: 1,
    likeCount: 8
  },
  {
    avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/199684683654219d43523621c72a3a64c68f41a523bc5e1266f7c7bd6df95835?apiKey=273a9e43b39c48c2a08ea907e27f337f&",
    name: "Bobur",
    handle: "@bobur_mavlonov",
    timestamp: "Apr 1",
    content: "Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz. <br /> <br /> Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. <br /> <br /> Gap faqat biznes trenerlar haqida emas.",
    commentCount: 0,
    retweetCount: 5,
    likeCount: 9
  }  
];

function UserPage() {
  return (
   <BasicLayout>

    <div className="flex flex-col gap-0 max-md:flex-wrap w-full">
      <header className="flex flex-col gap-1 items-start pt-7 pr-20 pb-4 pl-8 w-full text-black bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <LeftOutlined />
      </header>
      <ProfileImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/64f5e02f45d2d7df5221cb254c2db9ef4fba346db0f3e72bd3d9709b196dc783?apiKey=273a9e43b39c48c2a08ea907e27f337f&" alt="Profile cover image" className="gap-0 w-full aspect-[3.23] max-md:flex-wrap max-md:max-w-full" />
      <div className="flex z-10 flex-col gap-3 px-6 mt-0 w-full text-black max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col gap-5 text-2xl font-bold whitespace-nowrap"><ProfileImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/8876f27b64f645c36461c9463651152b8f22b4a6e3072e764828c75261c6e2f7?apiKey=273a9e43b39c48c2a08ea907e27f337f&" alt="Profile avatar" className="gap-0 self-center w-full rounded-full border-white border-solid aspect-square border-[5px] mt-[-8rem]" />
            <div className="gap-0 mt-5">Bobur</div>
          </div>
          <button className="justify-center self-end px-4 py-2.5 mt-24 text-lg font-semibold border border-solid border-black border-opacity-40 rounded-[50px] max-md:mt-10">
            Edit profile
          </button>
        </div>
        <div className="gap-0 mt-3 text-base max-md:flex-wrap max-md:max-w-full">
          @bobur_mavlonov
        </div>
        <div className="gap-0 mt-6 text-lg text-sky-500 max-md:flex-wrap max-md:max-w-full">
          UX&UI designer at<span className="text-sky-500"> @abutechuz</span>
        </div>
        <div className="flex gap-5 justify-between mt-4 text-lg max-md:flex-wrap">
          <IconWithText src="https://cdn.builder.io/api/v1/image/assets/TEMP/c704294a347196e5742fa30f33481c84f0514c81caa55f0720c42b704adafa9a?apiKey=273a9e43b39c48c2a08ea907e27f337f&" alt="Location icon" text="Mashag'daman" />
          <SocialLink src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef1eacd1ea50114b9b98f4379ab853618aa14ef88de64b6a6947ee615fec59ec?apiKey=273a9e43b39c48c2a08ea907e27f337f&" alt="Link icon" href="t.me/boburjon_mavlonov" />
          <IconWithText src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9120e2d677ebb70bdda3edf50203a19fd0c8b833aa347a99dea470272d9b3f6?apiKey=273a9e43b39c48c2a08ea907e27f337f&" alt="Birthday icon" text="Born November 24, 2000" />
          <IconWithText src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa5bd25550b997390850e19eb1694e69eceddf250159ff5696d407facc2a1467?apiKey=273a9e43b39c48c2a08ea907e27f337f&" alt="Joined icon" text="Joined May 2020" />
        </div>
      </div>
      <nav className="flex gap-5 justify-between items-center self-center w-full text-lg mt-10 max-w-[1250px] max-md:flex-wrap max-md:max-w-full">
        <div className="font-bold">Moments</div>
        <div>Likes</div>
        <div>Bookmarks</div>
        <div>Articles</div>
        <div>History</div>
      </nav>
      <div className="shrink-0 gap-0 mt-4 ml-7 bg-sky-500 rounded h-[5px] w-[125px] max-md:ml-2.5" />
      <div className="gap-0 w-full bg-stone-300 min-h-[1px] max-md:flex-wrap max-md:max-w-full" />
      {tweets.map((tweet, index) => (
        <React.Fragment key={index}>
          <Tweet {...tweet} />
          {index < tweets.length - 1 && (
            <div className="gap-0 mt-5 w-full bg-neutral-200 min-h-[1px] max-md:flex-wrap max-md:max-w-full" />
          )}
        </React.Fragment>
      ))}
    </div>
   </BasicLayout>
  );
}

export default UserPage;