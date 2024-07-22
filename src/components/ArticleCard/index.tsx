import React from 'react';
import moment from 'moment';

interface MediaMetadata {
  url: string;
  format: string;
  height: number;
  width: number;
}

interface Media {
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
  approved_for_syndication: number;
  'media-metadata': MediaMetadata[];
}

interface Article {
  uri: string;
  url: string;
  id: number;
  asset_id: number;
  source: string;
  published_date: string;
  updated: string;
  section: string;
  subsection: string;
  nytdsection: string;
  adx_keywords: string;
  column: null;
  byline: string;
  type: string;
  title: string;
  abstract: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  media: Media[];
  eta_id: number;
}

interface ArticleCardProps {
  popularArticles: Article[];
  handleArticle: (article: Article) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ popularArticles, handleArticle }) => {
  return (
    <>
      {popularArticles &&
        popularArticles.length !== 0 &&
        popularArticles.map((article, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => {
              handleArticle(article);
            }}
          >
            <div className="h-[550px] w-[300px] border m-5" data-testid="articleItem">
              <div className="">
                {article.media.map((mediaItem, mediaIndex) => (
                  <div key={mediaIndex}>
                    <img
                      src={mediaItem['media-metadata'][1].url}
                      alt="article-image"
                      className="object-cover w-[400px] h-[300px] "
                    />
                  </div>
                ))}
              </div>
              <p className="text-[14px] text-wrap w-full  font-semibold text-left px-2 mt-2">
                {article.title}
              </p>
              <p className="text-[16px] text-wrap w-full  font-normal text-left px-2 mt-2 ">
                {article.abstract}
              </p>
              <p className="text-[14px] font-bold text-left px-2">
                {`Publish Date :-  ${moment(article.published_date).format(
                  "DD MMMM YYYY"
                )}`}
              </p>
            </div>
          </div>
        ))}
    </>
  );
};

export default ArticleCard;
