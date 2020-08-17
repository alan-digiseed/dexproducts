import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import CardBody from "../../../components/Card/CardBody.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons

import styles from "../../../pagestyles/ecommerceSections/categoriesStyle.js";

const useStyles = makeStyles(styles);

const categoryImages = require.context('../../../images/categories', true);
const categoriesImagePath = name => categoryImages(name, true);

const camelize = (str) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

export default function SectionCategories(props) {

  const aliasedCategories = [
    ...props.categories.filter(c => c.alias === null),
    ...props.categories.filter(c => c.alias).reduce((accumulator, currentValue) => {
      console.log(accumulator);
       if (!accumulator.find( x => x.name === currentValue.alias)) {
        accumulator = [...accumulator, {name: currentValue.alias, title: currentValue.alias, imageUrl: currentValue.imageUrl, slug: camelize(currentValue.alias) }];
       }
       return accumulator;
      }, new Array() )
  ];

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        {/* <h2>Categories</h2> */}
        <GridContainer>
          { aliasedCategories.map( c => {
              return (
                <GridItem md={4} sm={4}>
                <Card product plain>
                  <CardHeader image plain>
                    <a href={`/categories/${c.name}`}>
                      <img src={categoriesImagePath(c.imageUrl)} alt="..." />
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
