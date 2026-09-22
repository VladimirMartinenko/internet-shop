const isProd = process.env.NODE_ENV === "production";

const CONSTANTS = {
  HTTP_SERVER_URL:
    process.env.REACT_APP_API_URL ||
    (isProd ? "/api/" : "http://localhost:5000/api/"),
  REFRESH_TOKEN: "REFRESH_TOKEN",
  HTTP_SERVER_URL_images:
    process.env.REACT_APP_IMAGES_URL ||
    (isProd ? "/images/" : "http://localhost:5000/images/"),
  PRODUCT_IMAGE_PATH: "/staticImages/product.png",
  KLAVIYO_PUBLIC_KEY: process.env.REACT_APP_KLAVIYO_PUBLIC_KEY || "",
};

export default CONSTANTS;
