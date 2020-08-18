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
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "info"
        }}
      />
      <Parallax image={require("../images/shop/shop-header2.png")} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>About Us</h1>
              <h4>
                Meet the amazing team behind this project and find out more
                about how we work.
              </h4>
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
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=mkpr-about-us"
                    className={classes.block}
                    target="_blank"
                  >
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=mkpr-about-us"
                    className={classes.block}
                    target="_blank"
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="//blog.creative-tim.com/"
                    className={classes.block}
                    target="_blank"
                  >
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=mkpr-about-us"
                    className={classes.block}
                    target="_blank"
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href="https://www.creative-tim.com?ref=mkpr-about-us"
                target="_blank"
              >
                Creative Tim
              </a>{" "}
              for a better web.
            </div>
          </div>
        }
      />
    </div>
  );
}


//       <h1>WELCOME TO DEX COLLECTIONS</h1>
//     <p>Dex Group is a small company however we are highly focused on our Quality and Service. 
// With our competitive prices, we are the first and only company in the industry that provides China Express services. 

// Dex Group provides different level of services, such as 24 hours, 3 working days, 7 working days, 12 working days and the 28 working days China Express service. The prices of these services are online which you can access 7 days a week, 24 hours a day. The prices are very clear and there are no hidden charges which makes it so easy to quote your clients at any time. 

// Dex is the first company in our industry to introduce a 24 hour service. We have 30 people working at our Melbourne premises. If you have any urgent orders and need help, please contact us and we will do our best to support you. 
// </p>
//       </div>)}  
