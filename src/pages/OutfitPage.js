import React from "react";
import HomeBtn from "../components/HomeBtn";
import EventListItem from "../components/EventListItem";
import Partners from "../brands.json";
import "../components/Brands.css"


class PartnerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <section className="col s12">
              <a href={Partners.rentTheRunway.link} target="_blank"><img src={Partners.rentTheRunway.image} alt="Rent The Runway" className="brandLink"/></a>
            </section>
            <section className="col s12">
              <a href={Partners.jCrew.link} target="_blank"><img src={Partners.jCrew.image} alt="J. Crew" className="brandLink"/></a>
            </section>
            <section className="col s12">
              <a href={Partners.macys.link} target="_blank"><img src={Partners.macys.image} alt="Macy's" className="brandLink"/></a>
            </section>
            <section className="col s12">
              <a href={Partners.uniqlo.link} target="_blank"><img src={Partners.uniqlo.image} alt="uniqlo" className="brandLink"/></a>
            </section>
            <section className="col s12">
              <a href={Partners.amazon.link} target="_blank"><img src={Partners.amazon.image} alt="Amazon" className="brandLink"/></a>
            </section>
            <section className="col s12">
              <a href={Partners.bananaRepublic.link} target="_blank"><img src={Partners.bananaRepublic.image} alt="Banana republic" className="brandLink"/></a>
            </section>
            <section className="col s12">
              <a href={Partners.luluLemon.link} target="_blank"><img src={Partners.luluLemon.image} alt="LuluLemon" className="brandLink"/></a>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default PartnerPage;
