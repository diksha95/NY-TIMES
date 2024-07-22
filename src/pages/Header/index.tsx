
import React, { FC } from "react";

interface HeaderProps {
  popularArticlesLength: number;
  popularArticlesDays: number;
}

const Header: FC<HeaderProps> = ({ popularArticlesLength, popularArticlesDays }) => {
  return (
    <p className=" text-[18px] md:text-[28px] font-bold">{`${
      popularArticlesLength
    } Popular Articles from last ${
      popularArticlesDays
    } day`}</p>
  );
};

export default Header;