/*eslint-disable*/
import  React, { useEffect} from "react";
import { connect } from 'react-redux';
import { graphql } from "gatsby";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// @material-ui/icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import LocalShipping from "@material-ui/icons/LocalShipping";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Favorite from "@material-ui/icons/Favorite";

// core components
import Header from "../components/Header/Header.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import Parallax from "../components/Parallax/Parallax.js";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Footer from "../components/Footer/Footer.js";
import Button from "../components/CustomButtons/Button.js";
import Accordion from "../components/Accordion/Accordion.js";
import InfoArea from "../components/InfoArea/InfoArea.js";
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardBody from "../components/Card/CardBody.js";
import CardFooter from "../components/Card/CardFooter.js";
import Tooltip from "@material-ui/core/Tooltip";
import TabPanel from "../components/TabPanel/TabPanel.js";

import logo from "../images/logo.png";

import productStyle from "../pagestyles/productStyle.js";

// images
import cardProduct1 from "../images/examples/card-product1.jpg";
import cardProduct3 from "../images/examples/card-product3.jpg";
import cardProduct4 from "../images/examples/card-product4.jpg";
import cardProduct2 from "../images/examples/card-product2.jpg";
import product1 from "../images/examples/product1.jpg";
import product2 from "../images/examples/product2.jpg";
import product3 from "../images/examples/product3.jpg";
import product4 from "../images/examples/product4.jpg";

// pricing calculator
import { Provider } from 'react-redux';
import PricingCalculator from '../../dex-pricing-calculator/container/PricingCalculator/PricingCalculator';
import mapToPricingCalculatorProduct from "../utils/PricingCalculatorProductMapper";

const useStyles = makeStyles(productStyle);

const productImages = require.context('../images/products', true);
const productsImagePath = name => {
    try {
        return productImages(`./${name}`, true);
    }
    catch {
        return productImages('./place-holder.jpg', true);
    }
}

