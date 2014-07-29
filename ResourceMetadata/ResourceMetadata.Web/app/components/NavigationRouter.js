﻿/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router-component');
var Header =require('./Header');
var AppContainer = require('./AppContainer');
var LoginPage = require('./LoginPage');
var RegistrationPage = require('./RegistrationPage');
var NotFound = Router.NotFound;

var Locations = Router.Locations;
var Location =Router.Location;

var NavigationRouter = React.createClass({
    render: function () {

        return (
            <Locations>
            <Location path="/Login" handler={LoginPage} />
            <Location path="/Register" handler={RegistrationPage} />           
            <Location path="/Index.html" handler={LoginPage} /> 
            <Location path="/" handler={LoginPage} />
            <Location path="/*" handler={AppContainer} /> 
            </Locations>
            );
}

});

module.exports = NavigationRouter;