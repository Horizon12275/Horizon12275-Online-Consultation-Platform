//专家个人主页的信息卡片
import { Row, Col, Tag, Flex } from "antd";
import { Link } from "react-router-dom";

const ExpertInfoCard = ({ expert }) => {
  // 渲染专家信息卡片

  return (
    <Row justify="space-between" align="middle" className="my-10">
      <Col>
        <img
          loading="lazy"
          src={expert.avatar}
          alt="Profile"
          className="border-white border-solid shadow-lg aspect-square rounded-full w-[260px] object-cover mr-10"
        />
      </Col>
      <Flex vertical flex={"1"} justify={"space-between"} className="h-[300px]">
        <Row justify="space-between" align="middle">
          <h1 className="text-5xl tracking-tight text-black">{expert.name}</h1>
          <Link to={`/consultation/${expert.id}`}>
            <button className="px-4 py-2.5 text-2xl font-semibold text-white bg-blue-200 rounded">
              Chat Now!
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/12c64b4eb1c8217bbde363e8ecd7cce3d58af649839a7536b6f9b3b1af89a1f3?apiKey=9e661a5e0ad74c878ca984d592b3752c&"
                alt="Chat icon"
              />
            </button>
          </Link>
        </Row>
        <p className="my-4 text-2xl leading-8 text-black whitespace-normal min-h-40">
          {expert.aboutMe}
        </p>
        <Row justify="start" align="middle">
          <h2 className="my-auto text-2xl leading-7 text-black">擅长领域：</h2>
          {expert.specialities?.map((item, index) => (
            <Link to={`/expert?tag=${item.id}`} key={index}>
              <Tag.CheckableTag
                key={index}
                className="mx-4 px-5 py-1 rounded border-zinc-500 text-center"
              >
                {item.content}
              </Tag.CheckableTag>
            </Link>
          ))}
        </Row>
      </Flex>
    </Row>
  );
};

export default ExpertInfoCard;
