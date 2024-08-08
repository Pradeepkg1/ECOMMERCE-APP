import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
                   Our e-commerce app is designed to revolutionize
                   online shopping by offering a seamless, user-friendly
                    experience. With a sleek interface and robust features, users
                   can effortlessly browse, search, and purchase products from a
                    vast catalog. The app integrates secure payment gateways, real-time 
                   order tracking, and personalized recommendations to enhance customer
                   satisfaction. Additionally, it supports multiple vendors, enabling a 
                   diverse marketplace that caters to a wide range of consumer needs. Our
                   goal is to create a one-stop shop that combines convenience, variety, 
                   and security, making online shopping a delightful experience for everyone.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;