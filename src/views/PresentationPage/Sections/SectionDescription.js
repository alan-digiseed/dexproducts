import React from "react";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

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
              <div>{<img alt="EASY" src={"/img/1.png"} />}</div>
             
              <div style= {{fontSize: '20px', fontWeight: 800}}>
                EASY TO USE WEBSITE
                MAKES IT A BREEZE TO
                QUOTE YOUR CLIENTS
                </div>
            </GridItem>
            <GridItem md={4} sm={4}>
            <div>{<img alt="SPEEDY" src={"/img/2.png"} />}</div>
            <div style= {{fontSize: '20px', fontWeight: 800}}>
               WE OFFER FAST TURN <br/>
               AROUND ON ORDERS
                </div>
            </GridItem>
            <GridItem md={4} sm={4}>
            <div>{<img alt="PERSONALISED" src={"/img/3.png"} />}</div>
            <div style= {{fontSize: '20px', fontWeight: 800}}>
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
