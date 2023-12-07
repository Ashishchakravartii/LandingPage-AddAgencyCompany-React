import React from 'react'
import { DiCssTricks } from "react-icons/di";
import { DiEnvato } from "react-icons/di";

const Nav = () => {
  return (
    <div className=" d-flex justify-content-between p-4 position-fixed w-100" >
      <h3 className="ms-3">
        <DiEnvato />
        Flixo
      </h3>
      <ul className="d-flex list-unstyled gap-5">
        <li className="border-bottom border-warning">Products</li>
        <li>Clients</li>
        <li>Creative Gallery</li>
        <li>Resources</li>
        <li>Company</li>
      </ul>
      <button className="btn border-dark rounded-5 me-5">
        Sign-in <DiCssTricks />
      </button>
    </div>
  );
}

export default Nav