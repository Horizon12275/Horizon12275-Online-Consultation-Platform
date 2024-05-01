import * as React from "react";

function VoiceChatItem({ topic, date, time, avatarSrc, playIconSrc }) {
    return (
        <div className="flex gap-0 justify-between items-start py-3 pr-10 pl-3.5 bg-white rounded-xl">
            <img src={avatarSrc} alt="Avatar" className="shrink-0 w-10 aspect-[0.98]" />
            <div className="flex flex-col mt-1.5">
                <div className="flex gap-5 justify-between text-black">
                    <div className="text-sm font-semibold">{topic}</div>
                    <div className="text-xs">Time:</div>
                </div>
                <div className="flex gap-5 justify-between mt-5">
                    <div className="text-xs font-medium tracking-wide leading-4 text-zinc-900">
                        Date: {date}
                    </div>
                    <div className="text-xs text-black">{time}</div>
                </div>
            </div>
            <img src={playIconSrc} alt="Play icon" className="shrink-0 self-stretch my-auto aspect-[0.69] w-[22px]" />
        </div>
    );
}


function History() {

    const voiceChatData = [
        {
            topic: "Topic: Design",
            date: "2.2.2024",
            time: "00:31:00",
            avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5c75be9173a9a3d1648c07e1da814a3cd82ca36e33765804d5ced14a350ff44?apiKey=b565e599026f4ea2ba591e53566a67d8&",
            playIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d162d9fa1ec3e4ae4981cd504aa6b0c231a41c0ac79e74f2906fe2770110d5b4?apiKey=b565e599026f4ea2ba591e53566a67d8&",
        },
        {
            topic: "Topic: Design",
            date: "2.2.2024",
            time: "00:31:00",
            avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5c75be9173a9a3d1648c07e1da814a3cd82ca36e33765804d5ced14a350ff44?apiKey=b565e599026f4ea2ba591e53566a67d8&",
            playIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e67c89b25672c9d81d779310f98d9e52bd5483af063672feec112bfa121b68ba?apiKey=b565e599026f4ea2ba591e53566a67d8&",
        },
        {
            topic: "Topic: Design",
            date: "2.2.2024",
            time: "00:31:00",
            avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5c75be9173a9a3d1648c07e1da814a3cd82ca36e33765804d5ced14a350ff44?apiKey=b565e599026f4ea2ba591e53566a67d8&",
            playIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e67c89b25672c9d81d779310f98d9e52bd5483af063672feec112bfa121b68ba?apiKey=b565e599026f4ea2ba591e53566a67d8&",
        },
        {
            topic: "Topic: Design",
            date: "2.2.2024",
            time: "00:31:00",
            avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5c75be9173a9a3d1648c07e1da814a3cd82ca36e33765804d5ced14a350ff44?apiKey=b565e599026f4ea2ba591e53566a67d8&",
            playIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e67c89b25672c9d81d779310f98d9e52bd5483af063672feec112bfa121b68ba?apiKey=b565e599026f4ea2ba591e53566a67d8&",
        },
    ];

    return (
        <div className="custom-history-container">
             <style jsx>
                {`
    .custom-history-container {
        position: absolute;
        top: 10px; /* 自定义顶部距离 */
        left: 600px; /* 自定义左边距离 */
        height:150px
        /* 其他样式属性 */
    }
    `}
            </style>
            <div className="flex flex-col px-5 max-w-[328px]">
                <h2 className="self-center text-2xl text-center text-black">Voice Chat:</h2>
                {voiceChatData.map((item, index) => (
                    <VoiceChatItem
                        key={index}
                        topic={item.topic}
                        date={item.date}
                        time={item.time}
                        avatarSrc={item.avatarSrc}
                        playIconSrc={item.playIconSrc}
                        className={index === voiceChatData.length - 1 ? "-mt-1.5 z-10" : "mt-3.5"}
                    />
                ))}
            </div>
        </div>
    );

}

export default History