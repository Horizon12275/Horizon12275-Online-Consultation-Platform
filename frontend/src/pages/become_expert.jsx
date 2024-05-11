import React, { useState } from "react";
import { Button, Select, Space, Input, Result, Form } from "antd";
import { BasicLayout } from "../layouts";
import FileUpload from "../components/upload";
import { applyExpert } from "../services/applyService";
const { TextArea } = Input;

const options = [
  {
    value: "China",
    label: "+86",
  },
  {
    value: "Japan",
    label: "+81",
  },
  {
    value: "Germany",
    label: "+49",
  },
  {
    value: "UK",
    label: "+44",
  },
  {
    value: "USA",
    label: "+1",
  },
  {
    value: "India",
    label: "+91",
  },
];

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
        <label className="text-sm font-medium leading-5 text-slate-700 max-md:max-w-full">
          {label}
        </label>
        <Input type="text" size="large" placeholder={placeholder} allowClear />
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
    label: "Field of Expertise",
    placeholder: "field of expertise",
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
        <Form
          className="flex flex-col items-start px-14 pt-9 rounded-xl bg-zinc-100 bg-opacity-60 max-md:px-5"
          onFinish={handleSubmit}
        >
          <h1 className="self-stretch text-5xl font-semibold tracking-tighter text-center text-gray-900 max-md:max-w-full max-md:text-4xl">
            to be an expert
          </h1>
          <p className="self-center mt-12 text-xl leading-8 text-center text-slate-600 max-md:mt-10 max-md:max-w-full">
            We'd love to hear from you. Please fill out this form.
          </p>

          <div className="flex gap-5 self-stretch mt-20 max-md:flex-wrap max-md:mt-10 mb-10">
            {inputFields.slice(0, 2).map((field, index) => (
              <InputField key={index} {...field} />
            ))}
          </div>
          <div className="flex gap-5 self-stretch max-md:flex-wrap max-md:mt-10 mb-10">
            {inputFields.slice(2, 3).map((field, index) => (
              <InputField key={index} {...field} />
            ))}
          </div>
          {inputFields.slice(3, 4).map((field, index) => (
            <InputField key={index} {...field} />
          ))}

          <label className="mt-11 text-sm font-medium leading-5 text-slate-700 max-md:mt-10 max-md:max-w-full">
            Phone number
          </label>
          <Form.Item
            id="tel"
            name="tel"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Space.Compact>
              <Select defaultValue="+86" options={options} size="large" />
              <Input placeholder="12345678910" />
            </Space.Compact>
          </Form.Item>
          <label className="mt-10 text-base leading-6 text-slate-700">
            Level of study
          </label>
          <Form.Item
            id="education"
            name="education"
            initialValue={"Undergraduate"}
          >
            <Select options={studyOptions} size="large" />
          </Form.Item>
          <label className="mt-10 text-base leading-6 text-slate-700">
            Professional qualifications and certificates
          </label>
          <Form.Item id="certificate" name="certificate">
            <FileUpload />
          </Form.Item>

          <label className="self-stretch mt-10 text-sm font-medium leading-5 text-slate-700 max-md:max-w-full">
            Self-introduction
          </label>
          <Form.Item
            id="introduction"
            name="introduction"
            rules={[
              { required: true, message: "Please input your introduction!" },
            ]}
            className="w-full max-md:max-w-full"
          >
            <TextArea
              rows={4}
              size="large"
              placeholder="a brief introduction of yourself, including personal strengths, professional strengths, interests and research directions in the professional field, etc."
            />
          </Form.Item>
          <div className="flex gap-3 self-stretch mt-10 text-base leading-6 text-slate-600 max-md:flex-wrap">
            <input
              type="checkbox"
              className="shrink-0 my-auto w-5 h-5 bg-white rounded-md border border-gray-300 border-solid"
            />
            <label className="flex-1 max-md:max-w-full">
              You agree to our friendly privacy policy.
            </label>
          </div>
          <button className="justify-center items-center self-stretch px-5 py-2.5 mt-10 text-base font-semibold leading-6 text-white bg-blue-400 rounded-lg border border-gray-400 border-solid shadow-sm max-md:max-w-full">
            Apply to become an expert
          </button>
        </Form>
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
