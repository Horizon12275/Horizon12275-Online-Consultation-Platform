function AIPrompt() {
    const questions = [
        "What are design patterns?",

    ];

    return (
        <>
            <style jsx>{`
        .questions-container {
          display: flex;
          flex-direction: column;
          position: fixed;
          top:570px; /* 你想要的距离顶部的位置 */
          left: 730px; /* 你想要的距离左侧的位置 */
          max-width: 200px;
          padding: 0 10px;
          font-size:16px;
          color: #fff;
          font-weight: 50;
          line-height: 20px;
          z-index: 999; /* 确保在其他内容的上方 */
        }

        .questions-title {
          color: #000;
          text-align: center;
          width: 100%;
          font: 400 16px Inter, sans-serif;
        }

        .question-item {
          font-family: Montserrat, sans-serif;
          border-radius: 20px;
          box-shadow: 0px 30px 30px 0px rgba(0, 0, 0, 0.05);
          background-color: var(--Blue-500, #2e90fa);
          margin-top: 10px;
          width: 100%;
          justify-content: center;
          padding: 30px 30px;
        }
      `}</style>

            <section className="questions-container">
                <h2 className="questions-title">Possible Quetions</h2>
                {questions.map((question, index) => (
                    <div key={index} className="question-item">
                        {question}
                    </div>
                ))}
            </section>
        </>
    );
}
export default AIPrompt;
