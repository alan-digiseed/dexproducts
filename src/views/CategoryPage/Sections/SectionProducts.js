import React from "react";
import {Link} from "gatsby";
// nodejs library that concatenates classes
import classNames from "classnames";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui icons
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Cached from "@material-ui/icons/Cached";
import Subject from "@material-ui/icons/Subject";
import Check from "@material-ui/icons/Check";
// core components
import Accordion from "../../../components/Accordion/Accordion.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";
import Button from "../../../components/CustomButtons/Button.js";
import Clearfix from "../../../components/Clearfix/Clearfix.js";

import suit1 from "../../../images/examples/suit-1.jpg";
import suit2 from "../../../images/examples/suit-2.jpg";
import suit3 from "../../../images/examples/suit-3.jpg";
import suit4 from "../../../images/examples/suit-4.jpg";
import suit5 from "../../../images/examples/suit-5.jpg";
import suit6 from "../../../images/examples/suit-6.jpg";
import color1 from "../../../images/examples/color1.jpg";
import color3 from "../../../images/examples/color3.jpg";
import color2 from "../../../images/examples/color2.jpg";
import dg3 from "../../../images/dg3.jpg";
import dg1 from "../../../images/dg1.jpg";

import styles from "../../../pagestyles/productStyle.js";

const useStyles = makeStyles(styles);

