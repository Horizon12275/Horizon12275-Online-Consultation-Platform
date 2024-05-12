import * as React from "react";

function Decorate() {
    return (
        <>
            <main className="main-container">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9aac2f283e3a3b2f78fdf281bde155a7c7aeaf02483f9632952b90ce74816b3?apiKey=b565e599026f4ea2ba591e53566a67d8&" alt="Background image" className="background-image" />
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/423548537327ed0bbddb79c01c3883cf1ee2da56e5bf13f122b702bb37062dd8?apiKey=b565e599026f4ea2ba591e53566a67d8&" alt="Foreground image" className="foreground-image" />
            </main>
            <style jsx>{`
        .main-container {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 3px solid rgba(0, 0, 0, 1);
          position: relative;
          aspect-ratio: 1;
          max-width: 30px;
          align-items: start;
          gap: 0;
          justify-content: center;
          padding: 23px 16px;
            margin-top:500px
        }

        .background-image {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          //object-fit: cover;
          object-position: center;
        }

        .foreground-image {
          aspect-ratio: 1.52;
          object-fit: auto;
          object-position: center;
          width: 100%;
          fill: var(--White, #fff);
          stroke-width: 3px;
          stroke: var(--Secondary-Black, #000);
          border: 3px solid rgba(0, 0, 0, 1);
          gap: 0;
        }
      `}</style>
        </>
    );
}

export default Decorate;