function ProductPage({ data, ...props }) {

    const [selectedTab, setSelectedTab] = React.useState(0);
    const product = data.productsJson;
    useEffect(() => {
        props.setProduct(mapToPricingCalculatorProduct(product))
    })
    
    let pageSections = [];

    pageSections.push({
        index: 2,
        title: "Pricing Calculator",
        content: (
            <PricingCalculator></PricingCalculator>
        )
    });

    pageSections.push({
        index: 0,
        title: "Description",
        content: (
            <p>
                {product.description}
            </p>
        )
    });


    let itemSizes = product.parts.map(p => {
        let dimensions = []
        if (p.length) dimensions.push(`${p.length} mm`);
        if (p.height) dimensions.push(`${p.height} mm`);
        if (p.width) dimensions.push(`${p.width} mm`);

        if (dimensions.length == 0)
            return null;

        if (p.partName && p.partName !== '')
            return `${p.partName}: ${dimensions.join(' x ')}`;
        else
            return `${dimensions.join(' x ')}`;
    }).filter(pis => pis);

    let colors = product.parts.map(p => {
        if (p.colours.length === 0)
            return null;

        if (p.partName && p.partName !== '')
            return `${p.partName}: ${p.colours.join(', ')}`;
        else
            return `${p.colours.join(', ')}`;
    }).filter(pc => pc);

    let printOptions = product.printOptions.filter(po => po.printType && po.printType !== '');

    const cartonSize = (packing) => {
        let dimensions = new Array();
        if (packing.cartonLength) dimensions.push(packing.cartonLength);
        if (packing.cartonHeight) dimensions.push(packing.cartonHeight);
        if (packing.cartonWidth) dimensions.push(packing.cartonWidth);

        return (dimensions.join("*"));
    }

    pageSections.push({
        title: "Additional Information",
        index: 1,
        content: (
            <div>
                {product.additionalInfo && <p>
                    {product.additionalInfo}
                </p>}
                {(itemSizes.length > 0) && <p><strong>Item Size: </strong>{itemSizes.join('; ')}</p>}
                {(colors.length > 0) && <p><strong>Color Range: </strong>{colors.join('; ')}</p>}
                {(product.packing.description && product.packing.description !== '') && <p><strong>Package: </strong>{product.packing.description}</p>}
                {(printOptions.length > 0) && <p><strong>Branding Options</strong><br />{printOptions.map(po => (<span key={po.printType}><strong>{po.printType}</strong> {po.description}<br /></span>))}</p>}
                <p><strong>Qty per box: {product.packing.cartonQuantity}</strong><br /><strong>Packaging size (cm):</strong> {cartonSize(product.packing)}<br /><strong>Packaging weight (kg):</strong> {product.packing.cartonWeight}</p>
            </div>
        )
    });

    const classes = useStyles();
    const images = product.images.map(i => {
        return {
            original: productsImagePath(i),
            thumbnail: productsImagePath(i)
        }
    })

    const handleChangeTab = (event, newValue) => {
        setSelectedTab(newValue);
    }

    return (
        <div className={classes.productPage}>
            <Header
                brand={<img src={logo} />}
                links={<HeaderLinks dropdownHoverColor="info" />}
                fixed
                color="white"
            />
            <Parallax image={require("../images/shop/shop-header2.png")} filter="dark" small>
                <div className={classes.containerFluid}>
                </div>
            </Parallax>
            <div className={classNames(classes.section, classes.sectionGray)}>
                <div className={classes.containeFluid}>
                    <div className={classNames(classes.main, classes.mainRaised)}>
                        <GridContainer>
                            <GridItem md={6} sm={6}>
                                <ImageGallery
                                    showFullscreenButton={false}
                                    showPlayButton={false}
                                    startIndex={3}
                                    items={images}
                                    showThumbnails={true}
                                    renderLeftNav={(onClick, disabled) => {
                                        return (
                                            <button
                                                className='image-gallery-left-nav'
                                                disabled={disabled}
                                                onClick={onClick}
                                            />
                                        );
                                    }}
                                    renderRightNav={(onClick, disabled) => {
                                        return (
                                            <button
                                                className='image-gallery-right-nav'
                                                disabled={disabled}
                                                onClick={onClick}
                                            />
                                        );
                                    }}
                                />
                            </GridItem>
                            <GridItem md={6} sm={6}>
                                <h2 className={classes.title}>{product.name}</h2>
                                <Tabs
                                    value={selectedTab}
                                    onChange={handleChangeTab}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    centered
                                >
                                    <Tab label="Description" />
                                    <Tab label="Additional Information" />
                                    <Tab label="Pricing Calculator" />
                                </Tabs>
                                {pageSections.map(ps => (
                                    <TabPanel value={selectedTab} index={ps.index} >
                                        {ps.content}
                                    </TabPanel>

                                ))}

                                {/* <Accordion
                                    active={0}
                                    activeColor="danger"
                                    collapses={pageSections}
                                /> */}
                            </GridItem>
                        </GridContainer>
                    </div>
                    <div className={classNames(classes.features, classes.textCenter)}>
                        <GridContainer>
                            <GridItem md={4} sm={4}>
                                <InfoArea
                                    title="2 Days Delivery"
                                    description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                                    icon={LocalShipping}
                                    iconColor="info"
                                    vertical
                                />
                            </GridItem>
                            <GridItem md={4} sm={4}>
                                <InfoArea
                                    title="Refundable Policy"
                                    description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                                    icon={VerifiedUser}
                                    iconColor="success"
                                    vertical
                                />
                            </GridItem>
                            <GridItem md={4} sm={4}>
                                <InfoArea
                                    title="Popular Item"
                                    description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                                    icon={Favorite}
                                    iconColor="rose"
                                    vertical
                                />
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}
export const query = graphql`
query ($id : String!) {
    productsJson(id: {eq: $id}) {
      name
      description
      additionalInfo
      id
      productCode
      images
      parts {
        colours
        partName
        height
        width
        length
      }
      packing {
        description
        cartonHeight
        cartonLength
        cartonQuantity
        cartonWeight
        cartonWidth        
      }
      printOptions {
        description
        printType
      }
      priceLists {
        blanks {
          type
          description
          prices {
            qty
            unitPrice
          }
        }
        services {
          Setup
          days
          maxOrderQty
          minOrderQty
          priceListType
          serviceType
          unitPrice
        }
      }
    }
  }`;

  const mapDispatchToProps = dispatch => {
    return {
      setProduct: (product) => {
        dispatch({ type: 'SET_PRODUCT', payload: {product: product} })
      }      
    }
  }
    
  export default connect(null, mapDispatchToProps)(ProductPage);