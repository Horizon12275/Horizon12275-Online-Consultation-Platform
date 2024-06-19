import { Layout } from "antd";
const { Header, Sider, Content } = Layout;
import { PublicLayout } from "../layouts";
import SearchBar from "../components/searchbox";
import ShowSpeciality from "../components/speciality_card";
import HomeComment from "../components/home_comment";
import ShowArticle from "../components/home_article";

export default function HomePage() {
  return (
    <PublicLayout>
      <Header
        style={{
          background: "rgba(255, 255, 255, 0)",
          width: "80%",
          height: "50px",
          position: "sticky",
          top: 10,
          left: 123,
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
    </PublicLayout>
  );
}
