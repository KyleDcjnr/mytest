import React, { Component } from "react";
import UserInfo from "./Component/UserInfo";
import './index.css'

class App extends Component {
  state = {
    userInfo: [
      {
        fname: "John",
        lname: "Prudent",
        email: "johnprud@gmail.com",
        phone: "08156734690",
      },
      {
        fname: "David",
        lname: "Johnson",
        email: "johnsondavid@gmail.com",
        phone: "08155634690",
      },
      {
        fname: "Pan",
        lname: "Paul",
        email: "paulpan@gmail.com",
        phone: "08158990690",
      },
      {
        fname: "Caramel",
        lname: "Durello",
        email: "cardur@gmail.com",
        phone: "08156730000",
      },
      {
        fname: "Mandain",
        lname: "Denmark",
        email: "mandem123@gmail.com",
        phone: "08156730000",
      },
    ],
  };

  render() {
    return (
      <>
        <div className="main">
          <UserInfo
            fname={this.state.userInfo[0].fname}
            lname={this.state.userInfo[0].lname}
            email={this.state.userInfo[0].email}
            phone={this.state.userInfo[0].phone}
            className="box"
          />
        </div>
        <div className="main">
          <UserInfo
            fname={this.state.userInfo[1].fname}
            lname={this.state.userInfo[1].lname}
            email={this.state.userInfo[1].email}
            phone={this.state.userInfo[1].phone}
            className="box"
          />
        </div>
        <div className="main">
          <UserInfo
            fname={this.state.userInfo[2].fname}
            lname={this.state.userInfo[2].lname}
            email={this.state.userInfo[2].email}
            phone={this.state.userInfo[2].phone}
            className="box"
          />
        </div>
        <div className="main">
          <UserInfo
            fname={this.state.userInfo[3].fname}
            lname={this.state.userInfo[3].lname}
            email={this.state.userInfo[3].email}
            phone={this.state.userInfo[3].phone}
            className="box"
          />
        </div>
        <div className="main">
          <UserInfo
            fname={this.state.userInfo[4].fname}
            lname={this.state.userInfo[4].lname}
            email={this.state.userInfo[4].email}
            phone={this.state.userInfo[4].phone}
            className="box"
          />
        </div>
      </>
    );
  }
}

export default App;