export default function SectionProducts(props) {
  const classes = useStyles();


  var categoriesCollapses = props.allCategories.map( c=> {
    return {
        title: c.title,
        content: (
            <div className={classes.customExpandPanel}>
                {c.subcategories.map( sc => (
                    <span><Link to={`/subcategory/${sc.slug}`}>{sc.name}</Link></span>
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
              <GridItem md={4} sm={4}>
                <Card plain product>
                  <CardHeader noShadow image>
                    <a href="#pablo">
                      <img src={suit1} alt=".." />
                    </a>
                  </CardHeader>
                  <CardBody plain>
                    <a href="#pablo">
                      <h4 className={classes.cardTitle}>Polo Ralph Lauren</h4>
                    </a>
                    <p className={classes.description}>
                      Impeccably tailored in Italy from lightweight navy wool.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentBetween}>
                    <div className={classes.priceContainer}>
                      <span className={classes.price}> €800</span>
                    </div>
                    <Tooltip
                      id="tooltip-top"
                      title="Saved to Wishlist"
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        justIcon
                        simple
                        color="rose"
                        className={classes.pullRight}
                      >
                        <Favorite />
                      </Button>
                    </Tooltip>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem md={4} sm={4}>
                <Card plain product>
                  <CardHeader noShadow image>
                    <a href="#pablo">
                      <img src={suit2} alt=".." />
                    </a>
                  </CardHeader>
                  <CardBody plain>
                    <a href="#pablo">
                      <h4 className={classes.cardTitle}>Wooyoungmi</h4>
                    </a>
                    <p className={classes.description}>
                      Dark-grey slub wool, pintucked notch lapels.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentBetween}>
                    <div className={classes.priceContainer}>
                      <span className={classes.price}> €555</span>
                    </div>
                    <Tooltip
                      id="tooltip-top"
                      title="Save to Wishlist"
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        justIcon
                        simple
                        color="rose"
                        className={classes.pullRight}
                      >
                        <FavoriteBorder />
                      </Button>
                    </Tooltip>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem md={4} sm={4}>
                <Card plain product>
                  <CardHeader noShadow image>
                    <a href="#pablo">
                      <img src={suit3} alt=".." />
                    </a>
                  </CardHeader>
                  <CardBody plain>
                    <a href="#pablo">
                      <h4 className={classes.cardTitle}>Tom Ford</h4>
                    </a>
                    <p className={classes.description}>
                      Immaculate tailoring is TOM FORD{"'"}s forte.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentBetween}>
                    <div className={classes.priceContainer}>
                      <span className={classes.price}> €879</span>
                    </div>
                    <Tooltip
                      id="tooltip-top"
                      title="Save to Wishlist"
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        justIcon
                        simple
                        color="rose"
                        className={classes.pullRight}
                      >
                        <FavoriteBorder />
                      </Button>
                    </Tooltip>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem md={4} sm={4}>
                <Card plain product>
                  <CardHeader noShadow image>
                    <a href="#pablo">
                      <img src={suit4} alt=".." />
                    </a>
                  </CardHeader>
                  <CardBody plain>
                    <a href="#pablo">
                      <h4 className={classes.cardTitle}>Thom Sweeney</h4>
                    </a>
                    <p className={classes.description}>
                      It{"'"}s made from lightweight grey wool woven.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentBetween}>
                    <div className={classes.priceContainer}>
                      <span className={classes.price}> €680</span>
                    </div>
                    <Tooltip
                      id="tooltip-top"
                      title="Save to Wishlist"
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        justIcon
                        simple
                        color="rose"
                        className={classes.pullRight}
                      >
                        <FavoriteBorder />
                      </Button>
                    </Tooltip>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem md={4} sm={4}>
                <Card plain product>
                  <CardHeader noShadow image>
                    <a href="#pablo">
                      <img src={suit5} alt=".." />
                    </a>
                  </CardHeader>
                  <CardBody plain>
                    <a href="#pablo">
                      <h4 className={classes.cardTitle}>Kingsman</h4>
                    </a>
                    <p className={classes.description}>
                      Crafted from khaki cotton and fully canvassed.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentBetween}>
                    <div className={classes.priceContainer}>
                      <span className={classes.price}> €725</span>
                    </div>
                    <Tooltip
                      id="tooltip-top"
                      title="Saved to Wishlist"
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        justIcon
                        simple
                        color="rose"
                        className={classes.pullRight}
                      >
                        <Favorite />
                      </Button>
                    </Tooltip>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem md={4} sm={4}>
                <Card plain product>
                  <CardHeader noShadow image>
                    <a href="#pablo">
                      <img src={suit6} alt=".." />
                    </a>
                  </CardHeader>
                  <CardBody plain>
                    <a href="#pablo">
                      <h4 className={classes.cardTitle}>Boglioli</h4>
                    </a>
                    <p className={classes.description}>
                      Masterfully crafted in Northern Italy.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentBetween}>
                    <div className={classes.priceContainer}>
                      <span className={classes.price}> €699</span>
                    </div>
                    <Tooltip
                      id="tooltip-top"
                      title="Save to Wishlist"
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        justIcon
                        simple
                        color="rose"
                        className={classes.pullRight}
                      >
                        <FavoriteBorder />
                      </Button>
                    </Tooltip>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem
                md={3}
                sm={3}
                className={classNames(classes.mlAuto, classes.mrAuto)}
              >
                <Button round color="rose">
                  Load more...
                </Button>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <br />
        <h2>News in fashion</h2>
        <GridContainer>
          <GridItem md={4} sm={4}>
            <Card background style={{ backgroundImage: `url(${color1})` }}>
              <CardBody background>
                <h6
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  Productivity Apps
                </h6>
                <a href="#pablo">
                  <h3 className={classes.cardTitle}>
                    The best trends in fashion 2020
                  </h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button href="#" round color="white">
                  <Subject /> Read
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card background style={{ backgroundImage: `url(${color3})` }}>
              <CardBody background>
                <h6
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  FASHION NEWS
                </h6>
                <a href="#pablo">
                  <h3 className={classes.cardTitle}>
                    Kanye joins the Yeezy team at Adidas
                  </h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button href="#" round color="white">
                  <Subject /> Read
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card background style={{ backgroundImage: `url(${color2})` }}>
              <CardBody background>
                <h6
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  Productivity Apps
                </h6>
                <a href="#pablo">
                  <h3 className={classes.cardTitle}>
                    Learn how to use the new colors of 2020
                  </h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button href="#" round color="white">
                  <Subject /> Read
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={6} sm={6}>
            <Card background style={{ backgroundImage: `url(${dg3})` }}>
              <CardBody background>
                <h6
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  Tutorials
                </h6>
                <a href="#pablo">
                  <h3 className={classes.cardTitle}>Trending colors of 2020</h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button href="#" round color="white">
                  <Subject /> Read
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={6} sm={6}>
            <Card background style={{ backgroundImage: `url(${dg1})` }}>
              <CardBody background>
                <h6
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  Productivity Style
                </h6>
                <a href="#pablo">
                  <h3 className={classes.cardTitle}>Fashion & Style 2020</h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button href="#" round color="white">
                  <Subject /> Read
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
