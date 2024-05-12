import * as React from "react";

function StatItem({ value, label }) {
    return (
        <div className="stat-item">
            <div className="stat-value">{value}</div>
            <div className="stat-label">{label}</div>
        </div>
    );
}

function Profile() {
    const stats = [
        { value: 21, label: "Posts" },
        { value: 238, label: "Comments" },
        { value: 101, label: "Ratings" },
    ];

    return (
        <>
            <style jsx>{`
        .profile {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding: 0 20px;
          max-width: 513px;
            position: absolute;
          top: 5px;
            left:350px
        }

        @media (max-width: 513px) {
          .profile {
            flex-wrap: wrap;
          }
        }

        .avatar-wrapper {
          position: relative;
          width: 33%;
          aspect-ratio: 1.02;
          overflow: hidden;
          border: 5px solid rgba(21, 112, 239, 1);
          border-radius: 50%;
        }

        .avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .name {
          font: 400 30px Carter One, -apple-system, Roboto, Helvetica, sans-serif;
          color: #000;
        }

        .location {
          font: 700 20px Caveat, sans-serif;
          color: #6c6c6c;
        }

        .stats {
          display: flex;
          justify-content: space-between;
          //gap: 15px;
          width: 100%;
          //margin-top: 5px;
        }

        @media (max-width: 991px) {
          .stats {
            flex-wrap: wrap;
            //margin-top: 40px;
          }
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 0px;
        }

        .stat-value {
          font: 400 32px Cardo, sans-serif;
          color: #000;
        }

        .stat-label {
          font: 700 22px Cardo, sans-serif;
          color: #6c6c6c;
          margin-top: 50px;
        }

        @media (max-width: 991px) {
          .stat-label {
            //margin-top: 40px;
          }
        }

        .divider1 {
          width: 2px;
          height: 100px;
          background-color: #6c6c6c;
          margin-top:10px;
        }

        .upload-button {
          font: 400 24px Carter One, -apple-system, Roboto, Helvetica, sans-serif;
          color: #fff;
          background-color: rgba(46, 144, 250, 1);
          border-radius: 10px;
          padding: 20px 60px;
          max-width: 100%;
            margin-top: 20px;
          width: 336px;
        }

        @media (max-width: 991px) {
          .upload-button {
            padding: 0 20px;
          }
        }
      `}</style>

            <div className="profile">
                <div className="avatar-wrapper">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef88502c207249b6976ec49ef9e9731d30629156ddf8be63182f0534c2c7b6b4?apiKey=b565e599026f4ea2ba591e53566a67d8&" alt="Profile avatar" className="avatar" />
                </div>
                <h1 className="name">Khusan Akhmedov</h1>
                <p className="location">Paris, France</p>
                <div className="stats">
                    {stats.map((stat, index) => (
                        <React.Fragment key={stat.label}>
                            <StatItem {...stat} />
                            {index < stats.length - 1 && <div className="divider1" />}
                        </React.Fragment>
                    ))}
                </div>
                <button className="upload-button">Upload new avatar</button>
            </div>
        </>
    );
}
export default Profile