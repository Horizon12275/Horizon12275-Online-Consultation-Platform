import * as React from "react";

function AIPrompt() {
    const questions = [
        "What are design patterns?",
        "What are design patterns?",
        "What are design patterns?"
    ];

    return (
        <>
            <style jsx>{`
        .questions-container {
          display: flex;
          flex-direction: column;
            position:absolute;
            top:565px;
            left:586px;
          max-width: 330px;
          padding: 0 15px;
          font-size: 24px;
          color: #fff;
          font-weight: 480;
          line-height: 15px;
        }

        .questions-title {
          color: #000;
          text-align: center;
          width: 100%;
          font: 400 20px Inter, sans-serif;
        }

        .question-item {
          font-family: Montserrat, sans-serif;
          border-radius: 20px;
          box-shadow: 0px 30px 30px 0px rgba(0, 0, 0, 0.05);
          background-color: var(--Blue-500, #2e90fa);
          margin-top: 10px;
          width: 100%;
          justify-content: center;
          padding: 35px 37px;
        }
      `}</style>

            <section className="questions-container">
                <h2 className="questions-title">Possible Quetions from AI:</h2>
                {questions.map((question, index) => (
                    <div key={index} className="question-item">
                        {question}
                    </div>
                ))}
            </section>
        </>
    );
}
export default AIPrompt