import React, { Component } from "react";
import Container from "./components/Container";
import InfiniteScroll from "react-infinite-scroll-component";
import colleges from "./assets/data/colleges.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: colleges,
      items: Array.from({ length: 10 }),
      hasMore: true,
    };
  }

  fetchData = () => {
    if (this.state.items.length >= this.state.data.colleges.length) {
      this.setState({ hasMore: false });
      return;
    }

    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 10 })),
      });
    }, 2000);
  };

  render() {
    const { data, items, hasMore } = this.state;
    return (
      <div className="App">
        <h2 className="heading">Colleges in North India</h2>
        <InfiniteScroll
          dataLength={items.length}
          next={this.fetchData}
          hasMore={hasMore}
          loader={<div className="loader"></div>}
          endMessage={<p className="end">Nothing To Show...</p>}
        >
          {items.map((i, index) => (
            <>
              <Container key={index} data={data.colleges[index]}></Container>
            </>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default App;
