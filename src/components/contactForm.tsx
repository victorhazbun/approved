import * as React from "react"

export default class ContactForm extends React.Component {
  state = {
    botFieldStyle: {
      display: "none"
    },
    email: "",
    fullName: ""
  }

  public render() {
    return (
      <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
        <p style={this.state.botFieldStyle}>
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>
        <label>
          Fullname
          <input
            type="text"
            name="fullName"
            defaultValue={this.state.fullName}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            defaultValue={this.state.email}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
}