import { useEffect, useState } from "react";

const useData = () => {
  // for category data load
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    fetch("/categorys.json")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);

  // for product data load
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // for banner data load
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch("/bannerSlider.json")
      .then((res) => res.json())
      .then((data) => setBanners(data));
  }, []);

  // for features data load
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch("/features.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);

  // for Best Selling Product data load
  const [bestSellingProduct, setbBestSellingProduct] = useState([]);
  useEffect(() => {
    fetch("/bestSellingProduct.json")
      .then((res) => res.json())
      .then((data) => setbBestSellingProduct(data));
  }, []);

  // for brands data load
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  // for brands data load
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return {
    categorys,
    products,
    banners,
    features,
    bestSellingProduct,
    brands,
    blogs,
  };
};

export default useData;
