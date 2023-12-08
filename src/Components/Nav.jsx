import React from 'react'
import { DiCssTricks } from "react-icons/di";
import { DiEnvato } from "react-icons/di";
import {Link,NavLink} from "react-router-dom"
// import "/Nav.css"
const Nav = () => {
  return (
    <div className=" d-flex justify-content-between p-4 position-fixed w-100">
      <link rel="stylesheet" href="/Nav.css" />
      <h3 className="ms-3 text-light">
        <DiEnvato />
        Flixo
      </h3>
      <ul className="d-flex list-unstyled gap-5">
        <li className="">
          <NavLink className="text-light text-decoration-none" to="/Products">
            Products
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            activeClassName="active"
            className="text-light text-decoration-none"
            to="/clients"
          >
            Clients
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            activeClassName="active"
            className="text-light text-decoration-none"
            to="/gallery"
          >
            Creative Gallery
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            activeClassName="active"
            className="text-light text-decoration-none"
            to="/resources"
          >
            Resources
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            activeClassName="active"
            className="text-light text-decoration-none"
            to="/company"
          >
            Company
          </NavLink>
        </li>
      </ul>
      <button className="btn rounded-5 me-5 text-light">
        Sign-in <DiCssTricks />
      </button>
    </div>
  );
}

export default Nav