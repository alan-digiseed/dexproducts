/*eslint-disable*/
import React from "react";
import { graphql, Link } from 'gatsby'
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
import SectionProducts from "../views/CategoryPage/Sections/SectionProducts.js";
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

export default function CategoryPage({ data }) {
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
        image={require("../images/examples/clark-street-merc.jpg")}
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
                <h1 className={classes.title}>Ecommerce Page!</h1>
                <h4>
                  Free global delivery for all products. Use coupon{" "}
                  <b>25summer</b> for an extra 25% Off
                </h4>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionProducts allCategories={data.allCategoriesJson.nodes} category={data.categoriesJson} products={data.allProductsJson.nodes}/>
      </div>
    </div>
    );
}

export const query = graphql`
    query ($slug: String!, $name: String!) {
        allProductsJson(filter: {category1: {eq: $name}}) {
          nodes {
            productCode
            description
            additionalInfo
            category1
            category2
            category3
            images
          }
        }
        categoriesJson(slug: {eq: $slug}) {
            id
            imageUrl
            name
            slug
            title
            subcategories {
                name
                slug
            }
        }
        allCategoriesJson {
            nodes {
                id
                imageUrl
                name
                slug
                title
                subcategories {
                    name
                    slug
                }
            }
        }
      }`;