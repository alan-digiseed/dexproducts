import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";
import Card from "../../../components/Card/Card.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import CardBody from "../../../components/Card/CardBody.js";
// @material-ui icons
import Grid from "@material-ui/icons/GridOn";
import PhoneLink from "@material-ui/icons/Phonelink";
import AccessTime from "@material-ui/icons/AccessTime";
import AttachMoney from "@material-ui/icons/AttachMoney";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// images
import Vodafone from "../../../images/ourClients/vodafone.jpg";
import Microsoft from "../../../images/ourClients/microsoft.jpg";
import Harvard from "../../../images/ourClients/harvard.jpg";
import Standford from "../../../images/ourClients/stanford.jpg";
import profilePic1 from "../../../images/test1.jpg";
import profilePic2 from "../../../images/test2.jpg";
import profilePic3 from "../../../images/test3.jpg";

import overviewStyle from "../../../pagestyles/presentationSections/overviewStyle.js";

const useStyles = makeStyles(overviewStyle);

export default function SectionOverview() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div
        className={classes.features5}
        style={{
          backgroundImage: `url(${require("../../../images/features-5.jpg")})`
        }}
      >
        <GridItem md={4} className={classNames(classes.mlAuto, classes.mrAuto)}>
          <h2 className={classes.title}>Your work will get much easier</h2>
        </GridItem>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem sm={6} className={classes.featuresShow}>
              <InfoArea
                title="Material UI Grid"
                description={
                  <p>
                    Enjoy the fluid grid system based on 12 columns. Material
                    Kit PRO is built over Bootstrap and has all the benefits
                    that the framework comes with.
                  </p>
                }
                icon={Grid}
                iconColor="gray"
                vertical={true}
              />
            </GridItem>
            <GridItem sm={6} className={classes.featuresShow}>
              <InfoArea
                title="Fully Responsive"
                description={
                  <p>
                    This Material UI kit is built mobile-first and looks amazing
                    on any device. Regardless of the screen size, the website
                    content will naturally fit the given resolution.
                  </p>
                }
                icon={PhoneLink}
                iconColor="gray"
                vertical={true}
              />
            </GridItem>
           </GridContainer>
        </div>
      </div>
    </div>
  );
}
