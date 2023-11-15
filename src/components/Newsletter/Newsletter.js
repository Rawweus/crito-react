import React from "react";
import Button from "../Generics/Button";
import WavyLines from "../../assets/images/background-wavy-lines.svg";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <img
        src={WavyLines}
        className="background-wavy-lines"
        alt="newsletter wavy lines"
      />
      <div className="container">
        <h2> Get News Updates By Signup</h2>
        <form>
          <input type="text" placeholder="username@domain.com" />
          <Button type="yellow" text="Subscribe" url="/subscribe" />
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
