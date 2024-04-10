import { Col, Layout } from "antd";
const { Header, Sider, Content } = Layout;
import HomeArticle from "../components/homearticle";
import { BasicLayout } from "../layouts";
import { TagProvider } from "../context/tagcontext";
import TagBar from "../components/tagbar";
import SearchBar from "../components/searchbox";
import { SearchProvider } from "../context/searchcontext";
import RecommendSidebar from "../components/carousel";

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
          <Layout>
            <Col>
              <h2 className="text-6xl tracking-tight text-black leading-[63.84px] max-w-[163px]">
                Topics
              </h2>
              <TagBar />
              <HomeArticle />
            </Col>
            <Sider width={300} style={{ background: "#f5f5f5" }}>
              {/* 右侧内容 */}
              <h2 className="text-2xl leading-7 text-black max-w-[152px]">
                热门专家
              </h2>
              <RecommendSidebar />
            </Sider>
          </Layout>
        </BasicLayout>
      </TagProvider>
    </SearchProvider>
  );
}
