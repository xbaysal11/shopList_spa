import React, { Component } from "react";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <img src="https://img.icons8.com/clouds/100/000000/online-shop-shopping-bag.png" />
          <h2>Shopping List</h2>
        </div>

        <table className="table-card ">
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Savings</th>
          </tr>
          <tr>
            <td>Peter</td>
            <td>Griffin</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>Lois</td>
            <td>Griffin</td>
            <td>$150</td>
          </tr>
          <tr>
            <td>Joe</td>
            <td>Swanson</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>Cleveland</td>
            <td>Brown</td>
            <td>$250</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
