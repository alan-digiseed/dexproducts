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
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
// core components
import Header from "../components/Header/Header.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Parallax from "../components/Parallax/Parallax.js";
import InfoArea from "../components/InfoArea/InfoArea.js";
import CustomInput from "../components/CustomInput/CustomInput.js";
import Button from "../components/CustomButtons/Button.js";
import Footer from "../components/Footer/Footer.js";
import logo from "../images/logo.png";
import contactUsStyle from "../pagestyles/contactUsStyle.js";

const useStyles = makeStyles(contactUsStyle);

export default function ContactUsPage() {
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
              <h1 className={classes.title}>Contact Us</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.contactContent}>
          <div className={classes.container}>
                        <GridContainer>
              <GridItem md={6} sm={6}>
                <h3>
                  Contact us if you have any questions about DEX or our products  <br />We
                  {"'"}ll get in touch with you as soon as possible.
                  <br />
                  <br />
                </h3>
                <form>
                  <CustomInput
                    labelText="Your Name"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  <CustomInput
                    labelText="Email address"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  <CustomInput
                    labelText="Phone"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  <CustomInput
                    labelText="Your message"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 6
                    }}
                  />
                  <div className={classes.textCenter}>
                    <Button color="primary" round>
                      Contact us
                    </Button>
                  </div>
                </form>
              </GridItem>
              <GridItem md={4} sm={4} className={classes.mlAuto}>
                <InfoArea
                  className={classes.info}
                  title="Find us at the office"
                  description={
                    <p>
                      Dex Group Pty. Ltd., <br /> 171 Hammond Road,{" "} <br /> (Entry through Rodeo Dr){" "}
                      <br /> Dandenong South VIC 3175
                    </p>
                  }
                  icon={PinDrop}
                  iconColor="primary"
                />
                <InfoArea
                  className={classes.info}
                  title="Get in Touch"
                  description={
                    <p>
                     Phone: (03) 9768 3668 <br /> Fax: (03) 9768 3662 <br /> Email: sales@dexgroup.com.au
                    </p>
                  }
                  icon={Phone}
                  iconColor="primary"
                />
              </GridItem>
            </GridContainer>
          </div>
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
