import React, { Component } from "react";
import Tour from "../Tour/Tour";
import "./tourlist.scss";
import { tourData } from "../tourData";

class TourList extends Component {
  state = {
    tours: tourData
  };

  removeTour = (id) => {
    const sortTour = this.state.tours.filter((tour) => {
      return tour.id !== id;
    });

    this.setState({
      tours: sortTour
    });
  };
  render() {
    return (
      <section className='tour-list'>
        {this.state.tours.map((tour, index) => (
          <Tour tours={tour} key={index} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}

export default TourList;
