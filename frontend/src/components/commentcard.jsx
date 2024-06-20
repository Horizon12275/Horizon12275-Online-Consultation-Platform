import * as React from "react";

function SelectedCommentCard({ comment, author }) {
  return (
    <div className="selected-comment-card">
      <div className="selected-comment-card__header">
        <div className="selected-comment-card__header-dot" />
        <div className="selected-comment-card__title">Selected Comments</div>
        <div className="selected-comment-card__header-dot" />
      </div>
      <div className="selected-comment-card__content">
        <p className="selected-comment-card__comment">{comment}</p>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/65b2e6e7af9c42d7ef731eaacc25aa35466c97ec9c70b6c7c6a3963f9bee0ec4?apiKey=b565e599026f4ea2ba591e53566a67d8&"
          alt="Author profile picture"
          className="selected-comment-card__author-image"
        />
        <div className="selected-comment-card__author-name">{author}</div>
      </div>
      <div className="selected-comment-card__footer">
        <div className="selected-comment-card__footer-dot" />
        <div className="selected-comment-card__footer-dot" />
      </div>
    </div>
  );
}

function Commentcard() {
  const selectedComments = [
    {
      comment:
        "Had avoided learning Auto Layout until I'd stumbled upon Pablo's YT videos and example files. As a full time developer and part time designer, this helped me understand the basic and actual implementation with ease. Thanks! 💪",
      author: "Consulting Doctor Jack, Gellar",
    },
  ];

  return (
    <>
      <main className="main-container">
        {selectedComments.map((comment, index) => (
          <SelectedCommentCard
            key={index}
            comment={comment.comment}
            author={comment.author}
          />
        ))}
      </main>

      <style jsx>{`
        .main-container {
          background-color: var(--White, #fff);
          box-shadow: 8px 8px 0px 0px #cfe2ff;
          display: flex;
          flex-direction: column;
          gap: 0px;
          justify-content: center;
          margin-top: 590px;
          margin-left: 75px;
          max-width: 650px;
        }

        .selected-comment-card {
          border: 3px solid rgba(0, 0, 0, 1);
          display: flex;
          flex-direction: column;
          gap: 14px;
          width: 100%;
        }

        .selected-comment-card__header {
          align-items: start;
          color: var(--Secondary-Black, #000);
          display: flex;
          font-size: 28px;
          font-weight: 400;
          gap: 20px;
          justify-content: space-between;
          line-height: 130%;
          padding: 0 20px;
          width: 100%;
        }

        .selected-comment-card__header-dot {
          background-color: var(--White, #fff);
          border: 3px solid rgba(0, 0, 0, 1);
          height: 10px;
          width: 10px;
        }

        .selected-comment-card__title {
          background-color: var(--Blue-300, #84caff);
          border: 3px solid rgba(0, 0, 0, 1);
          font-family: Carter One, sans-serif;
          justify-content: center;
          padding: 1px 16px;
        }

        .selected-comment-card__content {
          align-items: center;
          align-self: stretch;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .selected-comment-card__comment {
          align-self: stretch;
          font: 22px/29px Cardo, sans-serif;
          gap: 0px;
          margin-top: 12px;
        }

        .selected-comment-card__author-image {
          aspect-ratio: 100;
          border: 4px solid var(--Secondary-Cloud, #cfe2ff);
          gap: 0px;
          object-fit: auto;
          object-position: center;
          stroke: var(--Secondary-Cloud, #cfe2ff);
          stroke-width: 4px;
          width: 100%;
        }

        .selected-comment-card__author-name {
          font-family: Caveat, sans-serif;
          gap: 0px;
          text-align: center;
        }

        .selected-comment-card__footer {
          display: flex;
          gap: 20px;
          justify-content: space-between;
          margin-top: 14px;
          width: 100%;
        }

        .selected-comment-card__footer-dot {
          background-color: var(--White, #fff);
          border: 3px solid rgba(0, 0, 0, 1);
          height: 9px;
          width: 10px;
        }

        @media (max-width: 991px) {
          .main-container {
            flex-wrap: wrap;
          }

          .selected-comment-card {
            flex-wrap: wrap;
            max-width: 100%;
          }

          .selected-comment-card__header {
            flex-wrap: wrap;
            max-width: 100%;
          }

          .selected-comment-card__comment {
            flex-wrap: wrap;
            max-width: 100%;
          }

          .selected-comment-card__author-image {
            flex-wrap: wrap;
            max-width: 100%;
          }

          .selected-comment-card__footer {
            flex-wrap: wrap;
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
}
export default Commentcard;
