import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import './UtilityMenu.css';

const UtilityMenu = (props) => {
    return (
        <StaticQuery
        query={graphql`
          query HeadingQuery {
            allCategoriesJson {
                nodes {
                  id
                  imageUrl
                  name
                  slug
                  title
                  subcategories {
                    name
                    slug
                  }
                }
            }
          }
        `}
        render={data => (
            <ul class="nav">              
                { 
                    data.allCategoriesJson.nodes.map(cat => {
                        return (
                            <li>
                                <a href={`/categories/${cat.slug}`}>{cat.title}</a>
                                <div class="nav-column">
                                    <ul>
                                        {
                                            cat.subcategories.map( subcat => {
                                                return (
                                                <li><a href={`/subcategory/${subcat.slug}`}>{subcat.name}</a></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </li>
                        )
                    })
                }
                {/* <li>
                    <a href="#">What's new</a>
                    <div>
                        <div class="nav-column">
                            <h3>Home</h3>
                            <ul>
                                <li><a href="#">Pampers Diapers</a></li>
                                <li><a href="#">Huggies Diapers</a></li>
                                <li><a href="#">Seventh Generation</a></li>
                                <li><a href="#">Diapers</a></li>
                                <li><a href="#">Derbies</a></li>
                                <li><a href="#">Driving shoes</a></li>
                                <li><a href="#">Espadrilles</a></li>
                                <li><a href="#">Loafers</a></li>
                            </ul>
                        </div>
            
                        <div class="nav-column">
                            <h3>Home</h3>
                            <ul>
                                <li><a href="#">Driving shoes</a></li>
                                <li><a href="#">Espadrilles</a></li>
                                <li><a href="#">Loafers</a></li>
                            </ul>
            
                            <h3>Home</h3>
                            <ul>
                                <li><a href="#">Driving shoes</a></li>
                                <li><a href="#">Espadrilles</a></li>
                                <li><a href="#">Loafers</a></li>
                            </ul>
                        </div>
            
                        <div class="nav-column">
                            <h3>Home</h3>
                            <ul>
                                <li><a href="#">Pampers Diapers</a></li>
                                <li><a href="#">Huggies Diapers</a></li>
                                <li><a href="#">Seventh Generation</a></li>
                                <li><a href="#">Diapers</a></li>
                                <li><a href="#">Derbies</a></li>
                                <li><a href="#">Driving shoes</a></li>
                                <li><a href="#">Espadrilles</a></li>
                                <li><a href="#">Loafers</a></li>
                            </ul>
                        </div>
            
                        <div class="nav-column">
                            <h3 class="orange">Related Categories</h3>
                            <ul>
                                <li><a href="#">Pampers Diapers</a></li>
                                <li><a href="#">Huggies Diapers</a></li>
                                <li><a href="#">Diapers</a></li>
                            </ul>
            
                            <h3 class="orange">Brands</h3>
                            <ul>
                                <li><a href="#">Driving shoes</a></li>
                                <li><a href="#">Espadrilles</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li><a href="#">Top rated</a></li>
                <li>
                    <a href="#">Earnings</a>
                    <div>
                        <div class="nav-column">
                            <h3 class="orange">Related Categories</h3>
                            <ul>
                                <li><a href="#">Pampers Diapers</a></li>
                                <li><a href="#">Huggies Diapers</a></li>
                                <li><a href="#">Diapers</a></li>
                            </ul>
            
                            <h3 class="orange">Brands</h3>
                            <ul>
                                <li><a href="#">Driving shoes</a></li>
                                <li><a href="#">Espadrilles</a></li>
                            </ul>
                        </div>
            
                        <div class="nav-column">
                            <h3>Home</h3>
                            <ul>
                                <li><a href="#">Pampers Diapers</a></li>
                                <li><a href="#">Huggies Diapers</a></li>
                                <li><a href="#">Seventh Generation</a></li>
                                <li><a href="#">Diapers</a></li>
                                <li><a href="#">Derbies</a></li>
                                <li><a href="#">Driving shoes</a></li>
                                <li><a href="#">Espadrilles</a></li>
                                <li><a href="#">Loafers</a></li>
                            </ul>
                        </div>
            
                        <div class="nav-column">
                            <h3>Home</h3>
                            <ul>
                                <li><a href="#">Driving shoes</a></li>
                                <li><a href="#">Espadrilles</a></li>
                                <li><a href="#">Loafers</a></li>
                            </ul>
            
                            <h3>Home</h3>
                            <ul>
                                <li><a href="#">Driving shoes</a></li>
                                <li><a href="#">Espadrilles</a></li>
                                <li><a href="#">Loafers</a></li>
                            </ul>
                        </div>
            
                        <div class="nav-column">
                            <h3>Home</h3>
                            <ul>
                                <li><a href="#">Pampers Diapers</a></li>
                                <li><a href="#">Huggies Diapers</a></li>
                                <li><a href="#">Seventh Generation</a></li>
                                <li><a href="#">Diapers</a></li>
                                <li><a href="#">Derbies</a></li>
                                <li><a href="#">Driving shoes</a></li>
                                <li><a href="#">Espadrilles</a></li>
                                <li><a href="#">Loafers</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li><a href="#">Rings</a></li>
                <li><a href="#">Bracelets</a></li>
                <li><a href="#">All Categories</a></li>
                <li class="nav-search">
                    <form action="#">
                        <input type="text" placeholder="Search..." />
                        <input type="submit" value="" />
                    </form>
                </li> */}
            </ul>
        )} />
    );
  }


export default UtilityMenu;
