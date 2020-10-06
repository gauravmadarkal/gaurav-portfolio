import React from "react";
import InputBox from "../components/inputBox";
import CustomButton from "../components/button";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      message: null,
    };
  }
  onChange(target) {
    console.log(target.id);
    console.log(target.value);
  }
  render() {
    return (
      <div className="container contact" id="contact">
        <p style={{ marginTop: "20px" }}>Home &gt; Contact</p>
        <div className="contactGrid">
          <div className="contact_gridItem">
            <img
              src={require("../../assets/img/icons/contact.svg")}
              className="about-image"
            />
          </div>
          <div className="contact_gridItem form">
            <p className="contact-heading">CONTACT ME</p>
            <InputBox
              label="Name"
              onChangeHandler={this.onChange}
              multiLineInput={false}
              id="name"
              placeholder="Enter you name here"
              errorMsg="C'mon, I need a valid name🤷‍♂️"
              errorMsgId="name_error"
              required={true}
            />
            <InputBox
              label="Email Address"
              onChangeHandler={this.onChange}
              multiLineInput={false}
              id="email"
              placeholder="Enter you email here"
              errorMsg="How could you go wrong here!!!🤦‍♂️"
              errorMsgId="email_error"
              required={true}
            />
            <InputBox
              label="Message"
              onChangeHandler={this.onChange}
              multiLineInput={true}
              id="message"
              placeholder="Type your message here"
              errorMsg="Just type something already😒"
              errorMsgId="email_error"
              required={true}
            />
            <CustomButton lhref="/contact" text="Send Message" />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
