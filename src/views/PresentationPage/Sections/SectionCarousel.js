import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
import LocationOn from "@material-ui/icons/LocationOn";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";

import carouselStyle from "../../../pagestyles/componentsSections/carouselStyle.js";

import image1 from "../../../images/bg.jpg";
import image2 from "../../../images/bg2.jpg";
import image3 from "../../../images/bg3.jpg";

const useStyles = makeStyles(carouselStyle);

const slides = [
    {
        caption: "Yellowstone National Park, United States",
        image: image1
    },
    {
        caption: "Somewhere Beyond, United States",
        image: image2
    },
    {
        caption: "Yellowstone National Park, United States",
        image: image3
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
    <div className={classes.section} id="carousel">
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={10} md={8} className={classes.marginAuto}>
            <Card>
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
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}