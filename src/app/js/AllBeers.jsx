import React from "react";
import axios from "axios";

import Card from "./Card";
import Header from "./Header";


class AllBeers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    axios
      .get("https://ironbeer-api.herokuapp.com/beers/all")
      .then(({ data }) => {
        this.setState({
          beers: data
        });
      });
  }

  render() {
    let array = this.state.beers.map((el, index) => (
      <Card key={"beer_" + index} beer={el} />
    ));

    return (
      <div>
        <Header />
        <div className="cards-container">{array}</div>
      </div>
    );
  }
}

export default AllBeers;
