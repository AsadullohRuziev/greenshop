import React from "react";
import { BannerSection, H1, Planet, Welcome } from "./style";
import Text from "../Text";
import Button from "../../UI/Button";
import BannerImg from "../../assets/images/banner.png";

const Banner = () => {
  return (
    <BannerSection>
      <div className=" w-1/2 ">
        <Welcome>Welcome to GreenShop</Welcome>
        <H1>
          Let’s Make a Better <Planet>Planet</Planet>
        </H1>
        <Text
          title={
            "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!"
          }
        />
        <Button title={"SHOP NOW"} />
      </div>
      <div className="w-1/2 ">
        <BannerImg />
      </div>
    </BannerSection>
  );
};

export default Banner;
