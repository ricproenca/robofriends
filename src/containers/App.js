import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import Header from "../components/Header";

import { setSearchField, requestRobots } from "../actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const {
      searchField,
      onSearchChange,
      robots,
      isPending,
      error
    } = this.props;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (isPending) {
      return <h1>Loading robots...</h1>;
    }

    if (error) {
      return <h1>Ooops! That is not good.</h1>;
    }

    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <div style={{ height: "25px" }} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
