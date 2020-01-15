import React from "react";
import HomeBtn from "../components/HomeBtn";
import EventListItem from "../components/EventListItem";
import { outfit1 } from "../outfits.json";


class ArticlePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s8">
              <h1>Current Outfit</h1>
              <div className="row">
                <div className="col s12">
                  <h3>Top</h3>
                  <img class="materialboxed" width="auto" src="./images/articles/article1.jpg"></img>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <h3>Bottom</h3>
                  <img class="materialboxed" width="auto" src="./images/articles/article4.jpg"></img>
                </div>
              </div>
            </div>
            <div className="col s4">
              <div className="row">
                <div className="col s12">
                  <h2>Photo collections</h2>
                  <img class="materialboxed" width="auto" src="./images/mensClothing.jpg"></img>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <h2>Event collections</h2> {/*may be a modal for the events to show notable attendeess on collection link click*/}
                  <div className="collection">
                    {" "}
                    {/**refactor collection into EventCollection */}
                    {Object.values(outfit1.events).map(event => {
                      return <EventListItem name={event.name} location={event.location} date={event.date} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticlePage;
