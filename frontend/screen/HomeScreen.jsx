import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import {
  useDispatch,
  useSelector,
} from "../node_modules/react-redux/es/exports";
import { listProducts } from "../actions/productActions";
import { listTopSellers } from "../actions/userActions";
import { Link } from "../node_modules/react-router-dom/dist/index";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, product } = productList;

  const userTopSellersList = useSelector((state) => state.userTopSellersList);

  const {
    loading: loadingSellers,
    error: errorSellers,
    user: sellers,
  } = userTopSellersList;
  return <div>HomeScreen</div>;
};

export default HomeScreen;
