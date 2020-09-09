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
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <div class="dropdown">
            <button class="dropbtn">Dropdown
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
            <div class="header">
                <h2>Mega Menu</h2>
            </div>
            <div class="row">
                <div class="column">
                <h3>Category 1</h3>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                </div>
                <div class="column">
                <h3>Category 2</h3>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                </div>
                <div class="column">
                <h3>Category 3</h3>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                </div>
            </div>
            </div>
        </div>
        </div>);
  }

export default UtilityMenu;