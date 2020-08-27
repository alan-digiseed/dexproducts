import React from "react";
// nodejs library that concatenates classes
//import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import ProductList from "./ProductList.js";
import CategoryAccordion from "./CategoryAccordion.js";

import styles from "../../../pagestyles/productStyle.js";

const useStyles = makeStyles(styles);

export default function SectionProducts(props) {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>Find what you need</h2>
        <GridContainer>
          <GridItem md={4} sm={4}>
            <CategoryAccordion category={props.category} subCategory={props.subCategory} allCategories={props.allCategories} />
          </GridItem>
          <GridItem md={8} sm={8}>
            <ProductList products={props.products} />
          </GridItem>
        </GridContainer>

      </div>
    </div>
  );
}
