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
            <button
              style={{
                width: "180px",
                height: "70px",
                fontSize: "26px",
                color: "white",
                backgroundColor: "#FFA39E",
                borderRadius: "16px",
                border: "none",
              }}
            >
              Chat Now!
            </button>
          </Link>
        </Row>
        <p className="my-4 text-2xl leading-8 text-black whitespace-normal min-h-40">
          {expert.aboutMe}
        </p>
        <Row justify="start" align="middle">
          <h2 className="my-auto text-2xl leading-7 text-black">Specialty:</h2>
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
