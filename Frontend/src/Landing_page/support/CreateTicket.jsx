import React from "react";

function CreateTicket() {
  return (
    <div className="container mt-20">
      {/* Heading */}
      <h1 className="fw-bold mb-5" style={{ fontSize: "2.2rem" }}>
        To create a ticket, select a relevant topic
      </h1>

      <div className="row pl-25">
        {/* Topic 1 */}
        <div className="col-12 col-md-4 mb-5">
          <h5 className="fw-semibold mb-3" style={{ fontSize: "1.3rem" }}>
            Account Opening
          </h5>
          <div className="d-flex flex-column">
            <a className="mb-2 text-primary text-decoration-none" href="">
              Online Account Opening
            </a>
            <a className="mb-2 text-primary text-decoration-none" href="">
              Offline Account Opening
            </a>
            <a className="mb-2 text-primary text-decoration-none" href="">
              NRI Account Opening
            </a>
            <a className="mb-2 text-primary text-decoration-none" href="">
              Charges at Dream
            </a>
            <a className="mb-2 text-primary text-decoration-none" href="">
              Getting Started
            </a>
          </div>
        </div>

        {/* Topic 2 */}
        <div className="col-12 col-md-4 mb-5">
          <h5 className="fw-semibold mb-3" style={{ fontSize: "1.3rem" }}>
            Account Management
          </h5>
          <div className="d-flex flex-column">
            <a className="mb-2 text-primary text-decoration-none" href="">
              Update Personal Details
            </a>
            <a className="mb-2 text-primary text-decoration-none" href="">
              Change Bank Account
            </a>
            <a className="mb-2 text-primary text-decoration-none" href="">
              Segment Activation
            </a>
            <a className="mb-2 text-primary text-decoration-none" href="">
              Demat Related Queries
            </a>
          </div>
        </div>

        {/* Topic 3 */}
        <div className="col-12 col-md-4 mb-5">
          <h5 className="fw-semibold mb-3" style={{ fontSize: "1.3rem" }}>
            Trading & Markets
          </h5>
          <div className="d-flex flex-column">
            <a className="mb-2 text-primary text-decoration-none" href="">
              Order Related Issues
            </a>
            <a className="mb-2 text-primary text-decoration-none" href="">
              Margin Requirements
            </a>
            <a className="mb-2 text-primary text-decoration-none" href="">
              Exchange Related Queries
            </a>
            <a className="mb-2 text-primary text-decoration-none" href="">
              Product Types Explained
            </a>
          </div>
        </div>

        {/* Topic 4 */}
        <div className="col-12 col-md-4 mb-5">
          <h5 className="fw-semibold mb-3" style={{ fontSize: "1.3rem" }}>
            Funds & Payments
          </h5>
          <div className="d-flex flex-column">
            <a className="mb-2 text-primary text-decoration-none" href="">
              Add Money to Account
            </a>
            <a className="mb-2 text-primary text-decoration-none" href="">
              Withdrawal Issues
            </a>
            <a className="mb-2 text-primary text-decoration-none" href="">
              UPI Payment Issues
            </a>
            <a className="mb-2 text-primary text-decoration-none" href="">
              Refund Queries
            </a>
          </div>
        </div>

        {/* Topic 5 */}
        <div className="col-12 col-md-4 mb-5">
          <h5 className="fw-semibold mb-3" style={{ fontSize: "1.3rem" }}>
            Kite & App Support
          </h5>
          <div className="d-flex flex-column">
            <a className="mb-2 text-primary text-decoration-none" href="">
              Login Issues
            </a>
            <a className="mb-2 text-primary text-decoration-none" href="">
              Chart Problems
            </a>
            <a className="mb-2 text-primary text-decoration-none" href="">
              App Not Working
            </a>
            <a className="mb-2 text-primary text-decoration-none" href="">
              Order Window Issues
            </a>
          </div>
        </div>

        {/* Topic 6 */}
        <div className="col-12 col-md-4 mb-5">
          <h5 className="fw-semibold mb-3" style={{ fontSize: "1.3rem" }}>
            Console & Reports
          </h5>
          <div className="d-flex flex-column">
            <a className="mb-2 text-primary text-decoration-none" href="">
              Tax P&L Reports
            </a>
            <a className="mb-2 text-primary text-decoration-none" href="">
              Statement Issues
            </a>
            <a className="mb-2 text-primary text-decoration-none" href="">
              Ledger Mismatch
            </a>
            <a className="mb-2 text-primary text-decoration-none" href="">
              Holdings Not Showing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
