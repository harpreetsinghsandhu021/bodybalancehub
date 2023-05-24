import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const contact = () => {
  return (
    <>
      <Header />

      <section className="sction--cntct">
        <div>
          <div>
            <h3>Contact</h3>
          </div>
          <div>
            <p>For any inquiries, or questions, contact us below:</p>
            <p>
              <strong>Contact us: getwippartners@gmail.com</strong>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default contact;
