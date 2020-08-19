import React from "react";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";

// @material-ui icons
import Apps from "@material-ui/icons/Apps";
import ViewDay from "@material-ui/icons/ViewDay";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "../../../pagestyles/presentationSections/descriptionStyle.js";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.features}>




          
          <GridContainer>
            <GridItem md={4} sm={4}>
              <div>{<img src={"/img/1.png"} />}</div>
              <div>
                EASY TO USE WEBSITE
                MAKES IT A BREEZE TO
                QUOTE YOUR CLIENTS
                </div>
            </GridItem>
            <GridItem md={4} sm={4}>
            <div>{<img src={"/img/2.png"} />}</div>
              <div>
               WE OFFER FAST TURN <br/>
               AROUND ON ORDERS
                </div>
            </GridItem>
            <GridItem md={4} sm={4}>
            <div>{<img src={"/img/3.png"} />}</div>
              <div>
              MANY DIFFERENT BRANDING<br/>
                SOLUTIONS TO PERSONALISE <br/>
                YOUR PRODUCTS
                </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
