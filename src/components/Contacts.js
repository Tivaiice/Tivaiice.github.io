import React from "react";
import "../styles/Contacts.css";

const txtContacts = "</ CONTACTS ME>";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="text-center">
        <h1 className="txtContacts">{txtContacts}</h1>
        <p>
          Please fill out the for and describe your propject needs and I'll
          contacts you as soon as possible.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            {/* NAME INPUT */}
            <div className="text-center">
              <input
                type="text"
                className="form-control"
                placeholder="🧑🏻‍💻  Name"
                name="Name"
              />
              <div className="line"></div>
            </div>
            {/* PHONE INPUT */}
            <div className="text-center">
              <input
                type="text"
                className="form-control"
                placeholder="📞  Phone Number "
                phone="phone"
              />
              <div className="line"></div>
            </div>
            {/* EMAIL INPUT */}
            <div className="text-center">
              <input
                type="email"
                className="form-control"
                placeholder="📩   Email "
                email="email"
              />
              <div className="line"></div>
            </div>
            {/* Subject INPUT */}
            <div className="text-center">
              <input
                type="text"
                className="form-control"
                placeholder="🖋   Subject"
                subject="subject "
              />
              <div className="line"></div>
            </div>
          </div>
          <div className="col-md-6 col-xs-12">
            {/* DESCRIPTION */}
            <div className="text-center">
              <textarea
                type="text"
                className="form-control"
                placeholder="📑  Email"
                email="email"
              />
              <div className="line"></div>
            </div>
            <button className="btn-main-offer contact-btn" type="submit">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
