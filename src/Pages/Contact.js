import React, { Component } from 'react'
import Footer from '../Components/Footer'
import MyAppBar from "../Components/MyAppBar"
import "../CSS/Pages/Contact.css"
import emailjs from 'emailjs-com';

export class Contact extends Component {

    state = {
        sent: false
    }

    sendMail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_9ig1ny9', e.target, 'user_rdnQ08wROAm4vj2HIcVdc')
            .then((result) => {
                console.log(result.text);
                if (result.text === "OK") {
                    this.setState({ sent: true })
                }
            }, (error) => {
                console.log(error.text);
            });
    }

    render() {
        return (
            <div style={{ backgroundColor: "white", color: "black" }} >
                <MyAppBar />
                <div style={{ height: "5px", backgroundColor: "black" }}></div>

                <div className="wrap" >
                    <div className="width-change">
                        <h1>
                            Contact Us
                        </h1>
                        <div>
                            <h3>
                                Leave your message here:
                            </h3>
                            <form onSubmit={this.sendMail} >
                                <div>
                                    <label>Name</label>
                                </div>
                                <div>
                                    <input name="name" required placeholder="Full Name" />
                                </div>
                                <div>
                                    <label>Email</label>
                                </div>
                                <div>
                                    <input name="email" required placeholder="Email" />
                                </div>
                                <div>
                                    <label>Message</label>
                                </div>
                                <div>
                                    <textarea name="message" required placeholder="Type your message here.." />
                                </div>
                                <div>
                                    <input type="submit" style={{ backgroundColor: "black", color: "white" }} value="Send" />
                                </div>
                            </form>

                            {
                                this.state.sent ? (
                                    <div>
                                        Message sent! Thank You for contacting us. We reply as soon as possible.
                                    </div>
                                ) : (
                                    <div></div>
                                )
                            }


                            <p>
                                To contact us, you can also mail at mail@pidgin.online
                            </p>
                            <p>
                                Phone: +91 99101 97196
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Contact
