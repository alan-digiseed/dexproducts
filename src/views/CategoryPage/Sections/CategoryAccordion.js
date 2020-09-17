import React from "react";
import { Link } from "gatsby";
// nodejs library that concatenates classes
//import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Accordion from "../../../components/Accordion/Accordion.js";

import styles from "../../../pagestyles/productStyle.js";

const useStyles = makeStyles(styles);

export default function CategoryAccordion(props) {
    const classes = useStyles();

    var categoriesCollapses =   props.allCategories
                                .filter(c => c.subcategories != null)
                                .map(c => {
        return {
            title: c.title,
            content: (
                <div className={classes.customExpandPanel}>
                    {c.subcategories.map(sc => (
                        <div>
                            <div>
                                <span><Link className={props.subcategorySlug === sc.slug ? classes.primaryAccordionSummaryExpaned : null} to={`/category/${c.slug}/${sc.slug}`}>{sc.name}</Link></span>
                            </div>
                            {
                                    (sc.subcategories != null) && sc.subcategories.map( subsub =>
                                    (
                                        <div>
                                            <span><Link className={props.subcategorySlug === subsub.slug ? classes.primaryAccordionSummaryExpaned : null} to={`/category/${c.slug}/${sc.slug}/${subsub.slug}`}>{subsub.name}</Link></span>                                    
                                        </div>     
    
                                    )
                                )
                            }
                        </div>
                    ))}
                </div>
            )
        };
    });


    let selectedCategoryIndex = props.allCategories.filter(c => c.subcategories != null).map(c => c.slug).indexOf(props.category.slug);
        
    return (
        <Accordion
            active={[selectedCategoryIndex]}
            activeColor="rose"
            collapses={categoriesCollapses}
        />
    );
}
