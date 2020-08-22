/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "../components/Header/Header.js";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Parallax from "../components/Parallax/Parallax.js";
import Footer from "../components/Footer/Footer.js";
// sections for this page
import HeaderLinks from "../components/Header/HeaderLinks.js";
import SectionServices from "../views/AboutUsPage/Sections/SectionServices.js";
import logo from "../images/logo.png";
import face1 from "../images/faces/card-profile6-square.jpg";
import face2 from "../images/faces/christian.jpg";
import face3 from "../images/faces/card-profile4-square.jpg";
import face4 from "../images/faces/card-profile1-square.jpg";
import face5 from "../images/faces/marc.jpg";
import face6 from "../images/faces/kendall.jpg";
import face7 from "../images/faces/card-profile5-square.jpg";
import face8 from "../images/faces/card-profile2-square.jpg";
import aboutUsStyle from "../pagestyles/aboutUsStyle.js";

const useStyles = makeStyles(aboutUsStyle);

export default function AboutUsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
<Header
        brand={<img src={logo} />}
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="white"
      />
      <Parallax image={require("../images/shop/shop-header2.png")} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={12}
              sm={12}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>About Us</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionServices />
        </div>
      </div>
      <Footer
        theme="dark"
        content={
          <div>
            <div className={classes.right}>
              Copyright &copy; {1900 + new Date().getYear()}{" "}
              <a
                href="https://www.creative-tim.com?ref=mkpr-e-ecommerce"
                target="_blank"
                className={classes.aClasses}
              >
                DEX
              </a>{" "}
              All Rights Reserved.
            </div>
          </div>
        }
      >
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <h5>About Us</h5>
            <p>
            Dex Group is a small company however we are highly focused on our Quality and Service. {" "}
With our competitive prices, we are the first and only company in the industry that provides China Express services. 
{" "}Dex is the first company in our industry to introduce a 24 hour service. We have 30 people working at our Melbourne premises. If you have any urgent orders and need help, please contact us and we will do our best to support you. 
{" "}
            </p>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <h5>Facebook Feed</h5>
            <div className={classes.socialFeed}>
                </div>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <h5>Instagram Feed</h5>
            
          </GridItem>
        </GridContainer>
      </Footer>
    </div>
  );
}