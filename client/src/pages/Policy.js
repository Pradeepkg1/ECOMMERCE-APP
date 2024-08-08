import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus " >
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p> We prioritize your privacy and are committed to protecting your personal 
            information. Our e-commerce app collects data to process orders and enhance your shopping experience.</p>
          <p>We implement industry-standard security measures to safeguard your data against 
            unauthorized access and disclosure. Your information is handled with the utmost care and confidentiality.</p>
          <p>We do not share your data with third parties without your explicit consent,
             except when required by law. We ensure transparency in how your information is used and stored.</p>
          <p>By using our app, you consent to the collection and use of your data
             in accordance with this privacy policy. Your trust is important to us.</p>
        
        </div>
      </div>
    </Layout>
  );
};

export default Policy;