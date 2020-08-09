import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";
import Button from "../../../components/CustomButtons/Button.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "../../../pageStyles/ecommerceSections/latestOffersStyle.js";

const useStyles = makeStyles(styles);

const SectionProducts = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>{props.section.title}</h2>
        <GridContainer>
          {props.section.contentItems.map( ci => (
            <GridItem md={4} sm={4}>
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
                <CardFooter plain>
                  <div className={classes.priceContainer}>
                    <span className={classNames(classes.price, classes.priceOld)}>
                      {" "}
                      €1,430
                    </span>
                    <span className={classNames(classes.price, classes.priceNew)}>
                      {" "}
                      €743
                    </span>
                  </div>
                  <div className={classNames(classes.stats, classes.mlAuto)}>
                    <Tooltip
                      id="tooltip-top"
                      title="Saved to Wishlist"
                      placement="top"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button justIcon simple color="rose">
                        <Favorite />
                      </Button>
                    </Tooltip>
                  </div>
                </CardFooter>
              </Card>
            </GridItem>))}
        </GridContainer>
      </div>
    </div>
  );
  return (<h1>sdfjsdlkjf</h1>)
}

export default SectionProducts;