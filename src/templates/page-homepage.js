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
// import Parallax from "../components/Parallax/Parallax.js";
import Footer from "../components/Footer/Footer.js";
// import GridContainer from "../components/Grid/GridContainer.js";
// import GridItem from "../components/Grid/GridItem.js";
import Button from "../components/CustomButtons/Button.js";
// sections for this page
import SectionCarousel from "../views/PresentationPage/Sections/SectionCarousel.js";
import SectionDescription from "../views/PresentationPage/Sections/SectionDescription.js";
import SectionComponents from "../views/PresentationPage/Sections/SectionComponents.js";
import SectionCards from "../views/PresentationPage/Sections/SectionCards.js";
import SectionContent from "../views/PresentationPage/Sections/SectionContent.js";
import SectionSections from "../views/PresentationPage/Sections/SectionSections.js";
import SectionExamples from "../views/PresentationPage/Sections/SectionExamples.js";
import SectionFreeDemo from "../views/PresentationPage/Sections/SectionFreeDemo.js";
import SectionOverview from "../views/PresentationPage/Sections/SectionOverview.js";
import SectionPricing from "../views/PresentationPage/Sections/SectionPricing.js";

import logo from "../images/logo.png";

import presentationStyle from "../pagestyles/presentationStyle.js";

import "../assets/scss/material-kit-pro-react.scss?v=1.9.0";


const useStyles = makeStyles(presentationStyle);

export default function PresentationPage({data}) {

  const page = data.markdownRemark;

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
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "info"
        }}
      />

        <h1>{page.frontmatter.title}</h1>

      {/* <Parallax
        image={require("../images/bg4.jpg")}
        className={classes.parallax}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1>
                  Material Kit React
                  <span className={classes.proBadge}>PRO</span>
                </h1>
                <h3 className={classes.title}>
                  A Badass Material-UI Kit based on Material Design.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax> */}
      <div className={classNames(classes.main, classes.mainRaised)}>
        {/* page.frontmatter.sections. */}
        <SectionCarousel />
        <SectionDescription />
        <SectionComponents />
        <SectionCards />
        <SectionContent />
        <SectionSections />
        <SectionExamples />
        <SectionFreeDemo />
        <SectionOverview />
      </div>
      <SectionPricing />
      <Footer
        theme="white"
        content={
          <div>
            <div className={classes.left}>
              <a
                href="https://www.creative-tim.com/product/material-kit-pro-react?ref=mkpr-presentation"
                target="_blank"
                className={classes.footerBrand}
              >
                Material Kit PRO React
              </a>
            </div>
            <div className={classes.pullCenter}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=mkpr-presentation"
                    target="_blank"
                    className={classes.block}
                  >
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=mkpr-presentation"
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="//blog.creative-tim.com/" className={classes.block}>
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=mkpr-presentation"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.rightLinks}>
              <ul>
                <li>
                  <Button
                    href="https://twitter.com/CreativeTim?ref=creativetim"
                    target="_blank"
                    color="twitter"
                    justIcon
                    simple
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                </li>
                <li>
                  <Button
                    href="https://dribbble.com/creativetim?ref=creativetim"
                    target="_blank"
                    color="dribbble"
                    justIcon
                    simple
                  >
                    <i className="fab fa-dribbble" />
                  </Button>
                </li>
                <li>
                  <Button
                    href="https://instagram.com/CreativeTimOfficial?ref=creativetim"
                    target="_blank"
                    color="instagram"
                    justIcon
                    simple
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        }
      />
    </div>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`