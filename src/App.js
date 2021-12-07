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
    // nextpage(){
    //   fetch("https://reqres.in/api/users?page=2")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     this.setState({
    //       items: json,
    //       DataisLoaded: true
    //     });
    //   })
    // }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
      <h1> Please wait some time.... </h1> </div>;

    return (
      <div className="App" style={{ backgroundColor: "#61147d" }}>
        <nav style={{ testAllign: "centre", fontStyle:"oblique" ,color:"white", fontSize:"30px"}}>Fitness Mania</nav>
        <h1 style={{ testAllign: "centre", color: 'white', fontFamily: "itallic", fontSize: "460%" }}> User Data </h1>
        
          <div class="ui stackable three column grid">
            <div class="row" style={{ marginLeft: "3%" }}>

              {
                items.data.map((item) => (
                  <div class="column" style={{ marginBottom: "20px" }}>
                    <div class="ui card" style={{ boxShadow: "2px 2px 0.5px black, -2px -2px 0.5px black", width: "75%" }}>
                      <div class="image"><img src={item.avatar} /></div>
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
        <button class="ui black button"style={{width:"19%", fontSize:"16px"}} onClick="">Next</button>
      </div>
    );
  }
}

export default App;
