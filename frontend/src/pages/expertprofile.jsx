import React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "antd";
import ExpertInfoCard from "../components/expert_infocard";
import Rating from "../components/ratings";
import CommentList from "../components/comment_list";

const ExpertProfilePage = () => {
  let { id } = useParams();
  return (
    <div />
  );
};
export default ExpertProfilePage;
