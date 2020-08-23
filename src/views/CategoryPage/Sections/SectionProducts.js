import React from "react";
import { Link } from "gatsby";
// nodejs library that concatenates classes
//import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Accordion from "../../../components/Accordion/Accordion.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import CardBody from "../../../components/Card/CardBody.js";

import styles from "../../../pagestyles/productStyle.js";

const productImages = require.context('../../../images/products', true);
const productsImagePath = name => {
  try {
    return productImages(`./${name}`, true);
  }
  catch {
    return productImages('./place-holder.jpg', true);
  }
}

const useStyles = makeStyles(styles);

export default function SectionProducts(props) {
  const classes = useStyles();


  var categoriesCollapses = props.allCategories.map(c => {
    return {
      title: c.title,
      content: (
        <div className={classes.customExpandPanel}>
          {c.subcategories.map(sc => (
            <div>
              <span><Link to={`/subcategory/${sc.slug}`}>{sc.name}</Link></span>
            </div>
          ))}
        </div>
      )
    };
  });

  var selectedCategoryIndex = props.allCategories.map(c => c.slug).indexOf(props.category.slug);

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>Find what you need</h2>
        <GridContainer>
          <GridItem md={4} sm={4}>
            <Card plain>
              <CardBody className={classes.cardBodyRefine}>
                <Accordion
                  active={[selectedCategoryIndex]}
                  activeColor="rose"
                  collapses={categoriesCollapses}
                />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={8} sm={8}>
            <GridContainer>
              {props.products.map(p => {                
                return (
                <GridItem md={4} sm={4}>
                  <Card plain product>
                    <CardHeader noShadow image>
                      <a href={`/products/${p.productCode}`}>
                        <img src={productsImagePath(`${p.images[0]}`)} alt=".." />
                      </a>
                    </CardHeader>
                    <CardBody plain>
                      <a href={`/products/${p.productCode}`}>
                        <h4 className={classes.cardTitle}>{p.productCode} - {p.name}</h4>
                      </a>
                    </CardBody>
                  </Card>
                </GridItem>)
              })}
            </GridContainer>
          </GridItem>
        </GridContainer>

      </div>
    </div>
  );
}
