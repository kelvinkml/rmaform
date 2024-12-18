import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import logo from "../Gamma.png";

export default function EmailForm() {
  const [submitted, setSubmitted] = useState("");
  const [emailForm, setEmailForm] = useState("");
  const [allFieldsFilled, setAllFieldsFilled] = useState("");
  const [buttonPressed, setButtonPressed] = useState(false);
  // channel partner useStates
  const [cpContactName, setcpContactName] = useState("");
  const [cpContactNumber, setcpContactNumber] = useState("");
  const [cpEmail, setcpEmail] = useState("");
  // product and company useStates
  const [product, setProduct] = useState("Phoneline+");
  const [companyName, setCompanyName] = useState("");
  const [handset, setHandset] = useState("");
  const [serial, setSerial] = useState("");
  const [mac, setMac] = useState("");
  const [faultDesc, setFaultDesc] = useState("");
  const [firstLineDiag, setFirstLineDiag] = useState("");
  const [resolution, setResolution] = useState("");
  const [acceptCharge, setAcceptCharge] = useState("");
  // delivery/collection details
  const [colCompany, setColCompany] = useState("");
  const [colFirstLine, setColFirstLine] = useState("");
  const [colTown, setColTown] = useState("");
  const [colPostCode, setColPostCode] = useState("");
  const [colFirstName, setColFirstName] = useState("");
  const [colContactNum, setColContactNum] = useState("");
  const [delCompany, setDelCompany] = useState("");
  const [delFirstLine, setDelFirstLine] = useState("");
  const [delTown, setDelTown] = useState("");
  const [delPostCode, setDelPostCode] = useState("");
  const [delFirstName, setDelFirstName] = useState("");
  const [delContactNum, setDelContactNum] = useState("");

  const submitMail = (event) => {
    event.preventDefault();
    setButtonPressed(true);
    setEmailForm(`
      <div>
        <h2>PL+ RMA Form</h2>
        <h3>Channel Partner Details</h3>
        <p>Contact Name: ${cpContactName}</p>
        <p>Contact Number: ${cpContactNumber}</p>
        <p>Contact Email: ${cpEmail}</p>
        <h3>${product} Company Details</h3>
        <p>Company Name: ${companyName}</p>
        <p>Handset Model: ${handset}</p>
        <p>Serial Number: ${serial}</p>
        <p>MAC Address: ${mac}</p>
        <p>Description of Fault: ${faultDesc}</p>
        <p>First Line Diagnostics Performed: ${firstLineDiag ? "Yes" : "No"}</p>
        <p>Resolution: ${resolution}</p>
        <p>
          Acceptance of Charges: ${acceptCharge ? "Accepted" : "Not Accepted"}
        </p>
        <h3>Delivery Details</h3>
        <p>Company Name: ${delCompany}</p>
        <p>First Line Address: ${delFirstLine}</p>
        <p>Town/City: ${delTown}</p>
        <p>Postcode: ${delPostCode}</p>
        <p>Contact Name: ${delFirstName}</p>
        <p>Contact Number: ${delContactNum}</p>
        <h3>Collection Details</h3>
        <p>Company Name: ${colCompany}</p>
        <p>First Line Address: ${colFirstLine}</p>
        <p>Town/City: ${colTown}</p>
        <p>Postcode: ${colPostCode}</p>
        <p>Contact Name: ${colFirstName}</p>
        <p>Contact Number: ${colContactNum}</p>
      </div>`);
    console.log("logging form submitMail", emailForm);
  };
  useEffect(() => {
    // Only run this effect if emailForm has been changed, need to add logic to stop submition if any fields are missed
    if (
      !(
        cpContactName &&
        cpContactNumber &&
        cpEmail &&
        companyName &&
        handset &&
        serial &&
        mac &&
        faultDesc &&
        resolution &&
        acceptCharge &&
        delCompany &&
        delFirstLine &&
        delTown &&
        delPostCode &&
        delFirstName &&
        delContactNum &&
        colCompany &&
        colFirstLine &&
        colTown &&
        colPostCode &&
        colFirstName &&
        colContactNum
      )
    ) {
      console.log("shouldnt submit");
      // setAllFieldsFilled(true);
      return; // Stop the submission if any fields are empty
    }
    setAllFieldsFilled(true);
    if (emailForm) {
      console.log("are they filled?");
      console.log("Email form set. Proceeding with email sending.");

      axios
        .post("http://localhost:8000/sendMail", { emailForm, product })
        .then((res) => {
          console.log(res, "this is the res from the post");
          console.log("message sent");
          setSubmitted(true);
        })
        .catch((err) => console.log(err));
    }
  }, [emailForm]);

  if (submitted) {
    return (
      <div>
        <div className="header">
          <p1 className="title">RMA Form</p1>
          <img src={logo} alt="logo" className={`logo`} />
        </div>
        <h2>
          Thanks {cpContactName.split(" ")[0]}, a member of the team will be in
          touch.
        </h2>
      </div>
    );
  } else
    return (
      <div>
        <div className="header">
          <p1 className="title">RMA Form</p1>
          <img src={logo} alt="logo" className={`logo`} />
        </div>
        <div className="container">
          <div className={`form`}>
            <form onSubmit={submitMail}>
              <div className={`titles`}>
                <p2>Channel Partner Details</p2>
              </div>

              <br></br>
              <input
                type="text"
                placeholder="Contact Name"
                value={cpContactName}
                onChange={(e) => setcpContactName(e.target.value)}
                className={`input-field ${
                  buttonPressed && !cpContactName ? "error" : ""
                }`}
              />
              <br />
              <input
                type="text"
                placeholder="Contact Number"
                value={cpContactNumber}
                onChange={(e) => setcpContactNumber(e.target.value)}
                className={`input-field ${
                  buttonPressed && !cpContactNumber ? "error" : ""
                }`}
              />
              <br />
              <input
                type="email"
                placeholder="Contact Email Address"
                value={cpEmail}
                onChange={(e) => setcpEmail(e.target.value)}
                className={`input-field ${
                  buttonPressed && !cpEmail ? "error" : ""
                }`}
              />
              <br />
              <div className={`titles`}>
                <p2>Product and Company Details</p2>
              </div>

              <br />
              <input
                type="text"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className={`input-field ${
                  buttonPressed && !companyName ? "error" : ""
                }`}
              />
              <br />
              <input
                type="text"
                placeholder="Handset Model"
                value={handset}
                onChange={(e) => setHandset(e.target.value)}
                className={`input-field ${
                  buttonPressed && !handset ? "error" : ""
                }`}
              />
              <br />
              <input
                type="text"
                placeholder="Serial Number"
                value={serial}
                onChange={(e) => setSerial(e.target.value)}
                className={"input-field"}
              />
              <br />
              <input
                type="text"
                placeholder="MAC Address"
                value={mac}
                onChange={(e) => setMac(e.target.value)}
                className={`input-field ${
                  buttonPressed && !mac ? "error" : ""
                }`}
              />
              <br />
              <textarea
                rows="3"
                placeholder="Description of Fault"
                value={faultDesc}
                onChange={(e) => setFaultDesc(e.target.value)}
                className={`input-field ${
                  buttonPressed && !faultDesc ? "error" : ""
                }`}
              ></textarea>
              <br />
              <div className="checkbox">
                <label>
                  First Line Diagnostics performed?
                  <input
                    type="checkbox"
                    checked={firstLineDiag}
                    onChange={(e) => setFirstLineDiag(e.target.checked)}
                  />
                  {!firstLineDiag & buttonPressed ? " Please confirm" : ""}
                </label>
              </div>

              <input
                placeholder="Fault Resolution"
                type="text"
                value={resolution}
                onChange={(e) => setResolution(e.target.value)}
                className={`input-field ${
                  buttonPressed && !resolution ? "error" : ""
                }`}
              />
              <br />
              <div className="checkbox">
                <label>
                  Acceptance of charges
                  <input
                    type="checkbox"
                    checked={acceptCharge}
                    onChange={(e) => setAcceptCharge(e.target.checked)}
                  />
                  {!acceptCharge & buttonPressed ? " Please accept" : ""}
                </label>
                <p className="charge-text">
                  I acknowledge that the hardware will be tested by our supplier
                  and if found to be in working order it/they will be returned,
                  and the replacements charged for.
                </p>
              </div>
              <div className={`titles`}>
                <p2>Delivery Details</p2>
              </div>

              <br />
              <input
                type="text"
                placeholder="Company Name"
                value={delCompany}
                onChange={(e) => setDelCompany(e.target.value)}
                className={`input-field ${
                  buttonPressed && !delCompany ? "error" : ""
                }`}
              />
              <br />
              <input
                type="text"
                placeholder="First Line Address"
                value={delFirstLine}
                onChange={(e) => setDelFirstLine(e.target.value)}
                className={`input-field ${
                  buttonPressed && !delFirstLine ? "error" : ""
                }`}
              />
              <br />
              <input
                type="text"
                placeholder="Town/City"
                value={delTown}
                onChange={(e) => setDelTown(e.target.value)}
                className={`input-field ${
                  buttonPressed && !delTown ? "error" : ""
                }`}
              />
              <br />
              <input
                type="text"
                placeholder="Postcode"
                value={delPostCode}
                onChange={(e) => setDelPostCode(e.target.value)}
                className={`input-field ${
                  buttonPressed && !delPostCode ? "error" : ""
                }`}
              />
              <br />
              <input
                type="text"
                placeholder="Contact Name"
                value={delFirstName}
                onChange={(e) => setDelFirstName(e.target.value)}
                className={`input-field ${
                  buttonPressed && !delFirstName ? "error" : ""
                }`}
              />
              <br />
              <input
                type="text"
                placeholder="Contact Number"
                value={delContactNum}
                onChange={(e) => setDelContactNum(e.target.value)}
                className={`input-field ${
                  buttonPressed && !delContactNum ? "error" : ""
                }`}
              />
              <br />
              <div className={`titles`}>
                <p2>Collection Details</p2>
              </div>

              <br />
              <input
                type="text"
                placeholder="Company Name"
                value={colCompany}
                onChange={(e) => setColCompany(e.target.value)}
                className={`input-field ${
                  buttonPressed && !colCompany ? "error" : ""
                }`}
              />
              <br />
              <input
                type="text"
                placeholder="First Line Address"
                value={colFirstLine}
                onChange={(e) => setColFirstLine(e.target.value)}
                className={`input-field ${
                  buttonPressed && !colFirstLine ? "error" : ""
                }`}
              />
              <br />
              <input
                type="text"
                placeholder="Town/City"
                value={colTown}
                onChange={(e) => setColTown(e.target.value)}
                className={`input-field ${
                  buttonPressed && !colTown ? "error" : ""
                }`}
              />
              <br />
              <input
                type="text"
                placeholder="Postcode"
                value={colPostCode}
                onChange={(e) => setColPostCode(e.target.value)}
                className={`input-field ${
                  buttonPressed && !colPostCode ? "error" : ""
                }`}
              />
              <br />
              <input
                type="text"
                placeholder="Contact Name"
                value={colFirstName}
                onChange={(e) => setColFirstName(e.target.value)}
                className={`input-field ${
                  buttonPressed && !colFirstName ? "error" : ""
                }`}
              />
              <br />
              <input
                type="text"
                placeholder="Contact Number"
                value={colContactNum}
                onChange={(e) => setColContactNum(e.target.value)}
                className={`input-field ${
                  buttonPressed && !colContactNum ? "error" : ""
                }`}
              />
              <br />
              {buttonPressed && (
                <p style={{ color: "red" }}>Please fill out all fields</p>
              )}
              <button className="button" type="submit">
                Submit Form
              </button>
            </form>
          </div>
          <div className="add-info">
            <div className="titles">
              <p2>First Line Diagnostics</p2>
            </div>
            <p className="FLD">
              Before submitting, please confirm you have tried the following:
            </p>
            <ul>
              <li>Checked cables</li>
              <li>Checked internet connection</li>
              <li>Restarted device/base station</li>
            </ul>
            <div className="titles">
              <p2>What happens next...</p2>
            </div>
            <p>
              If you are receiving the replacement device on behalf of your
              customer, you can register it for them via the PhoneLine+ Partner
              Portal. To do this you will need the make, model, and MAC address
              of the device. Alternatively, if the replacement device is being
              sent directly to your customer, they can register it by logging
              into the PhoneLine+ client and using the same details as above.
              Once the device has been registered successfully, it will then be
              available to use immediately with their PhoneLine+ account.
              <p>
                Please note that replacement units are usually reconditioned
                devices and subsequently the outer packaging may not be the
                device’s original box.
              </p>
              The team will give instructions on how to return the faulty
              device(s), please ensure these are sent to the address given asap.
              Failure of booked collections may incur a charge so please ensure
              the contact email address provided is reliable.
              <p>
                Please be aware the hardware will be tested by our supplier and
                if found to be in working order it/they will be returned, and
                the replacements charged for.
              </p>
              <p>
                If we do not receive the hardware back within 2 weeks after we
                have provided the replacements, then we will have to charge for
                the replacements.
              </p>
            </p>
          </div>
        </div>
      </div>
    );
}
