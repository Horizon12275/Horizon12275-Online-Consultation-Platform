import { Col, Flex, Layout, Row } from "antd";
const { Header, Sider, Content } = Layout;
import HomeArticle from "../components/homearticle";
import { BasicLayout } from "../layouts";
import { TagProvider } from "../context/tagcontext";
import TagBar from "../components/tagbar";
import SearchBar from "../components/searchbox";
import { SearchProvider } from "../context/searchcontext";
import RecommendSidebar from "../components/recommend_sidebar";
import ShowSpeciality from "../components/speciality_card";
import HomeComment from "../components/home_comment";
import ShowArticle from "../components/home_article";
import ShowConsultation from "../components/home_experts";


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

        <div className="flex flex-col gap-5 px-5 max-md:flex-wrap">
          <ShowSpeciality/>
          <ShowConsultation/>
          <ShowArticle/>
          <HomeComment/>
        </div>

        </BasicLayout>
      </TagProvider>
    </SearchProvider>
  );
}
