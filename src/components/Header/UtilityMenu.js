import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import './UtilityMenu.css';

const UtilityMenu = (props) => {
    return (
        <div className="navbar">
        <div class="dropdown">
            <button class="dropbtn">Pens
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
            <div class="row">
                <div class="column">
                <h3>Pens Made In China</h3>
                <a href="#">Plastic Pens</a>
                <a href="#">Metal Pens</a>
                <a href="#">Touch Stylus Pens</a>
                </div>
                <div class="column">
                <h3>Pens Germany KLIO</h3>
                <a href="#">Local Stock</a>
                <a href="#">Off Shore Indent</a>
                </div>
                <div class="column">
                <h3>Pens Italian Maxema</h3>
                <a href="#">Local Stock</a>
                <a href="#">Off Shore Indent</a>
                </div>
                <div class="column">
                <h3>Pens Italian ERGA</h3>
                <a href="#">Erga Plastic Pens</a>
                <a href="#">Erga Metal Pens</a>
                </div>
            </div>
            </div>
        </div>
        <div class="dropdown">
            
            <button class="dropbtn">Bags
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
            <div class="column">
                <a href="/categories/bags">All Bags</a>
                <a href="#">Non-Woven Bags</a>
                <a href="#">Paper Bags</a>
                </div>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Keyrings
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
            <div class="column">
                <a href="/categories/key-rings">All Key-Rings</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                </div>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Drink Items
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
            <div class="column">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                </div>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Stress Shapes
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
            <div class="column">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                </div>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Technology
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
            <div class="column">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                </div>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Umbrella and Ponchos
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
            <div class="column">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                </div>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Personal Items
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
            <div class="column">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                </div>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Confectionery
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
            <div class="column">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                </div>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Trade Show
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
            <div class="column">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                </div>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Office
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
            <div class="column">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                </div>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Aprons and Caps
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
            <div class="column">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                </div>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Corporate Gifts
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
            <div class="column">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                </div>
            </div>
        </div>


        </div>);


  }

export default UtilityMenu;

