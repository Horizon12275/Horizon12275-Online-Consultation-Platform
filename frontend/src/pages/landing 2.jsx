import React from "react";

function LandingPage() {
    const imgSrc1 = "data:image/jpeg;base64,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";
    const imgSrc2 = "https://tse1-mm.cn.bing.net/th/id/OIP-C.tH-5h27NcNU_By3qi0b1cAHaGk?w=169&h=180&c=7&r=0&o=5&dpr=2.3&pid=1.7"

    return (
        <div className="flex flex-col gap-5 items-center bg-slate-100 max-md:flex-wrap">
            <div
                className="flex flex-col gap-0 items-center self-stretch px-16 pt-4 pb-20 w-full text-white bg-gray-900 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                <div
                    className="flex flex-col gap-5 mb-16 w-full max-w-[1163px] max-md:flex-wrap max-md:mb-10 max-md:max-w-full">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center">
                            <div className="font-bold text-white text-6xl">OCP</div>
                        </div>
                        <div
                            className="flex gap-5 justify-end pr-4 text-lg tracking-tight text-center max-md:flex-wrap max-md:pl-5">
                            <a href="/login" className="justify-center px-14 py-5 bg-indigo-600 rounded-lg max-md:px-5"
                               style={{color: 'white'}}>SIGN IN</a>
                            <a href="/register"
                               className="justify-center px-14 py-5 bg-indigo-600 rounded-lg max-md:px-5"
                               style={{color: 'white'}}>SIGN UP</a>
                        </div>
                    </div>
                    <div className="flex gap-5 mt-28 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                        <div
                            className="flex flex-col grow shrink-0 gap-5 my-auto basis-0 w-fit max-md:flex-wrap max-md:max-w-full">
                            <div
                                className="gap-0 text-6xl tracking-tighter leading-[64.8px] max-md:flex-wrap max-md:max-w-full max-md:text-4xl">
                                Get Consultation!
                            </div>
                            <div
                                className="gap-0 mt-28 text-xl tracking-normal leading-8 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                                Explore personal challenges, professional insights, and new
                                opportunities in a collaborative and accessible environment for
                                growth and discovery.
                            </div>
                        </div>
                        <img
                            loading="lazy"
                            srcSet={imgSrc1}
                            className="grow shrink-0 gap-0 aspect-[1.41] basis-0 w-fit max-md:flex-wrap max-md:max-w-full"
                        />
                    </div>
                </div>
            </div>
            {/**/}
            <div
                className="flex gap-5 justify-between px-5 py-2 w-full text-gray-900 max-w-[1112px] max-md:flex-wrap max-md:max-w-full">
                <div className="flex flex-col gap-2.5">
                    <div className="flex gap-5 items-start text-xl tracking-tight leading-8">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3174c76cc6fc4e39144c6961967d29e3eb80f5600c78f71ea14a714cee510b1a?"
                            className="shrink-0 gap-0 aspect-[0.94] w-[35px]"
                        />
                        <div className="flex-auto gap-0">On-Demand Expertise</div>
                    </div>
                    <div className="gap-0 self-end mt-2.5 text-lg tracking-normal leading-7">
                        With lots of unique blocks, you can easily build a page without
                        coding. Build your next landing page.
                    </div>
                </div>
                <hr/>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae47d521b977dc18f0424fc3c14ad4fb9d9c3655fd1de03e8819733e6f38ad7c?"
                    className="shrink-0 gap-0 self-start aspect-[0.97] w-[37px]"
                />
                <div className="flex flex-col gap-5">
                    <div className="gap-0 text-xl tracking-tight leading-8">
                        Seamless Consultation Experience
                    </div>
                    <div className="gap-0 mt-5 text-lg tracking-normal leading-7">
                        With lots of unique blocks, you can easily build a page without
                        coding. Build your next landing page.
                    </div>
                </div>
                <hr/>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/837a564b20ce7741d7685eb2ba71f937f74dfc4741408994e58771b9c003c72c?"
                    className="shrink-0 gap-0 self-start aspect-square w-[34px]"
                />
                <div className="flex flex-col gap-5">
                    <div className="gap-0 text-xl tracking-tight leading-8">
                        Personalized Expert Solutions
                    </div>
                    <div className="gap-0 mt-5 text-lg tracking-normal leading-7">
                        With lots of unique blocks, you can easily build a page without
                        coding. Build your next landing page.
                    </div>
                </div>
            </div>
            {/**/}
            <div className="container" style={{backgroundColor: '#6495ED'}}>
                <div className="flex gap-5 w-full text-gray-900 max-w-[1102px] max-md:flex-wrap max-md:max-w-full">
                    <img
                        loading="lazy"
                        srcSet={imgSrc2}
                        className="grow shrink-0 gap-0 aspect-[1.41] basis-0 w-fit max-md:flex-wrap max-md:max-w-full"
                    />
                    <div className="flex flex-col grow shrink-0 gap-5 px-5 my-auto basis-0 w-fit">
                        <div className="gap-0 text-4xl tracking-tighter leading-10">
                            Connect with Experts Anytime, Anywhere
                        </div>
                        <div className="gap-0 mt-9 text-xl tracking-normal leading-8">
                            Whether you need medical advice, legal guidance, or expert opinions
                            on various topics, our platform connects you with the right
                            specialists, right when you need them.
                        </div>
                    </div>
                </div>
            </div>
            {/**/}
            <div className="container" style={{backgroundColor: '#ADD8E6'}}>
                <div className="flex gap-5 w-full text-gray-900 max-w-[1102px] max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col grow shrink-0 gap-5 px-5 my-auto basis-0 w-fit">
                        <div className="gap-0 text-4xl tracking-tighter leading-10">
                            Your Personal Consultation Hub
                        </div>
                        <div className="gap-0 mt-9 text-xl tracking-normal leading-8">
                            Whether you are facing a medical issue, legal dilemma, or simply seeking professional
                            advice,
                            our platform is here to assist you every step of the way.
                            Join us today and take control of your consultation experience.
                        </div>
                    </div>
                    <img
                        loading="lazy"
                        srcSet={imgSrc2}
                        className="grow shrink-0 gap-0 aspect-[1.41] basis-0 w-fit max-md:flex-wrap max-md:max-w-full"
                    />
                </div>
            </div>
            {/**/}
            <div className="container" style={{backgroundColor: '#007BA7'}}>
                <div className="flex gap-5 w-full text-gray-900 max-w-[1102px] max-md:flex-wrap max-md:max-w-full">
                    <img
                        loading="lazy"
                        srcSet={imgSrc2}
                        className="grow shrink-0 gap-0 aspect-[1.41] basis-0 w-fit max-md:flex-wrap max-md:max-w-full"
                    />
                    <div className="flex flex-col grow shrink-0 gap-5 px-5 my-auto basis-0 w-fit">
                        <div className="gap-0 text-4xl tracking-tighter leading-10">
                            Unlock Knowledge, Unlock Solutions
                        </div>
                        <div className="gap-0 mt-9 text-xl tracking-normal leading-8">
                            Our platform serves as a gateway to a wealth of expertise, where you
                            can seek guidance, ask questions, and gain valuable insights from
                            industry professionals.
                        </div>
                    </div>
                </div>
            </div>
            {/**/}
            <div className="mt-n20">
                <div
                    className="flex flex-col gap-5 self-stretch pt-20 w-full bg-slate-100 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col gap-5 self-center max-w-full w-[1047px] max-md:flex-wrap">
                        <div
                            className="flex gap-5 justify-between max-w-full text-8xl tracking-tighter text-center text-indigo-600 whitespace-nowrap leading-[102.96px] w-[583px] max-md:flex-wrap max-md:text-4xl">
                            <div className="gap-0 max-md:text-4xl">“</div>
                            <div className="gap-0 self-start max-md:text-4xl">“</div>
                        </div>
                        <div className="flex gap-5 mt-14 text-gray-900 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                            <div
                                className="flex flex-col flex-1 grow shrink-0 gap-5 px-5 basis-0 w-fit max-md:flex-wrap max-md:max-w-full">
                                <div
                                    className="gap-0 text-2xl tracking-tight leading-9 max-md:flex-wrap max-md:max-w-full">
                                    “OMG! I cannot believe that I have got a brand new landing page after getting Omega.
                                    It was super easy to edit and publish.”
                                </div>
                                <div
                                    className="flex gap-1.5 self-start mt-12 text-lg tracking-normal leading-7 max-md:mt-10">
                                    <div className="grow gap-0">Diego Morata,</div>
                                    <div className="gap-0">Web Developer</div>
                                </div>
                            </div>
                            <hr/>
                            <div
                                className="flex flex-col flex-1 grow shrink-0 gap-5 px-5 basis-0 w-fit max-md:flex-wrap max-md:max-w-full">
                                <div
                                    className="gap-0 text-2xl tracking-tight leading-9 max-md:flex-wrap max-md:max-w-full">
                                    “Simply the best. Better than all the rest. I’d recommend this product to beginners
                                    and advanced users.”
                                </div>
                                <div
                                    className="flex gap-px self-start mt-20 text-lg tracking-normal leading-7 max-md:mt-10">
                                    <div className="grow gap-0">Franklin Hicks,</div>
                                    <div className="gap-0">Digital Marketer</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*</div>*/}
                <div
                    className="flex flex-col gap-0 items-center px-16 pt-20 pb-px mt-20 w-full text-white bg-gray-900 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col gap-5 w-full max-w-[1111px] max-md:flex-wrap max-md:max-w-full">
                        <div
                            className="flex gap-5 items-start max-md:flex-wrap max-md:pr-5 max-md:max-w-full justify-between">
                            <div className="flex flex-col gap-5">
                                <div className="gap-0 text-base tracking-normal leading-6">
                                    Company
                                </div>
                                <div className="gap-0 mt-10 text-lg tracking-normal leading-10">
                                    About us
                                    <br/>
                                    Contact us
                                    <br/>
                                    Careers
                                    <br/>
                                    Press
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="gap-0 text-base tracking-normal leading-6">
                                    Product
                                </div>
                                <div className="gap-0 mt-11 text-lg tracking-normal leading-10 max-md:mt-10">
                                    Features
                                    <br/>
                                    Pricing
                                    <br/>
                                    News
                                    <br/>
                                    Help desk
                                    <br/>
                                    Support
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="gap-0 text-base tracking-normal leading-6">
                                    Services
                                </div>
                                <div className="gap-0 mt-11 text-lg tracking-normal leading-10 max-md:mt-10">
                                    Digital Marketing
                                    <br/>
                                    Content Writing
                                    <br/>
                                    SEO for Business
                                    <br/>
                                    UI Design
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="gap-0 text-base tracking-normal leading-6">
                                    Legal
                                </div>
                                <div className="gap-0 mt-10 text-lg tracking-normal leading-10">
                                    Privacy Policy
                                    <br/>
                                    Terms & Conditions
                                    <br/>
                                    Return Policy
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="gap-0 text-base tracking-normal leading-6">
                                    Contact us
                                </div>
                                <div className="gap-0 mt-11 text-lg tracking-normal leading-10 max-md:mt-10">
                                    support@brainwave.io
                                    <br/>
                                    +133-394-3439-1435
                                </div>
                            </div>
                        </div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c6054617cd8a6fa8f8312f8d2928ac7bf9e87a6e7983d4d3f2ae1830e151ca6?"
                            className="gap-0 mt-32 w-full border border-solid border-slate-800 stroke-[1px] stroke-slate-800 max-md:flex-wrap max-md:mt-10 max-md:max-w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;

