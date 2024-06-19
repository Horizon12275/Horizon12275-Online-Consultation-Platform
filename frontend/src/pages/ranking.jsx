import { PrivateLayout, PublicLayout } from "../layouts";
import TagBar from "../components/tagbar";
import ExpertShowList from "../components/expert_showlist";
import { Flex, Row } from "antd";
import DropdownMenu from "../components/time_menu.jsx";

import Podium from "../components/podium.jsx";

const RankingPage = () => {
  return (
    <PublicLayout>
      <Flex vertical gap="middle" className="mx-auto w-[1300px]">
        <h1 className="text-5xl tracking-tight text-black self-start mt-8">
          Check out the rankings!
        </h1>
        <TagBar />
        <Row>
          <DropdownMenu />
        </Row>
        <Row>
          <div
            style={{
              marginLeft: "400px",
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Podium />
          </div>
        </Row>
        <Row>
          <ExpertShowList sortBy="rating" />
        </Row>
      </Flex>
    </PublicLayout>
  );
};

export default RankingPage;
