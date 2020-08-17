import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
import LocationOn from "@material-ui/icons/LocationOn";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "../../../components/Card/Card.js";

import carouselStyle from "../../../pagestyles/componentsSections/carouselStyle.js";

import correctionTapesImage from "../../../images/slider/CORRECTION TAPE -2.jpg";
import potPlantImage from "../../../images/slider/DESK PLANT POT -2.jpg";
import lanyardsImage from "../../../images/slider/LANYARDS -2.jpg";
import lipBalmImage from "../../../images/slider/LIP BALMS -2.jpg";
import stressShapesImage from "../../../images/slider/STRESS SHAPES -2.jpg";

const useStyles = makeStyles(carouselStyle);

  const slides = [
      {
        caption: "Custom Branded Correction Tapes",
        image: correctionTapesImage
    },
    {
        caption: "Mini Desk Plant Pots",
        image: potPlantImage
    },
    {
        caption: "Fast Track Custom Lanyards",
        image: lanyardsImage
    },
    {
      caption: "Custom Branded Lip Balms",
      image: lipBalmImage
  },
  {
    caption: "Stress less with branded Stress Shapes",
    image: stressShapesImage
}
];


export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div className={classes.carousel} id="carousel">
      <Carousel {...settings}>
          { slides.map( s => 
            <div>
                <img src={s.image} alt={s.caption} className="slick-image" />
                <div className="slick-caption">
                    <h4>
                        <LocationOn className="slick-icons" />
                        {s.caption}
                    </h4>
                </div>
            </div>) 
            }
      </Carousel>
    </div>
  );
}