import { Form } from "antd";
import * as React from "react";
import { updateUser } from "../services/userService";
import { useAuth } from "../context/authContext";

function Button({ children, className, htmlType, onClick }) {
  return (
    <button type={htmlType} onClick={onClick} className={`button ${className}`}>
      {children}
    </button>
  );
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
  const { user, client, expert, setClient, setExpert } = useAuth();
  React.useEffect(() => {}, [client, expert]);
  const [form] = Form.useForm();
  const resetForm = () => {
    //判断表单是否为空，如果为空则进行赋值
   
    if (Object.values(form.getFieldsValue()).every((v) => !v))
      form.setFieldsValue({
        firstName: client?.firstName || expert?.firstName,
        lastName: client?.lastName || expert?.lastName,
        region: client?.region || expert?.region,
        email: user?.email,
        aboutMe: client?.aboutMe || expert?.aboutMe,
      });
  };
  React.useEffect(() => resetForm, [client, expert]);
  const handleSave = async (user) => {
    if (user.aboutMe?.length > 3000) {
      alert(`个人简介过长，当前字数${user.aboutMe.length}，请控制在3000字以内`);
      return;
    }
    updateUser(user)
      .then((res) => {
        if (res?.role === "user") setClient(res.client);
        else setExpert(res.expert);
        console.log(res);
        alert("修改成功！");
      })
      .catch((e) => alert(e));
  };
  const handleCancel = (e) => {
    e.preventDefault();
    form.setFieldsValue({
      firstName: client?.firstName || expert?.firstName,
      lastName: client?.lastName || expert?.lastName,
      region: client?.region || expert?.region,
      email: user?.email,
      aboutMe: client?.aboutMe || expert?.aboutMe,
    });
  };
  return (
    <Form layout="vertical" onFinish={handleSave} form={form}>
      <div className="container">
        <header className="header">
          <h1 className="title">BASIC INFO</h1>
          <div className="actions">
            <Button className="cancel-button" onClick={handleCancel}>
              CANCEL
            </Button>
            <Button htmlType={"submit"} className="save-button">
              SAVE
            </Button>
          </div>
        </header>
        <div className="divider" />
        <div className="form-row">
          <Form.Item name="firstName">
            <Input id="firstName" label="FIRST NAME" className="form-input" />
          </Form.Item>
          <Form.Item name="lastName">
            <Input id="lastName" label="LAST NAME" className="form-input" />
          </Form.Item>
        </div>
        <Form.Item name="region">
          <Input id="region" label="Region" className="form-input" />
        </Form.Item>
        <Form.Item name="email">
          <Input
            id="email"
            label="Email"
            type="email"
            className="form-input"
            disabled
          />
        </Form.Item>
        <Form.Item name="aboutMe">
          <Textarea id="aboutMe" label="ABOUT ME" className="form-textarea" />
        </Form.Item>
        <div className="divider" />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          font-weight: 400;
          position: absolute;
          top: 40px;
          left: 1000px;
          width: 550px;
        }

        @media (max-width: 991px) {
          .container {
            max-width: 100%;
          }
        }

        .header {
          display: flex;
          width: 100%;
          gap: 15px;
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
          gap: 23px;
          font-size: 25px;
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
          padding: 25px;
          cursor: pointer;
        }

        .cancel-button {
          border: 2px solid rgba(46, 144, 250, 1);
          background-color: #fff;
          color: #000c;
          font-size: 20px;
        }

        .save-button {
          background-color: var(--Blue-500, #2e90fa);
          color: #fff;
          border: none;
          font-size: 20px;
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
          gap: 142px;
          margin-top: 35px;
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
          margin-top: 20px;
          padding: 0 10px;
          font: 16px Cardo, sans-serif;
        }

        .form-input {
          margin-top: 23px;
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
          margin-top: 37px;
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
          margin-top: 35px;
          padding: 10px;
          font: 16px Cardo, sans-serif;
          resize: vertical;
        }
      `}</style>
    </Form>
  );
}
export default FillForm;
