import React from "react";
import { SearchProvider } from "../context/searchcontext";
import { TagProvider } from "../context/tagcontext";
import { BasicLayout } from "../layouts";
import { Col, Divider, Flex, Row } from "antd";
import TagBar from "../components/tagbar";
import CommentBox from "../components/comment_box";
import MyComponent from "../components/tweet";

const PlazaPage = () => {
  return (
    <SearchProvider>
      <TagProvider>
        <BasicLayout>
          <Row justify={"center"} align={"middle"} style={{background:"white"}}>
            <Col style={{ width: "60%" }}>
              <TagBar />
              <MyComponent />
              <MyComponent />
              <MyComponent />
              <MyComponent />
            </Col>
            <Divider type="vertical" />
            <Col>
              <Flex vertical justify="start">
                <div className="flex flex-col max-w-[414px]">
                  <div className="flex gap-2 items-start px-5 pt-1 pb-12 text-xl tracking-tight text-gray-500 bg-white">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bdea9b11fac0dbd1fc694c38ec05565594ed98c346ffde8129a425a747252121?apiKey=9e661a5e0ad74c878ca984d592b3752c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdea9b11fac0dbd1fc694c38ec05565594ed98c346ffde8129a425a747252121?apiKey=9e661a5e0ad74c878ca984d592b3752c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdea9b11fac0dbd1fc694c38ec05565594ed98c346ffde8129a425a747252121?apiKey=9e661a5e0ad74c878ca984d592b3752c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdea9b11fac0dbd1fc694c38ec05565594ed98c346ffde8129a425a747252121?apiKey=9e661a5e0ad74c878ca984d592b3752c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdea9b11fac0dbd1fc694c38ec05565594ed98c346ffde8129a425a747252121?apiKey=9e661a5e0ad74c878ca984d592b3752c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdea9b11fac0dbd1fc694c38ec05565594ed98c346ffde8129a425a747252121?apiKey=9e661a5e0ad74c878ca984d592b3752c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdea9b11fac0dbd1fc694c38ec05565594ed98c346ffde8129a425a747252121?apiKey=9e661a5e0ad74c878ca984d592b3752c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdea9b11fac0dbd1fc694c38ec05565594ed98c346ffde8129a425a747252121?apiKey=9e661a5e0ad74c878ca984d592b3752c&"
                      className="shrink-0 rounded-full aspect-square w-[37px]"
                    />
                    <div className="flex-auto mt-2.5">What’s happening?</div>
                  </div>
                  <div className="flex flex-col justify-center w-full whitespace-nowrap">
                    <div className="flex gap-5 justify-between px-5 py-1.5 w-full bg-white">
                      <div className="my-auto text-lg tracking-tight text-blue-400">
                        Cancel
                      </div>
                      <div className="justify-center px-3.5 py-3 text-base tracking-tight text-white bg-blue-200 rounded-2xl">
                        Tweet
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col bg-white max-w-[414px]">
                  <div className="flex flex-col justify-center w-full text-xl font-extrabold tracking-tight text-neutral-900">
                    <div className="justify-center items-start px-5 py-4 w-full bg-white shadow-sm">
                      Trends for you
                    </div>
                  </div>
                  <div className="flex flex-col justify-center w-full">
                    <div className="flex flex-col items-center px-10 py-10 w-full bg-white shadow-sm">
                      <div className="text-2xl font-extrabold tracking-normal text-center text-neutral-900">
                        No new trends for you{" "}
                      </div>
                      <div className="self-stretch mt-5 text-base tracking-tight text-center text-gray-500">
                        It seems like there’s not a lot to show you right now,
                        but you can see trends for other areas
                      </div>
                      <div className="justify-center px-3.5 py-2.5 mt-4 text-sm font-semibold tracking-normal text-white bg-blue-400 rounded-2xl">
                        Change location
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col bg-white max-w-[414px]">
                  <div className="flex flex-col justify-center w-full">
                    <div className="flex flex-col p-3 w-full bg-white shadow-sm">
                      <div className="flex gap-5 justify-between px-0.5 w-full">
                        <div className="flex gap-2.5">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/57cad8c42af1b379f802bb5694facddf4692c259189cbabb6018068b9bebd98c?apiKey=9e661a5e0ad74c878ca984d592b3752c&"
                            className="shrink-0 self-start aspect-square fill-violet-700 w-[22px]"
                          />
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ee77017d0fdd2e8090b4ab83aea60da00e275d5814e88f36f59add53c3c81727?apiKey=9e661a5e0ad74c878ca984d592b3752c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee77017d0fdd2e8090b4ab83aea60da00e275d5814e88f36f59add53c3c81727?apiKey=9e661a5e0ad74c878ca984d592b3752c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee77017d0fdd2e8090b4ab83aea60da00e275d5814e88f36f59add53c3c81727?apiKey=9e661a5e0ad74c878ca984d592b3752c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee77017d0fdd2e8090b4ab83aea60da00e275d5814e88f36f59add53c3c81727?apiKey=9e661a5e0ad74c878ca984d592b3752c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee77017d0fdd2e8090b4ab83aea60da00e275d5814e88f36f59add53c3c81727?apiKey=9e661a5e0ad74c878ca984d592b3752c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee77017d0fdd2e8090b4ab83aea60da00e275d5814e88f36f59add53c3c81727?apiKey=9e661a5e0ad74c878ca984d592b3752c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee77017d0fdd2e8090b4ab83aea60da00e275d5814e88f36f59add53c3c81727?apiKey=9e661a5e0ad74c878ca984d592b3752c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee77017d0fdd2e8090b4ab83aea60da00e275d5814e88f36f59add53c3c81727?apiKey=9e661a5e0ad74c878ca984d592b3752c&"
                            className="shrink-0 rounded-full aspect-square w-[37px]"
                          />
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3877b7b5c9c56621c0baf4db68e5a03d3be4c16a4c1f9e99cfb12ce74ddbedf4?apiKey=9e661a5e0ad74c878ca984d592b3752c&"
                          className="shrink-0 self-start border border-solid aspect-[1.82] border-neutral-300 stroke-[1.25px] stroke-neutral-300 w-[11px]"
                        />
                      </div>
                      <div className="mt-3 ml-8 text-base tracking-tight text-neutral-900">
                        <span className="text-gray-500">
                          In case you missed{" "}
                        </span>
                        <span className="font-semibold text-neutral-900">
                          Saad Drusteer
                        </span>
                        <span className="text-gray-500">’s Tweet </span>
                      </div>
                      <div className="ml-8 text-base tracking-tight leading-5 text-gray-500">
                        <span className="text-2xl text-gray-500"></span>
                        <span className="text-gray-500">
                           Are you using WordPress and migrating to the
                          JAMstack? I wrote up a case study about how Smashing
                          Magazine moved to JAMstack and saw great performance
                          improvements and better security.
                        </span>
                        <br />
                        <br />
                        <span className="text-gray-500">smashin</span>gdrustee
                        <span className="text-gray-500">
                          r.com/2020/01/migrat..
                        </span>
                        .
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center w-full">
                    <div className="flex flex-col p-3 w-full bg-white shadow-sm">
                      <div className="flex gap-5 justify-between px-0.5 w-full">
                        <div className="flex gap-2.5">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/57cad8c42af1b379f802bb5694facddf4692c259189cbabb6018068b9bebd98c?apiKey=9e661a5e0ad74c878ca984d592b3752c&"
                            className="shrink-0 self-start aspect-square fill-violet-700 w-[22px]"
                          />
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e410b8a7d011ec879ecb53ea725389c8760ecca9714372e8dd934820cd215322?apiKey=9e661a5e0ad74c878ca984d592b3752c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e410b8a7d011ec879ecb53ea725389c8760ecca9714372e8dd934820cd215322?apiKey=9e661a5e0ad74c878ca984d592b3752c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e410b8a7d011ec879ecb53ea725389c8760ecca9714372e8dd934820cd215322?apiKey=9e661a5e0ad74c878ca984d592b3752c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e410b8a7d011ec879ecb53ea725389c8760ecca9714372e8dd934820cd215322?apiKey=9e661a5e0ad74c878ca984d592b3752c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e410b8a7d011ec879ecb53ea725389c8760ecca9714372e8dd934820cd215322?apiKey=9e661a5e0ad74c878ca984d592b3752c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e410b8a7d011ec879ecb53ea725389c8760ecca9714372e8dd934820cd215322?apiKey=9e661a5e0ad74c878ca984d592b3752c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e410b8a7d011ec879ecb53ea725389c8760ecca9714372e8dd934820cd215322?apiKey=9e661a5e0ad74c878ca984d592b3752c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e410b8a7d011ec879ecb53ea725389c8760ecca9714372e8dd934820cd215322?apiKey=9e661a5e0ad74c878ca984d592b3752c&"
                            className="shrink-0 rounded-full aspect-square w-[37px]"
                          />
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3877b7b5c9c56621c0baf4db68e5a03d3be4c16a4c1f9e99cfb12ce74ddbedf4?apiKey=9e661a5e0ad74c878ca984d592b3752c&"
                          className="shrink-0 self-start border border-solid aspect-[1.82] border-neutral-300 stroke-[1.25px] stroke-neutral-300 w-[11px]"
                        />
                      </div>
                      <div className="self-center mt-3 text-base tracking-tight text-neutral-900">
                        <span className="text-gray-500">
                          In case you missed{" "}
                        </span>
                        <span className="font-semibold text-neutral-900">
                          UX Upper
                        </span>
                        <span className="text-gray-500">’s Tweet</span>
                      </div>
                      <div className="mt-2 text-base tracking-tight leading-5 text-gray-500">
                        Creating meaningful experiences: an Introduction to User
                        Experience design &gt;
                        <br />
                        <br />
                        owww.ly/p0fx50y5CoO
                        <br />
                        <br />
                        #ux #uxdesign #uxresearch #userresearch #research
                        #productdesing #webdesign #userexperience #startup
                        #digital #design #diseno #psychology #servicedesign
                        #conversion pic.twitter.com/wgpLcbkomN{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </Flex>
            </Col>
          </Row>
        </BasicLayout>
      </TagProvider>
    </SearchProvider>
  );
};

export default PlazaPage;
