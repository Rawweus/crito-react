import React, { useState } from "react";

const FormContent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
/* 
Nedan har jag gjort min validering på ett annat sätt än videoklippet. 
Ville prova med en enklare variant och kände att den blev bra ändå. 
Hoppas det är ok =)
*/
    // Namnvalidering
    if (!name.trim()) {
      tempErrors["name"] = "Du måste fylla i ett namn";
      isValid = false;
    }

    // E-postvalidering
    if (!email.trim()) {
      tempErrors["email"] = "Du måste fylla i din mejladress";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors["email"] = "Email is not valid";
      isValid = false;
    }

    // Meddelandevalidering
    if (!message.trim()) {
      tempErrors["message"] = "Du måste fylla i ett meddelande";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(false);
    if (validateForm()) {
      try {
        const response = await sendFormData({ name, email, message });
        console.log(response);
        if (response.ok) {
          //När man fyller i sin information så har jag gjort så att informationen rensas från formuläret
          setIsSubmitted(true);
          setName("");
          setEmail("");
          setMessage("");
        } else {
        }
      } catch (error) {}
    }
  };

  const sendFormData = async (formData) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    return fetch(
      "https://win23-assignment.azurewebsites.net/api/contactform",
      requestOptions
    );
  };

  return (
    <>
      <div className="form-content">
        <div className="form-header">
          <h2>Leave us a message for any information</h2>
        </div>
        {isSubmitted && (
          <div className="success-message m-2">
            Tack! Formuläret har skickats och vi kommer återkoppla inom 48h!
          </div>
        )}
        <form method="post" className="contact-form" onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="Name*"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </label>
          <label>
            <input
              type="email"
              placeholder="Email*"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </label>
          <label>
            <textarea
              rows="4"
              placeholder="Your Message*"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {errors.message && <div className="error">{errors.message}</div>}
          </label>
          <button type="submit" className="btn-yellow">
            Send Message <i className="fa-solid fa-square-arrow-up-right"></i>
          </button>
        </form>
      </div>
    </>
  );
};

export default FormContent;
