import React, { useState } from 'react';
import { Button, message, Flex, Layout, Select, Space, Input, Result } from 'antd';
const { Header, Sider, Content } = Layout;
import { BasicLayout } from "../layouts";
import FileUpload from '../components/upload';
const { TextArea } = Input;

const options = [
  {
    value: 'China',
    label: '+86',
  },
  {
    value: 'Japan',
    label: '+81',
  },
  {
    value: 'Germany',
    label: '+49',
  },
  {
    value: 'UK',
    label: '+44',
  },
  {
    value: 'USA',
    label: '+1',
  },
  {
    value: 'India',
    label: '+91',
  },
];

const studyOptions = [
  {
    value: 'Undergraduate',
    label: 'Undergraduate',
  },
  {
    value: 'Junior',
    label: 'Junior',
  },
  {
    value: 'Senior',
    label: 'Senior',
  },
  {
    value: 'Master',
    label: 'Master',
  },
  {
    value: 'Doctor',
    label: 'Doctor',
  },
]


function InputField({ label, placeholder }) {
    return (
      <div className="flex flex-col max-md:max-w-full">
        <label className="text-xl font-medium leading-5 text-slate-700 max-md:max-w-full mb-3" >
          {label}
        </label>
        <Input
          type="text"
          size='large'
          placeholder={placeholder}
          style={{ width: 300, fontSize: 20 }}
        />
      </div>
    );
  }
  
  const inputFields = [
    { label: "First name", placeholder: "First name" },
    { label: "Last name", placeholder: "Last name" },
    { label: "Email", placeholder: "you@company.com" },
    {
      label: "Field of Expertise",
      placeholder: "field of expertise",
    },
  ];

const BecomeExpertPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
      setSubmitted(true);
  };

  const handleReturn = () => {
    window.location.href = "/";
  };

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
          >
          </Header>
         
         {!submitted && (
            <div className="items-start px-14 pt-9 rounded-xl max-md:px-5 w-3/4 mx-auto">
              <h1 className="self-stretch text-5xl font-semibold tracking-tighter text-center text-gray-900 max-md:max-w-full max-md:text-4xl">
                to be an expert
              </h1>
              <p className="self-center mt-12 text-xl leading-8 text-center text-slate-600 max-md:mt-10 max-md:max-w-full">
                We'd love to hear from you. Please fill out this form.
              </p>

              <div className="bg-white flex flex-col items-start px-14 pt-9 pb-20 mt-10 rounded-xl max-md:px-5">

                <div className="flex gap-5 self-stretch max-md:flex-wrap max-md:mt-10 mb-10">
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

                <label className="mt-11 text-xl font-medium leading-5 text-slate-700 max-md:mt-10 mb-3 max-md:max-w-full">
                  Phone number
                </label>
                <Space.Compact>
                  <Select defaultValue="+86" options={options} size='large'/>
                  <Input placeholder="12345678910" style={{ width: 300, fontSize: 20 }}/>
                </Space.Compact>

                <label className="mt-10 text-xl font-medium leading-6 mb-3 text-slate-700">
                  Level of study
                </label>
                <Select defaultValue="Undergraduate" options={studyOptions} size='large'/>

                <label className="mt-10 text-xl font-medium leading-6 mb-3 text-slate-700">
                  Professional qualifications and certificates
                </label>
                <FileUpload/>

                <label className="self-stretch mt-10 text-xl font-medium mb-3 leading-5 text-slate-700 max-md:max-w-full">
                  Self-introduction
                </label>
                <TextArea 
                  rows={4} size='large'
                  style={{ fontSize: 20 }}
                  placeholder="a brief introduction of yourself, including personal strengths, professional strengths, interests and research directions in the professional field, etc."
                />

                <div className="flex gap-3 self-stretch mt-10 text-base leading-6 text-slate-600 max-md:flex-wrap">
                  <input
                    type="checkbox"
                    className="shrink-0 my-auto w-5 h-5 bg-white rounded-md border border-gray-300 border-solid"
                  />
                  <label className="flex-1 max-md:max-w-full">
                    You agree to our friendly privacy policy.
                  </label>
                </div>
                <button 
                  className="justify-center items-center self-stretch px-5 py-2.5 mt-10 text-base font-semibold leading-6 text-white bg-blue-400 rounded-lg border border-gray-400 border-solid shadow-sm max-md:max-w-full"
                  onClick={handleSubmit}>
                  Apply to become an expert
                </button>
              </div>
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
                </Button>
              ]}
            />
         )}

        </BasicLayout>
  );
};

export default BecomeExpertPage;