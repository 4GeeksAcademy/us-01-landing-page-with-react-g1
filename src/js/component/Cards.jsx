import React from "react";
import PropTypes from "prop-types";
import logoHCHT from '../../img/rigo-baby.jpg';

export const Cards = (props) => {

    return (
        <div className="container">
            <div className="card">
                <img src={props.logo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    )
}

Cards.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    logo: PropTypes.string,
  }
  
  Cards.defaultProps = {
    title: 'Baby Rigo',
    description: "Brief description of the image of baby rigo",
    logo: logoHCHT,
  }