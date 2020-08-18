/*eslint-disable*/
import React from "react";
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

export default function AboutUsPage({data}) {
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
                <h1 className={classes.title}>About Us</h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <h1>WELCOME TO DEX COLLECTIONS</h1>
    <p>Dex Group is a small company however we are highly focused on our Quality and Service. 
With our competitive prices, we are the first and only company in the industry that provides China Express services. 

Dex Group provides different level of services, such as 24 hours, 3 working days, 7 working days, 12 working days and the 28 working days China Express service. The prices of these services are online which you can access 7 days a week, 24 hours a day. The prices are very clear and there are no hidden charges which makes it so easy to quote your clients at any time. 

Dex is the first company in our industry to introduce a 24 hour service. We have 30 people working at our Melbourne premises. If you have any urgent orders and need help, please contact us and we will do our best to support you. 
</p>
      </div>)}  
