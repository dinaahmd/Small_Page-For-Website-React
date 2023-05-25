import React, { Component } from 'react'
import "./content.css";
export class Content extends Component {
  render() {
    return (
      <div className="container" id="shop">

        <h3 className="title">organic products </h3>

        <div className="products-container">

          <div className="product" data-name="p-1">
              <div className="content">
                <span>limited sales</span>
                <h3>Strawberry</h3>
              </div>
              <div className="price"><del>$10.00</del></div>
              <div className="price">$5.00</div>
          </div>

          <div className="product" data-name="p-2">
              <div className="content">
                <span>limited sales</span>
                <h3>Onion</h3>
              </div>
              <div className="price"><del>$5.30</del></div>
              <div className="price">$3.30</div>
          </div>

          <div className="product" data-name="p-3">
              <div className="content">
                <span>limited sales</span>
                <h3>Grape</h3>
              </div>
              <div className="price"><del>$8.00</del></div>
              <div className="price">$4.00</div>
          </div>
        </div>
      </div>
    )
  }
}
