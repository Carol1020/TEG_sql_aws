import React, { Component } from 'react';
// import { render } from 'react-dom';

class CUSTOMER extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    // input backend API address
    fetch('https://xxx')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else {
      return (
        <div className="CUSTOMER">
          <ul>
            {items.map(item => (
              <li key={item.id}>
                
                {/*
                CUSTOMER_ID: {item.CUSTOMER_ID} 
                | FIRST_NAME: {item.FIRST_NAME} 
                | LAST_NAME: {item.LAST_NAME} 
                | EMAIL: {item.EMAIL}
                */}
              </li>
            ))};
          </ul>
        </div>
      )
    }
  }
}

export default CUSTOMER;