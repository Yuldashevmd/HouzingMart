import React from "react";
import { ContactInfo, Form, FormUp, FormDown } from "../style";

const ContactPage = ({ onChange }) => {
  return (
    <ContactInfo>
      <p>Contact information</p>
      <Form>
        <FormUp>
          <input
            onChange={onChange}
            name="name"
            type="text"
            placeholder="Property title*"
            required
          />
          <input
            name="type"
            onChange={onChange}
            type="text"
            placeholder="Type"
            required
          />
        </FormUp>
        <FormDown>
          <input
            onChange={onChange}
            type="text"
            placeholder="Property Description*"
            name="description"
          />
        </FormDown>
      </Form>
    </ContactInfo>
  );
};

export default ContactPage;
