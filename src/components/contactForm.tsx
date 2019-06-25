import * as React from "react"

export default class ContactForm extends React.Component {
  state = {
    email: "",
    fullName: ""
  }

  public render() {
    return (
      <form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
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