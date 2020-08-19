/*eslint-disable*/
import React from "react";
import { graphql } from 'gatsby'
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import Header from "../components/Header/Header.js";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Parallax from "../components/Parallax/Parallax.js";
import Button from "../components/CustomButtons/Button.js";
import Card from "../components/Card/Card.js";
import CardBody from "../components/Card/CardBody.js";
import CustomInput from "../components/CustomInput/CustomInput.js";
import Footer from "../components/Footer/Footer.js";
// sections for this page
import HeaderLinks from "../components/Header/HeaderLinks.js";
import SectionCategories from "../views/ShopPage/Sections/SectionCategories.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui icons
import Mail from "@material-ui/icons/Mail";

import ecommerceHeader from "../images/examples/ecommerce-header.jpg";
import face1 from "../images/faces/card-profile6-square.jpg";
import face2 from "../images/faces/christian.jpg";
import face3 from "../images/faces/card-profile4-square.jpg";
import face4 from "../images/faces/card-profile1-square.jpg";
import face5 from "../images/faces/marc.jpg";
import face6 from "../images/faces/kendall.jpg";
import face7 from "../images/faces/card-profile5-square.jpg";
import face8 from "../images/faces/card-profile2-square.jpg";
import logo from "../images/logo.png";

import styles from "../pagestyles/ecommerceStyle.js";

const useStyles = makeStyles(styles);

export default function EcommercePage({data}) {
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
      <Parallax
        image={require("../images/shop/shop-header2.png")}
        filter="dark"
        small
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <div className={classes.brand}>
                <h1 className={classes.title}>ONLINE STORE</h1>
                <h4>
                  Choose your products, your customisation and your delivery times to get a custom quote{" "}
                </h4>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionCategories categories={data.allCategoriesJson.nodes}/>
      </div>
      <div
        className={classNames(
          classes.subscribeLine,
          classes.subscribeLineImage
        )}
        style={{ backgroundImage: `url(${ecommerceHeader})` }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={classNames(classes.mlAuto, classes.mrAuto)}
            >
              <div className={classes.textCenter}>
                <h3 className={classes.title}>Subscribe to our Newsletter</h3>
                <p className={classes.description}>
                  Join our newsletter and get news in your inbox every week! We
                  hate spam too, so no worries about this.
                </p>
              </div>
              <Card raised className={classes.card}>
                <CardBody className={classes.cardBody}>
                  <form>
                    <GridContainer>
                      <GridItem xs={12} sm={6} md={6} lg={8}>
                        <CustomInput
                          id="emailPreFooter"
                          formControlProps={{
                            fullWidth: true,
                            className: classes.cardForm
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Mail />
                              </InputAdornment>
                            ),
                            placeholder: "Your Email..."
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6} lg={4}>
                        <Button
                          color="danger"
                          block
                          className={classes.subscribeButton}
                        >
                          subscribe
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </form>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
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

export const pageQuery = graphql`
query MyQuery {
    allCategoriesJson {
      nodes {
        title
        alias
        slug
        imageUrl
        name
        subcategories {
          name
          slug
        }
        slug
      }
    }
  }`;
  