import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      buyItem: ["milk", "eggs", "bread"],
      message: ""
    };
  }

  addItem(e) {
    e.preventDefault();
    const { buyItem } = this.state;
    const newItem = this.newItem.value;
    const isOnTheList = buyItem.includes(newItem);

    if (isOnTheList) {
      this.setState({
        message: "This item is already on the list!"
      });
    } else {
      if (newItem === "") {
        this.setState({
          message: "Input is Empty!"
        });
      } else {
        this.setState({
          buyItem: [...buyItem, newItem],
          message: ""
        });
      }
      this.addForm.reset();
    }
  }

  render() {
    const { buyItem, message } = this.state;
    return (
      <div className="App">
        <div className="center">
          <img
            src="https://img.icons8.com/clouds/100/000000/online-shop-shopping-bag.png"
            alt=""
          />
          <h2>Shopping List</h2>
          <form
            ref={input => (this.addForm = input)}
            onSubmit={e => {
              this.addItem(e);
            }}
          >
            <input
              ref={input => {
                this.newItem = input;
              }}
              type="text"
              name="product"
              placeholder="Coffee "
            />
            <button id="add" type="submit">
              Add
            </button>
          </form>
        </div>
        <div className="table-card">
          {message !== "" && <p className="message center">{message}</p>}
          <table>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Action</th>
            </tr>
            {buyItem.map(item => {
              return (
                <tr key={item} className="item-part">
                  <td>1</td>
                  <td>{item}</td>
                  <td>
                    <button type="submit">Remove</button>
                  </td>
                </tr>
              );
            })}
          </table>
          <div className="right">
            <button type="submit">Clear List</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
