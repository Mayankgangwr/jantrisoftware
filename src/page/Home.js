import React, {useEffect,useState} from "react";
import axios from "axios";
import Footer from "./footer";
import {  Link } from "react-router-dom";
export default function Home() {
  const [MenuData, setMenuData] = useState([]);
  useEffect(() => {
      getUsers();
  }, []);
  function getUsers() {
      axios.get('https://sattasafari.com/restro/ms/read.php').then(function(response) {
          console.log(response.data);
          setMenuData(response.data);
      });
  }
  return (
   <>
    <div className="container-fluid" style={{marginTop:'75px'}}>
        <div className="row">
        {MenuData.map(({id,title,sdes,img}) =>{
          return(
            <div key={id} className="col-lg-3 col-md-4 col-sm-4 col-xs-6 col-12 my-3">
          <div className="card"  style={{boxShadow: '1px 2px 3px #b2a9a9'}}>
              <div className="card-body p-2">
                  <Link to={`view-product/${id}`}><img src={img}
                   alt="image" style={{width: '100%', height:'250px'}} /></Link> 
              </div>
          </div>
          <Link  className='nav-link' to={`view-product/${id}`}><h5 className="card-title text-center mt-2">{title}</h5></Link>
          <Link className="nav-link" to={`view-product/${id}`}><p className="card-text text-center mt-2">{sdes}</p></Link>
  </div>
            );
        })}  
        </div>
    </div>
    <Footer />
   </>
  );
}