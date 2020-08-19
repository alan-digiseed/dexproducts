import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Gesture from "@material-ui/icons/Gesture";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";

import servicesStyle from "../../../pagestyles/aboutUsSections/servicesStyle.js";

const useStyles = makeStyles(servicesStyle);

export default function SectionServices() {
  const classes = useStyles();
  return (
    <div className={classes.services}>
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
          <h2 className={classes.title}>WELCOME TO DEX</h2>
          <h5 className={classes.description}>
          Dex is one of the largest promotional product suppliers in the industry with a large selection of Bags, Stress Shapes, Drinkware, Umbrellas, Key rings, Pens & USB’s - including exclusive supply arrangements with a host of Quality European brands. We at Dex also offer the largest range of Stress Shapes available outside the USA, and are able to offer multiple colour prints on stress items in house. 
          
          <br/><br/>The Dex website features all the current products & images in all color variations, line drawings are also available. When you log into the Dex Site you will have the convenience of on-line prices for you to see at a glance so it’s fast & easy for quoting.

<br/><br/>Local Can't find what you are looking for, please do not hesitate to contact us; we are here to assist with all your promotional needs.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
