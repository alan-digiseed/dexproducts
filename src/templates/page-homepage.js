/*eslint-disable*/
import React from "react";
import { graphql } from "gatsby";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Header from "../components/Header/Header.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import Parallax from "../components/Parallax/Parallax.js";
import Footer from "../components/Footer/Footer.js";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Button from "../components/CustomButtons/Button.js";
// sections for this page
import SectionCarousel from "../views/PresentationPage/Sections/SectionCarousel.js";
import SectionDescription from "../views/PresentationPage/Sections/SectionDescription.js";
import SectionCards from "../views/PresentationPage/Sections/SectionCards.js";
import SectionProducts from "../views/PresentationPage/Sections/SectionProducts.js";
import SectionOverview from "../views/PresentationPage/Sections/SectionOverview.js";

import logo from "../images/logo.png";

import presentationStyle from "../pagestyles/presentationStyle.js";

import "../assets/scss/material-kit-pro-react.scss?v=1.9.0";


const useStyles = makeStyles(presentationStyle);

export default function PresentationPage({data}) {

  const page = data.pagesJson;
  console.log(JSON.stringify(page));

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
      {(page.sections.some(s => s.title === 'homepage_slider_top') >= 0) &&<div className={classes.carousel}><SectionCarousel section={page.sections.find(s => s.title === 'homepage_slider_top')} /></div>}
        {(page.sections.some(s => s.id === 'homepage_3boxes') >= 0) &&<SectionCards section={page.sections.find(s => s.id === 'homepage_3boxes')} />}
        {(page.sections.some(s => s.id === 'homepage_best_sellers') >= 0) &&<SectionProducts section={page.sections.find(s => s.id === 'homepage_best_sellers')} />}
      <SectionOverview />
      <SectionDescription />
   
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

export const query = graphql`
   query {
      pagesJson(fields: { slug: { eq: "/" } }) {
        title
        sections {
          id
          title
          contentItems {
            image
            subtitle
            title
            callToAction
            callToActionUrl
          }
        }
      }
    }
`