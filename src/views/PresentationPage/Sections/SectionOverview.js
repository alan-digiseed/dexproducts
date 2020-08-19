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
        className={classes.features6}
        style={{
          backgroundImage: `url(${require("../../../images/features-6.jpg")})`
        }}
      >



        <div className={classes.container}>
          <GridContainer justify="center">
          <GridItem md={6} className={classNames(classes.mlAuto, classes.mrAuto)}>
          <h2 className={classes.title}>Why choose DEX?</h2>
        </GridItem>
           </GridContainer>
        </div>


        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem md={4} className={classes.featuresShow}>
              <InfoArea
                  description={
                  <p>
Dex Group is a small company however we are highly focused on our Quality and Service. 
With our competitive prices, we are the first and only company in the industry that provides China Express services. 

Dex Group provides different level of services, such as 24 hours, 3 working days, 7 working days, 12 working days and the 28 working days China Express service. The prices of these services are online which you can access 7 days a week, 24 hours a day. The prices are very clear and there are no hidden charges which makes it so easy to quote your clients at any time. 
                  </p>
                }
                icon={Grid}
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
