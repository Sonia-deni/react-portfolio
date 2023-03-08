import React, {useState} from "react";
import "./style.css";


function ContactForm() {
  const [message, setMessage] = useState("Please leave a comment");

  const handleSubmit = e => {
    e.preventDefault();
    alert('Thank you for your message: ' + message);
  };

  return (  
      <form onSubmit={handleSubmit}>
      <textarea type="textArea" className="message" value={message} onChange={e => setMessage(e.target.value)} />
      <input type="submit" value="Submit" className="messageSubmit"/>
      </form>
  );
  
}

export default ContactForm;