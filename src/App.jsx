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
          <form>
            <input type="text" name="product" placeholder="Add New Item" />

            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="table-card">
          <table>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Action</th>
            </tr>
            {buyItem.map(item => {
              return (
                <tr className="item-part">
                  <td>1</td>
                  <td>{item}</td>
                  <td>Button</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default App;
