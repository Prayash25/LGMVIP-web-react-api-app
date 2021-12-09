import React from "react";
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      items: [],
      DataisLoaded: false
    };
  }


  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    // this.render();
    this.fetchData1();
    const script1 = document.createElement("script1");

    script1.src = "https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js";
    script1.async = true;

    document.body.appendChild(script1);
    const script2 = document.createElement("script2");

    script2.src = "https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.js";
    script2.async = true;

    document.body.appendChild(script2);
    
  }
  // fetchData = () => {
  // // fetch(
  // //   "https://reqres.in/api/users?page=1")
  //   // .then((res) => res.json())
  //   // .then((json) => {
  //     this.setState({
  //       items: json,
  //       DataisLoaded: true
  //     });
  //   // })
  // render() 
  // {
  //   const { DataisLoaded, items } = this.state;
  //   if (!DataisLoaded) return <div>
  //     <h1> Please wait some time....</h1> 
  //     </div>;
      

  //   return (
  // <div className="App" style={{ backgroundColor: "#61147d" }}>
  //     <nav style={{ testAllign: "centre", fontStyle:"oblique" ,color:"white", fontSize:"30px"}}>Fitness Mania</nav>
  //     <h1 style={{ testAllign: "centre", color: 'white', fontFamily: "itallic", fontSize: "460%" }}> User Data </h1>
      
  // </div>
  // );
  // }
  // const my=(
  //   <div className="App" style={{ backgroundColor: "#61147d" }}>
  //   <nav style={{ testAllign: "centre", fontStyle:"oblique" ,color:"white"}}><h1 style={{fontSize:"60px"}}>Fitness Mania</h1></nav>
  //   <h1 style={{ testAllign: "centre", color: 'white', fontFamily: "itallic", fontSize: "30px" }}> User Data </h1>
  //   </div>
  // )
  // ReactDOM. render();
  
  // }
  fetchData = () => {
  fetch(
    "https://reqres.in/api/users?page=0")
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        items: json,
        DataisLoaded: true
      });
    })
  }
  fetchData1 = () => {
  fetch(
    "https://reqres.in/api/users?page=1")
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        items: json,
        DataisLoaded: true
      });
    })
  }
  fetchData2 = () => {
  fetch(
    "https://reqres.in/api/users?page=2")
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        items: json,
        DataisLoaded: true
      });
    })
    // let a= document.getElementById("but")
    // a.onclick(this.fetchData2)
  }
  // let a = document.getElementsById("but");
  // a.innerHtml("");
  
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
      <h1> Please wait some time.... </h1> </div>;
    // // let a=5;
    return (
      <div className="App" style={{ backgroundColor: "#61147d" }}>
        <nav style={{fontStyle:"oblique" ,color:"white"}}><h1 style={{fontSize:"40px"}}>Fitness Mania</h1>
        <button class="ui black button" style={{ fontSize:"16px"}}>Get User</button></nav>
        <div>
        {/* class="ui modal" */}
        <h1 style={{ testAllign: "centre", color: 'white', fontFamily: "itallic", fontSize: "30px" }}> User Data </h1>
        
          <div class="ui stackable three column grid">
            <div class="row" style={{ marginLeft: "5%" }}>

              {
                items.data.map((item) => (
                  <div class="column" style={{ marginBottom: "20px" }}>
                    <div class="ui card" style={{ boxShadow: "2px 2px 0.7px black, -2px -2px 0.7px black", height: "100%" }}>
                      <div class="image" ><img src={item.avatar} style={{width:"100%"}}/></div>
                      <div class="content"><div class="header">{item.first_name}&nbsp;{item.last_name}</div>
                        <div class="meta"><span class="date"></span>{item.email}</div>
                      </div>
                      <div class="extra content"><a><i aria-hidden="true" class="user icon"></i>{item.id}</a></div>
                    </div>
                  </div>

                ))
              }
            </div>
          </div>
        <div> 
          <button  class="ui black button"style={{ fontSize:"16px"}} onClick={this.fetchData1}>Previous</button>
          <button class="ui black button"style={{ fontSize:"16px"}} onClick={this.fetchData2}>Next</button>
        </div>
        </div>
      </div>
    );
  }
  // render1() {
  //   const { DataisLoaded, items } = this.state;
  //   if (!DataisLoaded) return <div>
  //     <h1> Please wait some time.... </h1> </div>;
  //   // let a=5;
  //   <div className="App" style={{ backgroundColor: "#61147d" }}>
  //     <div id="info">
  //       <h1 style={{ testAllign: "centre", color: 'white', fontFamily: "itallic", fontSize: "30px" }}> User Data </h1>
        
  //         <div class="ui stackable three column grid">
  //           <div class="row" style={{ marginLeft: "5%" }}>

  //             {
  //               items.data.map((item) => (
  //                 <div class="column" style={{ marginBottom: "20px" }}>
  //                   <div class="ui card" style={{ boxShadow: "2px 2px 0.7px black, -2px -2px 0.7px black", height: "100%" }}>
  //                     <div class="image" ><img src={item.avatar} style={{width:"100%"}}/></div>
  //                     <div class="content"><div class="header">{item.first_name}&nbsp;{item.last_name}</div>
  //                       <div class="meta"><span class="date"></span>{item.email}</div>
  //                     </div>
  //                     <div class="extra content"><a><i aria-hidden="true" class="user icon"></i>{item.id}</a></div>
  //                   </div>
  //                 </div>

  //               ))
  //             }
  //           </div>
  //         </div>
  //       <div> 
  //         <button  class="ui black button"style={{ fontSize:"16px"}} onClick={this.fetchData1}>Previous</button>
  //         <button class="ui black button"style={{ fontSize:"16px"}} onClick={this.fetchData2}>Next</button>
  //       </div>
  //       </div>
  //   </div>

  // }
}

export default App;

