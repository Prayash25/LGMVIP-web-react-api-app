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
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Please wait some time.... </h1> </div> ;

		return (
    <div className = "App" style={{backgroundColor:"teal"}}>
      <h1 style={{marginLeft:"20px",color:'white'}}> User Data </h1>
      <div  class="ui stackable three column grid">
      <div class="row" style={{marginLeft:"20px"}}>
      
      {
				items.data.map((item) => (
      <div class="column" style={{marginBottom:"20px"}}>
      <div class="ui card">
          <div class="image"><img src={item.avatar}/></div>
          <div class="content"><div class="header">{ item.first_name }&nbsp;{ item.last_name }</div>
          <div class="meta"><span class="date"></span>{ item.email }</div>
        </div>
          <div class="extra content"><a><i aria-hidden="true" class="user icon"></i>{item.id}</a></div>
      </div>
  </div>
      ))
        }
    </div>
    </div>
    </div>
	);
}
}

export default App;
