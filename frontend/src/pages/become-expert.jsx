import * as React from "react";
import { Col, Flex, Layout, Row } from "antd";
const { Header, Sider, Content } = Layout;
import { BasicLayout } from "../layouts";

function InputField({ label, placeholder, value }) {
  return (
    <div className="flex flex-col max-md:max-w-full">
      <label className="text-sm font-medium leading-5 text-slate-700 max-md:max-w-full">
        {label}
      </label>
      <input
        type="text"
        className="justify-center px-4 py-3 mt-1.5 text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm max-md:max-w-full"
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}

function PhoneField() {
  return (
    <div className="flex gap-0 mt-1.5 text-base leading-6 bg-white rounded-lg border border-gray-300 border-solid shadow-sm max-md:flex-wrap">
      <div className="flex gap-0 justify-between py-3 pr-3 pl-4 text-gray-900 whitespace-nowrap">
        <div>US</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f288935232c2b601ff5bd7f94908d897dfaab83742491521bc37030849a2b7c?apiKey=273a9e43b39c48c2a08ea907e27f337f&"
          alt="US flag"
          className="shrink-0 my-auto w-5 aspect-square"
        />
      </div>
      <input
        type="tel"
        className="border-none flex-1 my-auto text-gray-500 max-md:max-w-full"
        placeholder="+1 (555) 000-0000"
      />
    </div>
  );
}

function FileUpload() {
  return (
    <div className="flex flex-col justify-center px-8 mt-1.5 max-w-full text-base bg-white rounded-[41.467px] text-neutral-800 w-[360px] max-md:pl-5">
      <div className="flex gap-5 py-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fe30a5d117ebca35fedb9c5a654cd92325ae0622924dcb1e576f1fdfeaed42e?apiKey=273a9e43b39c48c2a08ea907e27f337f&"
          alt="Upload icon"
          className="shrink-0 aspect-square w-[38px]"
        />
        <div className="my-auto">Click to upload</div>
      </div>
    </div>
  );
}

const inputFields = [
  { label: "First name", placeholder: "First name", value: "First name" },
  { label: "Last name", placeholder: "Last name", value: "Last name" },
  { label: "Email", placeholder: "you@company.com", value: "you@company.com" },
  {
    label: "Field of Expertise",
    placeholder: "field of expertise",
    value: "field of expertise",
  },
];

export default function BecomeExpertPage() {
  return (
    <BasicLayout>
      <Header
        style={{
          background: "rgba(255, 255, 255, 0)",
          width: "80%",
          height: "50px",
          position: "sticky",
          top: 10,
          right: 0,
          zIndex: 999,
          padding: "0 20px",
          margin: "0 auto",
        }}
      ></Header>

      <div className="flex flex-col items-start px-14 pt-9 rounded-xl bg-zinc-100 bg-opacity-60 max-md:px-5">
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
        <PhoneField />
        <label className="mt-10 text-base leading-6 text-slate-700">
          Level of study
        </label>
        <div className="flex gap-2 justify-center px-4 py-2.5 mt-1.5 text-base whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-slate-700 max-md:px-5">
          <div>Undergraduate</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c6f8156adcf7dbf476bd35edea6537a0b61a4c1e9f7915034a9f9e13ee5e0b3?apiKey=273a9e43b39c48c2a08ea907e27f337f&"
            alt="Dropdown arrow"
            className="shrink-0 w-5 aspect-square"
          />
        </div>
        <label className="mt-10 text-base leading-6 text-slate-700">
          Professional qualifications and certificates
        </label>
        <FileUpload />
        <label className="self-stretch mt-10 text-sm font-medium leading-5 text-slate-700 max-md:max-w-full">
          Self-introduction
        </label>
        <textarea
          className="justify-center self-stretch px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm max-md:max-w-full"
          placeholder="a brief introduction of yourself, including personal strengths, professional strengths, interests and research directions in the professional field, etc."
        ></textarea>
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
      </div>
    </BasicLayout>
  );
}
