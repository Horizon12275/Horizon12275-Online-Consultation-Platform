import React, { useContext } from "react";
import { List, Space, Flex } from "antd";
import ExpertShowCard from "./expert_showcard";
//import SearchContext from '../context/SearchContext';
import { getAllExperts } from "../services/expertService";

export default function ExpertShowList() {
  //const { searchValue } = useContext(SearchContext);
  //console.log('searchValue:', searchValue);
  //const filteredExperts = experts.filter(expert => expert.title.toLowerCase().includes(searchValue.toLowerCase()));
  const datas = getAllExperts();

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
          dataSource={datas}
          renderItem={(item) => (
            <List.Item>
              <ExpertShowCard data={item} />
            </List.Item>
          )}
        />
      </Space>
    </Flex>
  );
}
