import { useEffect, useState } from "react";

const useData = () => {
  // for category data load
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    fetch("categorys.json")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);

  // for product data load
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // for banner data load
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch("bannerSlider.json")
      .then((res) => res.json())
      .then((data) => setBanners(data));
  }, []);

  return { categorys, products, banners };
};

export default useData;
