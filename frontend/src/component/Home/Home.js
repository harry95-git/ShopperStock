import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import logo from "../../images/logoimg.png";
import logolaptop from "../../images/imglaptop2.png";
import checkoutProductsBanner from "../../images/CheckoutProcuts.png";


const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>

          <MetaData title="ECOMMERCE" />
          
         
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <br/><br/><br/><br/><br/>
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>


  <div class="carousel-inner">
    <div class="item active">
      <img src={logo} alt="Chania"/>
      <div class="carousel-caption">
        {/* <h3>Los Angeles</h3>
        <p>LA is always so much fun!</p> */}
      </div>
    </div>

    <div class="item">
      <img src={logolaptop} alt="Chicago"/>
      <div class="carousel-caption">
        {/* <h3>Chicago</h3>
        <p>Thank you, Chicago!</p> */}
      </div>
    </div>

    <div class="item">
      <img src={checkoutProductsBanner} alt="New York"/>
      <div class="carousel-caption">
        {/* <h3>New York</h3>
        <p>We love the Big Apple!</p> */}
      </div>
    </div>
  </div>


  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
