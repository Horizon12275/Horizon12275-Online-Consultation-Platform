import React, { useState } from "react";
import { Button, Select, Space, Input, Result, Form } from "antd";
import { BasicLayout } from "../layouts";
import FileUpload from "../components/upload";
import { applyExpert } from "../services/applyService";
const { TextArea } = Input;

const studyOptions = [
  {
    value: "Undergraduate",
    label: "Undergraduate",
  },
  {
    value: "Junior",
    label: "Junior",
  },
  {
    value: "Senior",
    label: "Senior",
  },
  {
    value: "Master",
    label: "Master",
  },
  {
    value: "Doctor",
    label: "Doctor",
  },
];

function InputField({ label, placeholder, id, name, message }) {
  return (
    <Form.Item
      id={id}
      name={name}
      rules={[{ required: true, message: message }]}
      className="flex flex-col max-md:max-w-full"
    >
      <div>
        <label className="text-lg font-medium leading-5 text-slate-700 max-md:max-w-full">
          {label}
        </label>
        <br></br>
        <Input type="text" size="large" placeholder={placeholder} allowClear style={{ width: '50vh' }} />
      </div>
    </Form.Item>
  );
}

const inputFields = [
  {
    label: "First name",
    placeholder: "First name",
    id: "firstName",
    name: "firstName",
    message: "Please input your first name!",
  },
  {
    label: "Last name",
    placeholder: "Last name",
    id: "lastName",
    name: "lastName",
    message: "Please input your last name!",
  },
  {
    label: "Email",
    placeholder: "you@company.com",
    id: "email",
    name: "email",
    message: "Please input your email!",
  },
  {
    label: "Vertification Code",
    placeholder: "Enter the Vertification Code in your Email",
    id: "code",
    name: "code",
    message: "Please input vertification code!",
  },
  {
    label: "Password",
    placeholder: "Enter your Password",
    id: "password",
    name: "password",
    message: "Please input your password!",
  },
  {
    label: "Confirm Your Password",
    placeholder: "Confirm your Password",
    id: "password2",
    name: "password2",
    message: "Please confirm your password!",
  },
  {
    label: "Field of Expertise",
    placeholder: "field of expertise(only one !)",
    id: "field",
    name: "field",
    message: "Please input your field of expertise!",
  },
];

const BecomeExpertPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (application) => {
    try {
      applyExpert(application);
    } catch (e) {
      console.log(e);
      alert(e);
    }
    setSubmitted(true);
  };

  const handleReturn = () => {
    window.location.href = "/";
  };

  return (
    <BasicLayout>
      {!submitted && (
        <div className="items-start px-14 pt-9 rounded-xl max-md:px-5">
          <h1 className="self-stretch text-5xl font-semibold tracking-tighter text-center text-blue-400 max-md:max-w-full max-md:text-4xl">
            Register Your Expert Account!
          </h1>
          <p className="self-center mt-12 text-xl leading-8 text-center text-slate-600 max-md:mt-10 max-md:max-w-full">
            We'd love to hear from you. Please fill out this form.
          </p>

        <Form
          className="flex flex-col items-start px-14 pt-9 rounded-xl max-md:px-5 w-3/4 mx-auto "
          onFinish={handleSubmit}
        >
          {inputFields.map((field, index) => (
            <div key={index} className="flex gap-5 self-stretch max-md:flex-wrap max-md:mt-10 mb-3 mx-auto">
              <InputField {...field} />
            </div>
          ))}

            <label className="text-lg font-medium leading-5 text-slate-700 max-md:max-w-full mx-auto w-1/2">
              Education Level
            </label>
            <Form.Item
              id="education"
              name="education"
              initialValue={"Undergraduate"}
              className="mx-auto w-1/2"
            >
              <Select options={studyOptions} size="large" />
            </Form.Item>


            <label className="text-lg font-medium leading-5 text-slate-700 max-md:max-w-full mx-auto w-1/2">
              Professional qualifications and certificates
            </label>
            <Form.Item id="certificate" name="certificate" className="mx-auto w-1/2">
              <FileUpload/>
            </Form.Item>

          <label className="self-stretch font-medium text-lg leading-5 text-slate-700 max-md:max-w-full mx-auto w-3/4">
            Self-introduction
          </label>
          <Form.Item
            id="introduction"
            name="introduction"
            rules={[
              { required: true, message: "Please input your introduction!" },
            ]}
            className="w-3/4 max-md:max-w-full mx-auto"
          >
            <TextArea
              rows={4}
              size="large"
              placeholder="a brief introduction of yourself, including personal strengths, professional strengths, interests and research directions in the professional field, etc."
            />
          </Form.Item>

          <div className="flex gap-3 self-stretch mt-5 text-base leading-6 text-slate-600 max-md:flex-wrap w-3/4 mx-auto">
            <input
              type="checkbox"
              className="shrink-0 my-auto w-5 h-5 bg-white rounded-md border border-gray-300 border-solid"
            />
            <label className="flex-1 max-md:max-w-full">
              You agree to our friendly privacy policy.
            </label>
          </div>
          <button className="justify-center items-center self-stretch px-5 py-2.5 mt-10 text-base font-semibold leading-6 text-white bg-blue-400 rounded-lg border border-gray-400 border-solid shadow-sm max-md:max-w-full w-3/4 mx-auto">
            Apply to become an expert
          </button>
        </Form>
        </div>
      )}
      {submitted && (
        <Result
          status="success"
          title="Successful submission of application!"
          subTitle="We will send the result of your application to the email address you have filled in within three working days, please wait."
          extra={[
            <Button type="primary" key="console" onClick={handleReturn}>
              Back to homepage
            </Button>,
          ]}
        />
      )}
    </BasicLayout>
  );
};

export default BecomeExpertPage;
