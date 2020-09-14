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

import {getAliasedCategories} from "../../../utils/categoryHelpers";

import styles from "../../../pagestyles/ecommerceSections/categoriesStyle.js";

const useStyles = makeStyles(styles);

const categoryImages = require.context('../../../images/categories', true);
const categoriesImagePath = name => categoryImages(name, true);


export default function SectionCategories(props) {

  const aliasedCategories = getAliasedCategories(props.categories);

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          { aliasedCategories.map( c => {
              return (
                <GridItem md={4} sm={4}>
                <Card product plain>
                  <CardHeader image plain>
                    <a href={`/categories/${c.slug}`}>
                      <img src={categoriesImagePath/(c.imageUrl)} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{ backgroundImage: `url(${c.imageUrl})`, opacity: 1 }}
                    />
                  </CardHeader>
                  <CardBody className={classes.textCenter} plain>
                    <h4 className={classes.cardTitle}>{c.title}</h4>
                  </CardBody>
                </Card>
              </GridItem>);

          }) }
        </GridContainer>
      </div>
    </div>
  );
}
