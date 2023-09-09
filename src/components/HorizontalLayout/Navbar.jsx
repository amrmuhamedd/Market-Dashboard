import React, { Component } from "react";
import { Collapse, Container } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import classname from "classnames";

import { withNamespaces } from "react-i18next";

import { connect } from "react-redux";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({});
    }
  }

  componentDidMount() {
    var matchingMenuItem = null;
    var ul = document.getElementById("navigation");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem);
    }
  }

  activateParentDropdown = (item) => {
    item.classList.add("active");
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active");
      const parent2 = parent.parentElement;
      parent2.classList.add("active");
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active");
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active");
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active");
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active");
            }
          }
        }
      }
    }
    return false;
  };

  render() {
    return (
      <React.Fragment>
        <div className="topnav">
          <Container fluid>
            <nav
              className="navbar navbar-light navbar-expand-lg topnav-menu"
              id="navigation"
            >
              <Collapse
                isOpen={this.props.menuOpen}
                className="navbar-collapse"
                id="topnav-menu-content"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      <i className="ri-dashboard-line me-2"></i>{" "}
                      {this.props.t("Dashboard")}
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ appState: !this.state.appState });
                      }}
                      className="nav-link dropdown-toggle arrow-none"
                      to="/#"
                      id="topnav-apps"
                      role="button"
                    >
                      <i className="ri-apps-2-line me-2"></i>
                      {this.props.t("Apps")} <div className="arrow-down"></div>
                    </Link>
                    <div
                      className={classname("dropdown-menu dropdown-menu-end", {
                        show: this.state.appState,
                      })}
                      aria-labelledby="topnav-apps"
                    >
                      <Link to="/calendar" className="dropdown-item">
                        {this.props.t("Calendar")}
                      </Link>
                      <Link to="/chat" className="dropdown-item">
                        {this.props.t("Chat")}
                      </Link>
                      <div className="dropdown">
                        <Link
                          onClick={(e) => {
                            e.preventDefault();
                            this.setState({
                              emailState: !this.state.emailState,
                            });
                          }}
                          className="dropdown-item dropdown-toggle arrow-none"
                          to="/#"
                          id="topnav-email"
                          role="button"
                        >
                          {this.props.t("Email")}{" "}
                          <div className="arrow-down"></div>
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.emailState,
                          })}
                          aria-labelledby="topnav-email"
                        >
                          <Link to="/email-inbox" className="dropdown-item">
                            {this.props.t("Inbox")}
                          </Link>
                          <Link to="/email-read" className="dropdown-item">
                            {this.props.t("Read Email")}
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <Link
                          onClick={(e) => {
                            e.preventDefault();
                            this.setState({
                              ecommerceState: !this.state.ecommerceState,
                            });
                          }}
                          className="dropdown-item dropdown-toggle arrow-none"
                          to="/#"
                          id="topnav-ecommerce"
                          role="button"
                        >
                          {this.props.t("Ecommerce")}{" "}
                          <div className="arrow-down"></div>
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.ecommerceState,
                          })}
                          aria-labelledby="topnav-ecommerce"
                        >
                          <Link
                            to="/ecommerce-products"
                            className="dropdown-item"
                          >
                            {this.props.t("Products")}
                          </Link>
                          <Link
                            to="/ecommerce-product-detail/1"
                            className="dropdown-item"
                          >
                            {this.props.t("Product Detail")}
                          </Link>
                          <Link
                            to="/ecommerce-orders"
                            className="dropdown-item"
                          >
                            {this.props.t("Orders")}
                          </Link>
                          <Link
                            to="/ecommerce-customers"
                            className="dropdown-item"
                          >
                            {this.props.t("Customers")}
                          </Link>
                          <Link to="/ecommerce-cart" className="dropdown-item">
                            {this.props.t("Cart")}
                          </Link>
                          <Link
                            to="/ecommerce-checkout"
                            className="dropdown-item"
                          >
                            {this.props.t("Checkout")}
                          </Link>
                          <Link to="/ecommerce-shops" className="dropdown-item">
                            {this.props.t("Shops")}
                          </Link>
                          <Link
                            to="/ecommerce-add-product"
                            className="dropdown-item"
                          >
                            {this.props.t("Add Product")}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </Collapse>
            </nav>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const { leftSideBarType, leftSideBarTheme } = state.Layout;
  return { leftSideBarType, leftSideBarTheme };
};

export default withRouter(
  connect(mapStatetoProps, {})(withNamespaces()(Navbar))
);
