import React, { useContext } from "react";
import { List, Space, Flex, Typography } from "antd";
import { ProCard } from "@ant-design/pro-components";
import ExpertShowCard from "./expert_showcard";
//import SearchContext from '../context/SearchContext';
import { getAllExperts } from "../services/expertService";
const { Title, Paragraph } = Typography;
const { Meta } = ProCard;
const ExpertShowList = ({experts}) => {
  
  
  return (
    <Flex
      gap="middle"
      justify="space-around"
      align="center"
      style={{ marginTop: "30px" }}
    >
      <Space direction="vertical" style={{ width: "80%" }}>
        <List
          style={{ width: "100%" }}
          grid={{
            gutter: 16,
            column: 3,
          }}
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 9,
            style: { textAlign: "center" },
            showSizeChanger: false,
            showQuickJumper: true,
          }}
          dataSource={experts}
          renderItem={(expert) => (
            <List.Item>
              <ExpertShowCard item={expert} />
            </List.Item>
          )}
        />
      </Space>
    </Flex>
  );
};

export default ExpertShowList;