import { Layout } from "antd";
const { Header, Sider, Content } = Layout;
import { BasicLayout } from "../layouts";
import { TagProvider } from "../context/tagcontext";
import SearchBar from "../components/searchbox";
import { SearchProvider } from "../context/searchcontext";
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
            <SearchBar withSelect />
          </Header>

          <div className="flex flex-col gap-5 px-5 max-md:flex-wrap">
            <ShowSpeciality />
            {/* <ShowConsultation /> */}
            <ShowArticle />
            <HomeComment />
          </div>
        </BasicLayout>
      </TagProvider>
    </SearchProvider>
  );
}
