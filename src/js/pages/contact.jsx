import React from "react";
import InputBox from "../components/inputBox";
import CustomButton from "../components/button";
import { contactForm, navLinks } from "../../assets/datastore";
import FormValidator from "../helper/validator";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      message: null,
    };
    this.SubmitForm = this.SubmitForm.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(target) {
    console.log(target.id);
    console.log(target.value);
    switch (target.id) {
      case "name":
        this.setState({
          name: target.value,
        });
        break;
      case "email":
        this.setState({
          email: target.value,
        });
        break;
      case "message":
        this.setState({
          message: target.value,
        });
        break;
    }
  }
  SubmitForm() {
    console.log("submitted");
    const elementIdArray = ["name", "email", "message"];
    const isValid = FormValidator({
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    });
    if (isValid.name & isValid.message & isValid.email) {
      //send mail
    } else {
      for (let index in elementIdArray) {
        const val = elementIdArray[index];
        var nameElement = document.getElementById(val);
        const errorMsgElement = document.getElementById(val + "_error");
        if (isValid[val]) {
          nameElement.classList.remove("error");
          errorMsgElement.classList.remove("show");
        } else {
          nameElement.classList.add("error");
          errorMsgElement.classList.add("show");
        }
      }
    }
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
            {contactForm.map((contact) => {
              return (
                <InputBox
                  label={contact.label}
                  onChangeHandler={this.onChange}
                  multiLineInput={contact.multiLineInput}
                  id={contact.id}
                  placeholder={contact.placeholder}
                  errorMsg={contact.errorMsg}
                  errorMsgId={contact.errorMsgId}
                  required={contact.required}
                />
              );
            })}
            <CustomButton text="Send Message" onSubmit={this.SubmitForm} />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
