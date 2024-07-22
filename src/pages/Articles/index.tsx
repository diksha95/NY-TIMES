import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DropdownComponent from "components/Dropdown";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PulseLoader } from "react-spinners";
import Header from "pages/Header/index";
import ArticleCard from "components/ArticleCard";
import axios from "axios";

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
  "media-metadata": MediaMetadata[];
}

interface ArticleProps {
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

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: "1", label: "1 day" },
  { value: "7", label: "7 days" },
  { value: "30", label: "30 days" },
];

const Articles: React.FC = () => {
  const navigate = useNavigate();
  const [popularArticles, setPopularArticles] = useState<ArticleProps[] | null>(
    null
  );
  const [popularArticleError, setPopularArticleError] =
    useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    options[0]
  );
  
  useEffect(() => {
    try {
      axios
        .get(
          `https://api.nytimes.com/svc/mostpopular/v2/viewed/${selectedOption?.value}.json?api-key=ezjNckZZNyBFaviUJVB7HKSeG0H1LwWK`
        )
        .then((response) => {
          console.log("response", response);
          if (response?.status === 200) {
            setPopularArticles(response.data.results);
          }
        });
    } catch (e) {
      setPopularArticleError(true);
      console.log(e);
    }
  }, [selectedOption]);

  useEffect(() => {
    if (popularArticleError) {
      toast.error("please try after sometime");
    }
  }, [popularArticleError]);

  const handleArticle = (article: ArticleProps) => {
    navigate("/article-detail", {
      state: {
        articleDetail: article,
        popularArticlesLength: !!popularArticles ? popularArticles.length : 0,
        popularArticlesDays: !!selectedOption
          ? Number(selectedOption.value)
          : 0,
      },
    });
  };

  return !!popularArticles && popularArticles.length !== 0 ? (
    <div className="h-[100%]  ">
      <Header
        popularArticlesLength={!!popularArticles ? popularArticles.length : 0}
        popularArticlesDays={
          !!selectedOption ? Number(selectedOption.value) : 1
        }
      />
      <div className="w-full flex  mx-auto justify-center mt-5">
        <p className="text-[14px] font-bold  text-center my-auto items-center ">
          Filter :
        </p>
        <div className="ml-4">
          <DropdownComponent
            options={options}
            selectedOption={selectedOption}
            setSelectedOption={(value) => setSelectedOption(value)}
          />
        </div>
      </div>
      <div className="h-full w-full  flex justify-around flex-wrap overflow-auto mt-8">
        <ArticleCard
          popularArticles={popularArticles}
          handleArticle={(value) => {
            handleArticle(value);
          }}
        />
      </div>
      <ToastContainer />
    </div>
  ) : (
    <div className="h-full w-full mt-5">
      <PulseLoader />
    </div>
  );
};

export default Articles;
