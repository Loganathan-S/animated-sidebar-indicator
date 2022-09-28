import React from "react";

const CreditDebitCard = () => {
  return (
    <>
      <h5>CARD DETAILS</h5>
      <div className="card">
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="row ">
              <div className="col-5">
                <div className="mb-3">
                  <label  className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
              </div>
              <div className="col-7 my-auto">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  width="70"
                  height="50"
                />
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  width="70"
                  height="40"
                />
              </div>
            </div>
            <div className="row ">
              <div className="col-5">
                <div className="mb-3">
                  <label  className="form-label">
                    Expiry Date* 
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
              </div>
              <div className="col-3">
                <div className="mb-3">
                  <label  className="form-label">
                    CCV*
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreditDebitCard;
