import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      buyItem: ["milk", "eggs", "bread"]
    };
  }
  render() {
    const { buyItem } = this.state;
    return (
      <div className="App">
        <div className="title">
          <img src="https://img.icons8.com/clouds/100/000000/online-shop-shopping-bag.png" />
          <h2>Shopping List</h2>
        </div>

        <table className="table-card ">
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Action</th>
          </tr>
          {buyItem.map(item => {
            return (
              <tr>
                <td>1</td>
                <td>{item}</td>
                <td>Button</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default App;
