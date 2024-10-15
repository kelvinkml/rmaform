import React, { useState } from "react";
import axios from "axios";

export default function EmailForm() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [from, setFrom] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitMail = () => {
    console.log("sending");
    if (subject && message && from) {
      console.log("message sent");
      axios
        .post("http://localhost:8000/sendMail", {})
        .then(() => {
          alert("message sent");
          setSubmitted(true);
        })
        .catch((err) => console.log(err));
    } else console.log("not sent");
  };

  if (submitted) {
    return <h1>Submitted</h1>;
  } else
    return (
      <form>
        <input
          type="email"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          rows="3"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          onClick={() => {
            submitMail();
          }}
          type="submit"
        >
          Send Email
        </button>
      </form>
    );
}
