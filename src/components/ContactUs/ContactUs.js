import React from 'react';
import * as Yup from 'yup';

import { ErrorMessage, Field, Form, Formik } from "formik";

const validationSchema = Yup.object({
    name: Yup.string().required('This Field is Required'),
    email: Yup.string().email('Invalid email address').required('This Field is Required'),
    message: Yup.string().required('This Field is Required')
});

function ContactUs() {
    return (
        <div className="contact-us">
            <div className="container">
                <h1>Contact Page</h1>

                <Formik initialValues={{ name: "", email: "", message: ""}}
                        validationSchema={ validationSchema }
                        onSubmit={(value, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(value, null, 2));
                                setSubmitting(false);
                            }, 1000);
                        }}
                >

                    <Form>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <Field name="name" type="text" />
                            <ErrorMessage name="name" />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <Field name="email" type="email" />
                            <ErrorMessage name="email" />
                        </div>
                        <div>
                            <label htmlFor="message">Your Message:</label>
                            <Field name="message" as="textarea" />
                            <ErrorMessage name="message" />
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </Form>


                </Formik>
            </div>
        </div>
    );
}

export default ContactUs;