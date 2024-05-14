import { Carousel } from "antd";
import * as React from "react";
import { getRecommendedExpertComments } from "../services/expertCommentService";

function Avatar({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`shrink-0 gap-0 self-stretch my-auto rounded-full aspect-square ${className}`}
    />
  );
}

function UserInfo({ imageSrc, name, username }) {
  return (
    <div className="flex gap-3.5 self-start mt-3 font-bold">
      <img
        loading="lazy"
        src={imageSrc}
        alt={name}
        className="shrink-0 gap-0 aspect-square w-[75px] h-[75px]"
        style={{ aspectRatio: "1/1" }}
      />
      <div className="flex flex-col gap-1.5 py-1 my-auto">
        <div className="gap-0 text-xl tracking-normal leading-6">{name}</div>
        <div className="gap-0 mt-3.5 text-lg tracking-normal leading-6">
          {username}
        </div>
      </div>
    </div>
  );
}

function Testimonial({ backgroundImageSrc, testimonialText }) {
  return (
    <>
      <div
        className="relative flex-col justify-center items-start px-9 pt-20 pb-20 w-full text-5xl font-medium tracking-tighter fill-gray-100 min-h-[308px] max-md:flex-wrap max-md:px-5 max-md:max-w-full"
        style={{ zIndex: "2" }}
      >
        <img
          src={backgroundImageSrc}
          className="object-cover absolute inset-0 width-500"
          style={{ zIndex: "1" }}
        />
        <div style={{ zIndex: "3", fontSize: "25px", position: "absolute" }}>
          {testimonialText}
        </div>
      </div>
    </>
  );
}

function HomeComment() {
  const carouselRef = React.createRef();
  const [comments, setComments] = React.useState([]);
  React.useEffect(() => {
    getRecommendedExpertComments().then((res) => {
      setComments(res);
    });
  }, []);

  return (
    <div className="flex justify-center">
      <div className="gap-0 self-start mt-20 text-6xl tracking-tight leading-[64px] text-neutral-400 max-md:flex-wrap max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
        <section className="flex gap-5 justify-between items-center px-5 max-w-[955px] max-md:flex-wrap">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b9354d661b0ad4288e16015086e5962ca754cf2dfeb2d565d00da904a02d539?apiKey=273a9e43b39c48c2a08ea907e27f337f&"
            alt="User avatar"
            className="w-[49px] cursor-pointer"
            style={{ borderRadius: "50%" }}
            onClick={() => carouselRef.current.prev()}
          />
          <div className="flex flex-col gap-0 self-stretch max-md:flex-wrap max-md:max-w-full">
            <h2 className="z-10 gap-0 text-5xl text-black leading-[52.2px] max-md:flex-wrap max-md:max-w-full max-md:text-4xl">
              What our users have to say
            </h2>
            <Carousel
              ref={carouselRef}
              className="flex flex-col gap-3 pt-8 pr-3.5 pb-1 pl-10 -mt-2.5 bg-white text-zinc-900 max-md:flex-wrap max-md:p w-[600px]"
              autoplay
            >
              {comments.map((comment, index) => (
                <React.Fragment key={index}>
                  <Testimonial
                    backgroundImageSrc={
                      "https://cdn.builder.io/api/v1/image/assets/TEMP/90362126a0d293ab6e91bb283c43e510c93c4f09f54508c8e250a6134694be5b?apiKey=273a9e43b39c48c2a08ea907e27f337f&"
                    }
                    testimonialText={comment.content}
                  />
                  <UserInfo
                    imageSrc={comment.user.client?.avatar}
                    name={comment.user.client?.username}
                    username={comment.user.client?.username}
                  />
                </React.Fragment>
              ))}
            </Carousel>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/40ccf8fbe2442bb9b1ed677a7d84cf4e50ad0d050cd25312aecb39f5b8f40c39?apiKey=273a9e43b39c48c2a08ea907e27f337f&"
            alt="User avatar"
            className="w-[49px] cursor-pointer"
            style={{ borderRadius: "50%" }}
            onClick={() => carouselRef.current.next()}
          />
        </section>
      </div>
    </div>
  );
}

export default HomeComment;
