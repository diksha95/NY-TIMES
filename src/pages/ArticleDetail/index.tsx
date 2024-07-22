import React from "react";
import { useLocation } from "react-router-dom";
import moment from "moment";

interface MediaMetadata {
  url: string;
}

interface Media {
  "media-metadata": MediaMetadata[];
}

interface ArticleDetail {
  media: Media[];
  title: string;
  abstract: string;
  published_date: string;
}

interface LocationState {
  articleDetail?: ArticleDetail;
  popularArticlesLength?: number;
  popularArticlesDays?: number;
}

const ArticleDetailCompoent: React.FC = () => {
  let location = useLocation();
  const { articleDetail } =
    (location.state as LocationState) ?? {};
  return (
    <div className="m-5 w-full md:w-[50%] md:h-[80vh] mx-auto border-2 border-solid-black">
      <div className="flex justify-center mt-5">
        <img
          src={
            !!articleDetail
              ? articleDetail?.media?.[0]?.["media-metadata"]?.[1]?.url
              : ""
          }
          className="w-[25vw]"
          alt={!!articleDetail ? articleDetail?.title : "aticle-image"}
        />
      </div>
      <div className="mt-5">
        <p className="text-[20px] font-bold  w-full mx-auto px-5">
          {articleDetail?.title}
        </p>
        <p className="text-[24px] text-gray w-full mx-auto text-wrap px-5 ">
          {articleDetail?.abstract}
        </p>
        <p className="text-[18px] font-bold  mt-5">
          {`Publish Date :-  ${
            articleDetail?.published_date
              ? moment(articleDetail.published_date).format("DD MMMM YYYY")
              : "Date not available"
          }`}
        </p>
      </div>
    </div>
  );
};

export default ArticleDetailCompoent;
