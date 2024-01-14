import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './dashbord.css';


function Dashbord() {
  const [products,setProducts]=useState([]);
  var getdata = () => {
  
       axios.get('http://localhost:3000/products').
      then(data=>setProducts(data.data)).catch(err=>console.log(err));
      
  };
  useEffect(()=>{
    getdata();
  },[])
 
 
  return (
    <div className="d-flex" id="wrapper">
      {/* Sidebar */}
      <div className="bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
          <i className="fas fa-user-secret me-2"></i>ProductStore
        </div>
        <div className="list-group list-group-flush my-3">
          <a href="#" className="list-group-item list-group-item-action bg-transparent second-text active">
            <i className="fas fa-tachometer-alt me-2"></i>Dashboard
          </a>
          <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
            <i className="fas fa-project-diagram me-2"></i>Top Selling product
          </a>
          <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
            <i className="fas fa-chart-line me-2"></i>Todays Seles 
          </a>
        </div>
      </div>
      {/* /#sidebar-wrapper */}

      {/* Page Content */}
      <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
          <div className="d-flex align-items-center">
            <i className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
            <h2 className="fs-2 m-0">Dashboard</h2>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle second-text fw-bold"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-user me-2"></i>John Doe
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container-fluid px-4">
        <div className="row g-3 my-2">
      <div className="col-md-3">
        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
          <div>
            <h3 className="fs-2">720</h3>
            <p className="fs-5">Products</p>
          </div>
          <i className="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
        </div>
      </div>

      <div className="col-md-3">
        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
          <div>
            <h3 className="fs-2">4920</h3>
            <p className="fs-5">revenue amount.</p>
          </div>
          <i className="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3"></i>
        </div>
      </div>

    </div>

    <div className="row my-5">
      <h3 className="fs-4 mb-3">today's new sales</h3>
      <div className="col">
        <table className="table bg-white rounded shadow-sm table-hover">
          <thead>
            <tr>
              <th scope="col" width="50">s.no</th>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Quantity</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>{
           
             products.map((product,index)=>{
               return <tr>
              <th scope="row">{index+1}</th>
              <td>{product.name}</td>
              
              <td>{product.date}</td>
              <td>{product.quantity}</td>
              <td>{product.amount}</td>
            </tr>
             })
            }
            
           
          </tbody>
        </table>
      </div>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Dashbord
