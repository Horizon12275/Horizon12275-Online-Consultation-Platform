import { Col, Flex, Layout, Row } from "antd";
const { Header, Sider, Content } = Layout;
import HomeArticle from "../components/homearticle";
import { BasicLayout } from "../layouts";
import { TagProvider } from "../context/tagcontext";
import TagBar from "../components/tagbar";
import SearchBar from "../components/searchbox";
import { SearchProvider } from "../context/searchcontext";
import RecommendSidebar from "../components/recommend_sidebar";

export default function HomePage() {
  return (
    <SearchProvider>
      <TagProvider>
        <BasicLayout>
          <Header
            style={{
              background: "rgba(255, 255, 255, 0)",
              width: "80%",
              height: "50px",
              position: "sticky",
              top: 10,
              right: 0,
              zIndex: 999,
              padding: "0 20px",
              margin: "0 auto",
            }}
          >
            <SearchBar />
          </Header>
          <Row className="mx-10">
            <Col flex={"1"}>
              <h2 className="text-6xl tracking-tight text-black mt-8">
                Topics
              </h2>
              <TagBar />
              <HomeArticle />
            </Col>
            <Col width={300} style={{ background: "#f5f5f5" }}>
              {/* 右侧内容 */}
              <h2 className="text-2xl leading-7 text-black max-w-[152px]">
                热门专家
              </h2>
              <RecommendSidebar />
            </Col>
          </Row>
        </BasicLayout>
      </TagProvider>
    </SearchProvider>
  );
}
