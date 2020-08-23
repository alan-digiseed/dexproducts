import React from "react";
// nodejs library that concatenates classes
//import classNames from "classnames";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import CardBody from "../../../components/Card/CardBody.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons

import styles from "../../../pageStyles/ecommerceSections/latestOffersStyle.js";

const useStyles = makeStyles(styles);

const SectionProducts = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.title}>{props.section.title}</h2>
        <GridContainer>
          {props.section.contentItems.map( ci => (
            <GridItem md={3} sm={3}>
              <Card product plain>
                <CardHeader image plain>
                  <a href={ci.callToActionUrl}>
                    <img src={ci.image} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{ backgroundImage: `url(${ci.image})`, opacity: 1 }}
                  />
                </CardHeader>
                <CardBody className={classes.textCenter} plain>
                  <h4 className={classes.cardTitle}>{ci.title}</h4>
                  <p className={classes.cardDescription}>
                    {ci.description}
                  </p>
                </CardBody>
              </Card>
            </GridItem>))}
        </GridContainer>
      </div>
    </div>
  );
}

export default SectionProducts;