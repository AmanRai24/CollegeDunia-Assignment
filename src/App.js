import React, { Component } from 'react';
import Container from "./components/Container"
import InfiniteScroll from 'react-infinite-scroll-component';
import colleges from "./assets/data/colleges.json";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data:colleges,
      items:Array.from({length:10}),
      hasMore:true,
    };
  }

  fetchData=()=>{
    if(this.state.items.length>=this.state.data.colleges.length){
      this.setState({hasMore:false});
      return;
    }

    setTimeout(()=>{
      this.setState({
        items:this.state.items.concat(Array.from({length:10})),
      });
    },2000)
  }

  render(){
    const{data,items,hasMore}=this.state;
    const style={
      color:"red",
      fontSize:24,
      textAlign: "center"
    }
  return (
    <div className="App">
      <span>Colleges in North India</span>
      <InfiniteScroll
        dataLength={items.length}
        next={this.fetchData}
        hasMore={hasMore}
        loader={<span style={{textAlign:"center", fontSize:20}}>Please Wait!!Loading</span>}
        endMessage={
          <span style={style}>Nothing To Show..</span>
        }
      >
        {items.map((i,index)=>(
          <>
            <Container key={index} data={data.colleges[index]} ></Container>
          </>
        ))}
      </InfiniteScroll>
    </div>
  );
}
}

export default App;
