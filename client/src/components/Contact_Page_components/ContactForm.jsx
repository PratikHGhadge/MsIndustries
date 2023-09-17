import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    state: "",
    city: "",
    phone: "",
    enquiry: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    state: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    enquiry: Yup.string().required("Required"),
  });

  const handleSubmit = (values) => {
    console.log(values); // Replace with your form submission logic
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="max-w-md mx-auto p-4 bg-white rounded ">
        <div className="mb-4">
          <label htmlFor="name" className="block  text-gray-700">
            Your Name *
          </label>
          <Field
            type="text"
            name="name"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <ErrorMessage name="name" component="div" className="text-red-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block  text-gray-700">
            Email *
          </label>
          <Field
            type="email"
            name="email"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <ErrorMessage name="email" component="div" className="text-red-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="state" className="block  text-gray-700">
            State *
          </label>
          <Field
            type="text"
            name="state"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <ErrorMessage name="state" component="div" className="text-red-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block  text-gray-700">
            City *
          </label>
          <Field
            type="text"
            name="city"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <ErrorMessage name="city" component="div" className="text-red-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block  text-gray-700">
            Phone/Mobile *
          </label>
          <Field
            type="text"
            name="phone"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <ErrorMessage name="phone" component="div" className="text-red-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="enquiry" className="block  text-gray-700">
            Enquiry Details *
          </label>
          <Field
            as="textarea"
            name="enquiry"
            className="w-full h-32 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <ErrorMessage
            name="enquiry"
            component="div"
            className="text-red-500"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 font-semibold text-white bg-blue-400 rounded-md hover:bg-blue-300 focus:outline-none"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
