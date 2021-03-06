import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import Button from "../../../components/CustomButtons/Button.js";

import cardsStyle from "../../../pagestyles/presentationSections/cardsStyle.js";

const useStyles = makeStyles(cardsStyle);

const SectionCards = (props) => {
  const classes = useStyles();
  console.log(JSON.stringify(props));

  return (
    <div className={classNames(classes.section)}>
        <GridContainer justify="center">
          {props.section.contentItems.map( ci => {
            return (
              <GridItem xs={12} sm={4} md={4}>
                <Card
                  raised
                  background
                  style={{ backgroundImage: `url(${ci.image})` }}
                >
                  <CardBody background>
                     {ci.subtitle && 
                      <a href={ci.callToActionUrl} onClick={e => e.preventDefault()}>

                      </a>}
                    {ci.description &&
                      <p>
                      {ci.description}
                      </p>}
                    {ci.callToAction &&
                        <Button href={ci.callToActionUrl} color="black">
                           <h3 className={classes.cardCategory}>{ci.title}</h3>
                           </Button>}
                  </CardBody>
                </Card>
              </GridItem>		
            );
          })
        } 
        </GridContainer>
    </div>
  );
}

export default SectionCards;