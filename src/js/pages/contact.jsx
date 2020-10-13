import React from "react";
import InputBox from "../components/inputBox";
import CustomButton from "../components/button";
import { contactForm, navLinks } from "../../assets/datastore";
import FormValidator from "../helper/validator";
import emailjs from "emailjs-com";
import Toast from "../components/toast";

const { REACT_APP_EMAIL_TEMPLATE, REACT_APP_EMAIL_CLIENT_SECRET, REACT_APP_EMAIL_SERVICE_ID } = process.env;
const toastData = {title: "Email sent successfully!"}
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      message: null,
      showToast: false
    };
    this.SubmitForm = this.SubmitForm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.sendMail = this.sendMail.bind(this);
  }
  onChange(target) {
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
  sendMail(){
    const template_params = {
      from_name : this.state.name,
      reply_to : this.state.email,
      subject : "Mail from - " + this.state.name,
      message_html : this.state.message
    }   
    emailjs.send(
      REACT_APP_EMAIL_SERVICE_ID, REACT_APP_EMAIL_TEMPLATE,
      template_params, REACT_APP_EMAIL_CLIENT_SECRET
      ).then(res => {
        this.setState({
          showToast: true
        })
        // alert('Email successfully sent!')
      })
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }
  SubmitForm() {
    const elementIdArray = ["name", "email", "message"];
    const isValid = FormValidator({
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    });
    if (isValid.name & isValid.message & isValid.email) {
      this.sendMail();
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
        {this.state.showToast && <Toast toastData={toastData} className="success"/>}
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
