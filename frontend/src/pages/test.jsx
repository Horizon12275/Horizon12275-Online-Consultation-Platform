import * as React from "react";
import '../index.css';

function BuildYourOwnTeamLibrary() {
    return (
        <section className="flex flex-col justify-center max-w-[685px]">
            <div className="pr-8 w-full bg-neutral-50 max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c2c31f695955a77caa37322e2ed82b7e1a2b1b013650c5302b63627b128a5a5?apiKey=f52c53764647463db8da4a641cad04a5&"
                            alt="Team library illustration"
                            className="grow w-full aspect-[0.7] max-md:mt-8"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                            <h2 className="text-4xl font-bold tracking-tighter leading-10 text-black">
                                Build your own team library
                            </h2>
                            <p className="mt-6 text-sm tracking-normal leading-6 text-black text-opacity-80">
                                Don't reinvent the wheel with every design. Team libraries let
                                you share styles and components across files, with everyone on
                                your team.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BuildYourOwnTeamLibrary;