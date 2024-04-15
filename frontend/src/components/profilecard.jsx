import * as React from "react";

function ProfileImage() {
    return (
        <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef88502c207249b6976ec49ef9e9731d30629156ddf8be63182f0534c2c7b6b4?apiKey=adee9e1373104f2e9bfd80f53a0aec3e&"
            alt="Profile picture of Khusan Akhmedov"
            className="profile-image"
        />
    );
}

function ProfileName() {
    return <h1 className="profile-name">Khusan Akhmedov</h1>;
}

function ProfileLocation() {
    return <p className="profile-location">Paris, France</p>;
}

function ProfileStat({ value, label }) {
    return (
        <div className="profile-stat">
            <div className="profile-stat-value">{value}</div>
            <div className="profile-stat-label">{label}</div>
        </div>
    );
}

function ProfileStats() {
    const stats = [
        { value: 21, label: "Posts" },
        { value: 238, label: "Comments" },
        { value: 101, label: "Ratings" },
    ];

    return (
        <div className="profile-stats">
            {stats.map((stat, index) => (
                <React.Fragment key={index}>
                    <ProfileStat value={stat.value} label={stat.label} />
                    {index < stats.length - 1 && <div className="profile-stat-separator" />}
                </React.Fragment>
            ))}
        </div>
    );
}

function UploadAvatarButton() {
    return <button className="upload-avatar-button">Upload new avatar</button>;
}

function SelectedComment() {
    return (
        <article className="selected-comment">
            <div className="selected-comment-header">
                <div className="selected-comment-checkbox" />
                <div className="selected-comment-content">
                    <h3 className="selected-comment-title">Seleted Comments</h3>
                    <p className="selected-comment-text">
                        Had avoided learning Auto Layout until I'd stumbled upon Pablo's YT
                        videos and example files. As a full time developer and part time
                        designer, this helped me understand the basic and actual
                        implementation with ease. Thanks! 💪
                    </p>
                    {/*<img*/}
                    {/*    loading="lazy"*/}
                    {/*    src="https://cdn.builder.io/api/v1/image/assets/TEMP/65b2e6e7af9c42d7ef731eaacc25aa35466c97ec9c70b6c7c6a3963f9bee0ec4?apiKey=adee9e1373104f2e9bfd80f53a0aec3e&"*/}
                    {/*    alt="Selected comment author"*/}
                    {/*    className="selected-comment-author-image"*/}
                    {/*/>*/}
                    <p className="selected-comment-author-name">
                        Consulting Doctor Jack, Gellar
                    </p>
                </div>
                <div className="selected-comment-checkbox" />
            </div>
            <div className="selected-comment-footer">
                <div className="selected-comment-checkbox" />
                <div className="selected-comment-checkbox" />
            </div>
        </article>
    );
}

function ProfileCard() {
    return (
        <main className="profile-card">
            <ProfileImage />
            <ProfileName />
            <ProfileLocation />
            <ProfileStats />
            <UploadAvatarButton />
            <SelectedComment />
        </main>
    );
}

export default ProfileCard