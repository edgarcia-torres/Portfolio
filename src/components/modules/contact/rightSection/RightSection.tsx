import React, { useState } from "react";
import { Wrapper, SubmitBtn } from "./RightSectionStyles";
import { sendContactForm } from '../../../lib/api'
import { useToast } from '@chakra-ui/react'

import theme from "../../../../config/theme"


const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;


const RightSection = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
  });

  const [mailFail, setMailFail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(" INFORMATION IS: " + formData);
  };

  const validateForm = () => {
    let isValid: boolean = true;
    const newErrors = { name: '', email: '', subject: '', message: '' };

    if (formData.name === '') { newErrors.name = '  Name is required'; isValid = false }
    if (formData.email === '') { newErrors.email = 'Email is required'; isValid = false }
    else {
      if (!emailRegex.test(formData.email)) {
        console.log("EMAIL ADDRESS VERIFIED INVALID")
        newErrors.email = 'Please enter a valid email address';
      } else {
        console.log("EMAIL ADDRESS IS VALID");
      }
    }
    if (formData.subject === '') { newErrors.subject = 'Please enter a subject'; isValid = false }
    if (formData.message === '') { newErrors.message = 'Please write a message.'; isValid = false }

    return isValid;
  };

  const handleSubmit = async (event) => {

    event.preventDefault();
    setIsSubmitting(true);

    const isValid = validateForm();
    if (isValid) {

      try {
        const response = await sendContactForm(formData);
        toast({
          title: "Message sent.",
          description: 'Message sent.',
          status: "success",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: "Message not sent, please use a different method to contact me.",
          status: "error",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
        console.error(error);
        setMailFail(true);
      } finally {
        //SUCCESS SENDING EMAIL
        setFormData({ name: '', email: '', message: '', subject: '' });
        setMailFail(false);
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false);
    }
  };


  return (
    <Wrapper>

      <form onSubmit={handleSubmit}>
        <div className="flex">
          <section>
            <input
              type="text"
              required
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='Enter your name'
            />
            <div className="invalid-feedback">
              {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            </div>
          </section>
          <section>
            <input
              type="email"
              required
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your  email"
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </section>
        </div>
        <br></br>
        <div>
          <section>
            <input
              type="text"
              required
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder='Enter the subject'
            />
            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
          </section>
        </div>
        <section>
          <textarea
            cols={30} rows={10}
            required
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message"
          />
          {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
        </section>

        <div className="btnContainer">
          <SubmitBtn
            disabled={isSubmitting}
            type="submit" marginTop="2rem">
            <span>Submit
              {isSubmitting && "ting"}
            </span>
            {isSubmitting && <span className="loader"></span>}
          </SubmitBtn>
        </div>
        <div>
          {mailFail && <span style={{ color: 'red' }}>Failed to send the email... </span>}
        </div>
      </form>

    </Wrapper >
  );
};

export default RightSection;
