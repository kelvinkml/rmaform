import React, { useState } from "react";
import axios from "axios";

export default function EmailForm() {
  const [submitted, setSubmitted] = useState(false);
  const [emailForm, setEmailForm] = useState(false);
  //channel partner useStates
  const [cpContactName, setcpContactName] = useState("");
  const [cpContactNumber, setcpContactNumber] = useState("");
  const [cpEmail, setcpEmail] = useState("");
  //product and company useStates
  const [product, setProduct] = useState("Phoneline+");
  const [companyName, setCompanyName] = useState("");
  const [handset, setHandset] = useState("");
  const [serial, setSerial] = useState("");
  const [mac, setMac] = useState("");
  const [faultDesc, setFaultDesc] = useState("");
  const [firstLineDiag, setFirstLineDiag] = useState(false);
  const [resolution, setResolution] = useState("");
  const [acceptCharge, setAcceptCharge] = useState(false);
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

  // const submitMail = async () => {
  //   console.log("sending");
  //   if (subject && message && from) {
  //     axios
  //       .post("http://localhost:8000/sendMail", { subject, message, from })
  //       .then((res) => {
  //         console.log(res, "this is the res from the post");
  //         console.log("message sent");
  //         alert("message sent");
  //         setSubmitted(true);
  //       })
  //       .catch((err) => console.log(err));
  //   } else console.log("not sent");
  // };

  const submitMail = async () => {
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
        <p>Resolution: {resolution}</p>
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
    console.log("logging form submitmail", emailForm);
    setSubmitted(true);
    // axios
    //   .post("http://localhost:8000/sendMail", { emailForm, product })
    //   .then((res) => {
    //     console.log(res, "this is the res from the post");
    //     console.log("message sent");
    //     alert("message sent");
    //     setSubmitted(true);
    //   })
    //   .catch((err) => console.log(err));
  };

  if (submitted) {
    return (
      <h2>
        Thanks {cpContactName.split(" ")[0]}, a member of the team will be in
        touch.
      </h2>
    );
  } else
    return (
      <div>
        <p2>Channel Partner Details</p2>
        <form>
          <input
            type="text"
            placeholder="Contact Name"
            value={cpContactName}
            onChange={(e) => setcpContactName(e.target.value)}
          />
          <br></br>
          <input
            type="text"
            placeholder="Contact Number"
            value={cpContactNumber}
            onChange={(e) => setcpContactNumber(e.target.value)}
          />
          <br></br>
          <input
            type="email"
            placeholder="Contact Email Address"
            value={cpEmail}
            onChange={(e) => setcpEmail(e.target.value)}
          />
          <br></br>
          <p2>Product and Company Details</p2>
          <br></br>
          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <br></br>
          <input
            type="text"
            placeholder="Handset Model"
            value={handset}
            onChange={(e) => setHandset(e.target.value)}
          />
          <br></br>
          <input
            type="text"
            placeholder="Serial Number"
            value={serial}
            onChange={(e) => setSerial(e.target.value)}
          />
          <br></br>
          <input
            type="text"
            placeholder="MAC Address"
            value={mac}
            onChange={(e) => setMac(e.target.value)}
          />
          <br></br>
          <textarea
            rows="3"
            placeholder="Description of Fault"
            value={faultDesc}
            onChange={(e) => setFaultDesc(e.target.value)}
          ></textarea>
          <br></br>
          <label>
            <input
              type="checkbox"
              placeholder="Diagnostics Performed"
              value={firstLineDiag}
              onChange={(e) => setFirstLineDiag(e.target.value)}
            ></input>
            First Line Diagnostics performed
          </label>
          <br></br>
          <input
            placeholder="Fault Resolution"
            type="text"
            value={resolution}
            onChange={(e) => setResolution(e.target.value)}
          />
          <br></br>
          <label>
            <input
              type="checkbox"
              checked={acceptCharge}
              onChange={(e) => setAcceptCharge(e.target.checked)}
            />
            Acceptance of charges
          </label>
          <br></br>
          <p2>Delivery Details</p2>
          <br></br>
          <input
            type="text"
            placeholder="Company Name"
            value={delCompany}
            onChange={(e) => setDelCompany(e.target.value)}
          />
          <br></br>
          <input
            type="text"
            placeholder="First Line Address"
            value={delFirstLine}
            onChange={(e) => setDelFirstLine(e.target.value)}
          />
          <br></br>
          <input
            type="text"
            placeholder="Town/City"
            value={delTown}
            onChange={(e) => setDelTown(e.target.value)}
          />
          <br></br>
          <input
            type="text"
            placeholder="Postcode"
            value={delPostCode}
            onChange={(e) => setDelPostCode(e.target.value)}
          />
          <br></br>
          <input
            type="text"
            placeholder="Contact Name"
            value={delFirstName}
            onChange={(e) => setDelFirstName(e.target.value)}
          />
          <br></br>
          <input
            type="text"
            placeholder="Contact Number"
            value={delContactNum}
            onChange={(e) => setDelContactNum(e.target.value)}
          />
          <br></br>
          <p2>Collection Details</p2>
          <br></br>
          <input
            type="text"
            placeholder="Company Name"
            value={colCompany}
            onChange={(e) => setColCompany(e.target.value)}
          />
          <br></br>
          <input
            type="text"
            placeholder="First Line Address"
            value={colFirstLine}
            onChange={(e) => setColFirstLine(e.target.value)}
          />
          <br></br>
          <input
            type="text"
            placeholder="Town/City"
            value={colTown}
            onChange={(e) => setColTown(e.target.value)}
          />
          <br></br>
          <input
            type="text"
            placeholder="Postcode"
            value={colPostCode}
            onChange={(e) => setColPostCode(e.target.value)}
          />
          <br></br>
          <input
            type="text"
            placeholder="Contact Name"
            value={colFirstName}
            onChange={(e) => setColFirstName(e.target.value)}
          />
          <br></br>
          <input
            type="text"
            placeholder="Contact Number"
            value={colContactNum}
            onChange={(e) => setColContactNum(e.target.value)}
          />
          <br></br>

          <button
            onClick={() => {
              submitMail();
            }}
            type="button"
          >
            Send Email
          </button>
        </form>
      </div>
    );
}
