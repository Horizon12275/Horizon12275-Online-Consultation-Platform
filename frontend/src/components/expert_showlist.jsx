import { List, Flex, Pagination } from "antd";
import ExpertShowCard from "./expert_showcard";
import { useSearchParams } from "react-router-dom";

const ExpertShowList = ({ sortBy, experts, length }) => {
  //这个子组件的回调是修改page和pageSize 其他都不变
  const [searchParams, setSearchParams] = useSearchParams();
  const handlePageChange = (page, pageSize) => {
    setSearchParams({
      page: page,
      pageSize: pageSize,
      keyword: searchParams.get("keyword") || "",
      tag: searchParams.get("tag") || "",
    });
  };
  if (sortBy === "price") {
    experts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "rating") {
    experts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <Flex gap="middle" justify="space-around" align="center">
      <List
        grid={{
          column: 3,
        }}
        dataSource={experts}
        renderItem={(expert) => (
          <List.Item>
            <ExpertShowCard item={expert} />
          </List.Item>
        )}
        pagination={{
          current: searchParams.get("page") || 1,
          defaultPageSize: 12,
          pageSize: searchParams.get("pageSize") || 12,
          onChange: handlePageChange,
          showQuickJumper: true,
          showSizeChanger: true,
          pageSizeOptions: ["12", "24", "48"],
          total: length,
          showTotal: (total, range) =>
            `${total} 项中的 ${range[0]}-${range[1]} 项 `,
          position: "bottom",
        }}
      ></List>
    </Flex>
  );
};

export default ExpertShowList;
