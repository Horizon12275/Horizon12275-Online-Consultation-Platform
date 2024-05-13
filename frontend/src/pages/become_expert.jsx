import React, { useEffect, useState } from "react";
import { Button, Select, Space, Input, Result, Form } from "antd";
import { PrivateLayout, PublicLayout } from "../layouts";
import { applyExpert } from "../services/applyService";
import { getSpecialities } from "../services/specialityService";
import ImageUploader from "../components/image_upload";
import { UploadOutlined } from "@ant-design/icons";
import { sendVertificationCodeExpert } from "../services/applyService";

const { TextArea } = Input;

function InputField({ label, placeholder, id, name, rules, value, onChange }) {
  return (
    <Form.Item
      id={id}
      name={name}
      rules={rules}
      className="flex flex-col max-md:max-w-full"
    >
      <div>
        <label className="text-lg font-medium leading-5 text-slate-700 max-md:max-w-full">
          {label}
        </label>
        <br></br>
        <Input
          type="text"
          size="large"
          placeholder={placeholder}
          allowClear
          style={{ width: "50vh" }}
          value={value}
          onChange={onChange}
        />
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
    rules: [{ required: true, message: "Please input your first name!" }],
  },
  {
    label: "Last name",
    placeholder: "Last name",
    id: "lastName",
    name: "lastName",
    rules: [{ required: true, message: "Please input your last name!" }],
  },
  {
    label: "Email",
    placeholder: "you@company.com",
    id: "email",
    name: "email",
    rules: [{ required: true, message: "Please input your email!" }],
  },
  {
    label: "Vertification Code",
    placeholder: "Enter the Vertification Code in your Email",
    id: "code",
    name: "vertificationCode",
    rules: [
      { required: true, message: "Please input your vertification code!" },
    ],
  },
  {
    label: "Password",
    placeholder: "Enter your Password",
    id: "password",
    name: "password",
    rules: [{ required: true, message: "Please input your password!" }],
  },
  {
    label: "Confirm Your Password",
    placeholder: "Confirm your Password",
    id: "password2",
    name: "password2",
    rules: [
      {
        required: true,
        message: "Please confirm your password!",
      },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue("password") === value) {
            return Promise.resolve();
          }
          return Promise.reject(
            new Error("The two passwords that you entered do not match!")
          );
        },
      }),
    ],
  },
  {
    label: "Education Level",
    placeholder: "Input your Education Level",
    id: "education",
    name: "education",
    rules: [{ required: true, message: "Please input your education!" }],
  },
];

const BecomeExpertPage = () => {
  const [currentEmail, setCurrentEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [specialties, setSpecialties] = useState([]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    getSpecialities().then((res) => {
      setSpecialties(res);
    });
  }, []);
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  const handleSubmit = async (application) => {
    application.certificate = images[0];
    try {
      await applyExpert(application);
      setSubmitted(true);
    } catch (e) {
      console.log(e);
      alert(e);
    }
  };

  const handleReturn = () => {
    window.location.href = "/";
  };

  return (
    <PublicLayout>
      {!submitted && (
        <div className="items-start px-14 pt-9 rounded-xl max-md:px-5">
          <h1 className="self-stretch text-5xl font-semibold tracking-tighter text-center text-blue-400 max-md:max-w-full max-md:text-4xl">
            Register Your Expert Account!
          </h1>
          <p className="self-center mt-12 text-xl leading-8 text-center text-slate-600 max-md:mt-10 max-md:max-w-full">
            We'd love to hear from you. Please fill out this form.
          </p>
          <button
            style={{
              position: "absolute",
              top: "520px",
              right: "390px",
              width: "100px",
              height: "35px",
              border: "none",
              backgroundColor: "#a5aeb3",
              color: "white",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => {
              console.log(currentEmail);
              sendVertificationCodeExpert(currentEmail);
            }}
          >
            Get Code!
          </button>
          <Form
            className="flex flex-col items-start px-14 pt-9 rounded-xl max-md:px-5 w-3/4 mx-auto "
            onFinish={handleSubmit}
          >
            {inputFields.map((field) => {
              if (field.id === "email") {
                return (
                  <div className="flex gap-5 self-stretch max-md:flex-wrap max-md:mt-10 mb-3 mx-auto">
                    <InputField
                      key={field.id}
                      label={field.label}
                      name={field.name}
                      rules={field.rules}
                      placeholder={field.placeholder}
                      value={currentEmail}
                      onChange={(e) => {
                        setCurrentEmail(e.target.value);
                        //console.log(currentEmail);
                      }}
                    />
                  </div>
                );
              } else {
                return (
                  <div className="flex gap-5 self-stretch max-md:flex-wrap max-md:mt-10 mb-3 mx-auto">
                    <InputField
                      key={field.id}
                      label={field.label}
                      name={field.name}
                      rules={field.rules}
                      placeholder={field.placeholder}
                    />
                  </div>
                );
              }
            })}

            <label className="text-lg font-medium leading-5 text-slate-700 max-md:max-w-full mx-auto w-1/2">
              Field of Expertise
            </label>
            <Form.Item
              id="field"
              name="field"
              className="mx-auto w-1/2"
              rules={[
                {
                  required: true,
                  message: "Please input your field of expertise!",
                },
              ]}
            >
              <Select
                filterOption={filterOption}
                mode="multiple"
                options={specialties.map(({ id, content }) => {
                  return { value: id, label: content };
                })}
                size="large"
              />
            </Form.Item>

            <label className="text-lg font-medium leading-5 text-slate-700 max-md:max-w-full mx-auto w-1/2">
              Professional qualifications and certificates
            </label>
            <Form.Item
              id="certificate"
              name="certificate"
              rules={[
                {
                  validator: (_, value) => {
                    if (images.length > 0) {
                      return Promise.resolve();
                    }
                    return Promise.reject("Please upload a cover image!");
                  },
                },
              ]}
              className="mx-auto w-1/2"
            >
              <ImageUploader
                multiple={false}
                children={
                  <Button size="large" icon={<UploadOutlined />}>
                    Click to Upload
                  </Button>
                }
                selectedImages={images}
                setSelectedImages={setImages}
              />
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
            {/* 
            <div className="flex gap-3 self-stretch mt-5 text-base leading-6 text-slate-600 max-md:flex-wrap w-3/4 mx-auto">
              <input
                type="checkbox"
                className="shrink-0 my-auto w-5 h-5 bg-white rounded-md border border-gray-300 border-solid"
              />
              <label className="flex-1 max-md:max-w-full">
                You agree to our friendly privacy policy.
              </label>
            </div> */}
            <button className="cursor-pointer justify-center items-center self-stretch px-5 py-2.5 mt-10 text-base font-semibold leading-6 text-white bg-blue-400 rounded-lg border border-gray-400 border-none shadow-sm max-md:max-w-full w-3/4 mx-auto">
              Apply to Register An Expert Account
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
    </PublicLayout>
  );
};

export default BecomeExpertPage;
