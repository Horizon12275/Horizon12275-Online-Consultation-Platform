import * as React from "react";

function Button({ children, className }) {
    return <button className={`button ${className}`}>{children}</button>;
}

function Input({ id, label, className, ...rest }) {
    return (
        <div className={`input-container ${className}`}>
            <label htmlFor={id} className="label">
                {label}
            </label>
            <input id={id} className="input" {...rest} />
        </div>
    );
}

function Textarea({ id, label, className, ...rest }) {
    return (
        <div className={`textarea-container ${className}`}>
            <label htmlFor={id} className="label">
                {label}
            </label>
            <textarea id={id} className="textarea" {...rest} />
        </div>
    );
}

function FillForm() {
    return (
        <>
            <div className="container">
                <header className="header">
                    <h1 className="title">BASIC INFO</h1>
                    <div className="actions">
                        <Button className="cancel-button">CANCEL</Button>
                        <Button className="save-button">SAVE</Button>
                    </div>
                </header>
                <div className="divider" />
                <div className="form-row">
                    <Input id="firstName" label="FIRST NAME" className="form-input" />
                    <Input id="lastName" label="LAST NAME" className="form-input" />
                </div>
                <Input id="region" label="Region" className="form-input" />
                <Input
                    id="email"
                    label="Email"
                    type="email"
                    className="form-input"
                />
                <Textarea
                    id="aboutMe"
                    label="ABOUT ME"
                    className="form-textarea"
                />
                <div className="divider" />
            </div>
            <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          font-weight: 400;
            position: absolute;
         top: 29px;
            left:950px;
            width:500px
        }

        @media (max-width: 991px) {
          .container {
            max-width: 100%;
          }
        }

        .header {
          display: flex;
          width: 100%;
          gap: 10px;
          padding: 0 1px;
          align-items: center;
        }

        @media (max-width: 991px) {
          .header {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }

        .title {
          color: #000;
          flex-grow: 1;
          font: 29px Carter One, sans-serif;
          margin: 0;
        }

        .actions {
          display: flex;
          gap: 20px;
          font-size: 19px;
          white-space: nowrap;
          justify-content: space-between;
        }

        @media (max-width: 991px) {
          .actions {
            white-space: initial;
          }
        }

        .button {
          font-family: Carter One, sans-serif;
          border-radius: 7px;
          padding: 23px;
          cursor: pointer;
        }

        .cancel-button {
          border: 2px solid rgba(46, 144, 250, 1);
            background-color: #fff;
          color: #000c;
        }

        .save-button {
          background-color: var(--Blue-500, #2e90fa);
          color: #fff;
          border: none;
        }

        @media (max-width: 991px) {
          .save-button {
            white-space: initial;
            padding: 23px 20px;
          }
        }

        .divider {
          background-color: #e5e5e5;
          height: 3px;
          margin-top: 33px;
        }

        @media (max-width: 991px) {
          .divider {
            max-width: 100%;
          }
        }

        .form-row {
          display: flex;
          gap: 20px;
          margin-top: 30px;
        }

        @media (max-width: 991px) {
          .form-row {
            flex-wrap: wrap;
            margin-top: 30px;
          }
        }

        .input-container {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          width: 100%;
        }

        .label {
          font: 20px Cardo, sans-serif;
          color: #000;
        }

        .input {
          border: 2px solid rgba(229, 229, 229, 1);
          border-radius: 7px;
          height: 52px;
          margin-top: 15px;
          padding: 0 10px;
          font: 16px Cardo, sans-serif;
        }

        .form-input {
          margin-top: 20px;
        }

        @media (max-width: 991px) {
          .form-input {
            max-width: 100%;
            margin-top: 40px;
          }
        }

        .textarea-container {
          display: flex;
          flex-direction: column;
          margin-top: 35px;
        }

        @media (max-width: 991px) {
          .textarea-container {
            max-width: 100%;
            margin-top: 35px;
          }
        }

        .textarea {
          border: 2px solid rgba(229, 229, 229, 1);
          border-radius: 7px;
          height: 149px;
          margin-top: 31px;
          padding: 10px;
          font: 16px Cardo, sans-serif;
          resize: vertical;
        }
      `}</style>
        </>
    );
}
export  default FillForm