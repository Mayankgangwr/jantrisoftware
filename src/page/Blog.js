import React, {useEffect, useState } from "react";
import axios from "axios";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Blogs = () => {
  const params = useParams();
  console.log(params.proid)
  const [MenuData, setMenuData] = useState([]);
  useEffect(() => {
      getUsers();
  }, []);
  function getUsers() {
      axios.get(`https://sattasafari.com/restro/ms/read.php?id=${params.proid}`).then(function(response) {
          console.log(response.data);
          setMenuData(response.data);
      });
  }
  const [SimllerData, setSimllerData] = useState([]);
  useEffect(() => {
      getSimllerData();
  }, []);
  function getSimllerData() {
      axios.get('https://sattasafari.com/restro/ms/read.php').then(function(response) {
          console.log(response.data);
          setSimllerData(response.data);
      });
  }
  return (
    <>
    {MenuData.map((el) =>{
      return (
      <>
      <div className="container" style={{marginTop:'100px'}}>
        <h3>{el.title}</h3>
        <div className="d-flex">
          <div className="me-3">
            <i className="far fa-clock mx-2"></i>
            September 21, 2022
          </div>
          <div className="mx-3">
            <i className="fas fa-user-alt mx-2"></i>
            {el.developer}
          </div>
          <div className="ms-3">
            <i className="far fa-folder mx-2"></i>
            {el.tags}
          </div>
        </div>
      </div>
      <div className="container mb-6">
        <div className="mt-3 d-flex justify-content-center ">
          <img src={el.ss} />
        </div>
        <div className="row">
          <div className="col-3">
            <span
              style={{
                borderBottom: "2px solid blue",
                fontSize: "35px",
                paddingBottom: "10px",
              }}
            >
              Project Details
            </span>
            <p className="text-dark mt-4">
              <strong>Author:</strong> Ms Sheet
            </p>
            <p className="text-dark">
              <strong>Released:</strong> July, 2022
            </p>
            <p className="text-dark">
              <strong>License:</strong> CC BY 3.0
            </p>
            <p className="text-dark">
              <strong>Credits:</strong> Images from Author
            </p>
          </div>
          <div className="col-9">
            <span
              style={{
                borderBottom: "2px solid blue",
                fontSize: "35px",
                paddingBottom: "10px",
              }}
            >
              Description
            </span>
            <p className="mt-4">
            {el.des}
            </p>
          </div>
        </div>
        <button className="btn btn-primary px-3 py-2">
          <a className="nav-link" href={el.demo}><i className="fas fa-eye me-1"></i> Demo</a>
        </button>
      </div>
      <div className="container mt-4 mb-5">
        <h5>Share This</h5>
        <hr />
        <button className="btn btn-primary py-2 px-3">
          <i className="fab fa-facebook-f me-2"></i> Facebook
        </button>
        <button className="btn btn-info py-2 px-3 mx-3">
          <i className="fab fa-twitter me-2"></i> Twitter
        </button>
        <button className="btn btn-danger py-2 px-3 me-3">
          <i className="fab fa-pinterest me-2"></i> Pinterest
        </button>
        <button className="btn btn-primary py-2 px-3">
          <i className="fab fa-linkedin-in me-2"></i> LinkedIn
        </button>
      </div>
      </>);
})}
      <div className="container mt-4">
        <h5>Similar Templates</h5>
        <hr />
        <div className="row">
        {SimllerData.map((el) =>(
          <div key={el.id} className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 my-3">
          <div className="card"  style={{boxShadow: '1px 2px 3px #b2a9a9'}}>
              <div className="card-body p-2">
              <a href={`http://localhost:3000/view-product/${el.id}`}><img src={el.img}
                   alt="image" style={{width: '100%', height:'250px'}} /></a>
              </div>
          </div>
           </div>
        ))}  
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
