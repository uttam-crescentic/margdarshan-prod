import { Button, Card, Checkbox, Input, TextField, Typography, makeStyles } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";

interface FormValues {
  firstName: string;
  lastName: string;
  education: string;
  gender: string;
  email: string;
  password: string;
  dateOfBirth: string;
  city: string;
  state: string;
  // postalCode: string;
}

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  education: "",
  gender: "",
  email: "",
  password: "",
  dateOfBirth: "",
  city: "",
  state: "",
  // postalCode: "",
};

const validationSchema = yup.object().shape({
  firstName: yup.string().required("Full name is required"),
  lastName: yup.string().required("Last name is required"),
  education: yup.string().required("Education is required"),
  gender: yup.string().required("Gender is required"),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
  dateOfBirth: yup.string().required("Date of birth is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  // postalCode: yup.string().required("Postal code is required"),
});

export default function SignUp() {
  const url = "https://localhost:9000/auth/signup";
  const handleSubmit = async (values: FormValues) => {
    console.log(values);

    try {
      const response = await axios.post(url, values);
      console.log('Sign Up successful!', response.data);
    } catch (error) {
      console.error('Sign Up failed!', error);
    }
  }


  return (
    <div className="grid grid-cols-2">
      <div className="pt-24 mb-20 pl-10 pr-10 ">
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ errors, touched, isSubmitting }) => (
            <Form >
              <div className="border-grey-900/10 pl-2 pr-2 rounded-xl pb-12 border">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mb-5">
                  <div className="sm:col-span-3">
                    <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-grey-900">
                      Full name
                    </label>
                    <div className="mt-2">
                      <Field
                        type="text"
                        name="firstName"
                        id="firstName"
                     
                        className={`block w-full rounded-md border-0 py-1.5 text-grey-900 shadow-sm ring-1 ring-inset ${errors.firstName && touched.firstName ? "ring-red-500 placeholder:text-grey-400" : "ring-grey-500 placeholder:text-grey-400"
                          } sm:text-sm sm:leading-6`}
                      />
                      <ErrorMessage name="firstName" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-grey-900">
                      Last name
                    </label>
                    <div className="mt-2">
                      <Field
                        type="text"
                        name="lastName"
                        id="lastName"
                      
                        className={`block w-full rounded-md border-0 py-1.5 text-grey-900 shadow-sm ring-1 ring-inset ${errors.firstName && touched.firstName ? "ring-red-500 placeholder:text-grey-400" : "ring-grey-500 placeholder:text-grey-400"
                          } sm:text-sm sm:leading-6`}
                      />
                      <ErrorMessage name="lastName" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                  </div>


                  <div className="sm:col-span-3">
                    <label htmlFor="course" className="block text-sm font-medium leading-6 text-grey-900">
                      Education (currently pursuing)
                    </label>
                    <div className="mt-2">
                      <Field
                        as="select"
                        id="course"
                        name="course"
                        autoComplete="course-name"
                        className="block w-full rounded-md border-0 py-1.5 text-grey-900 shadow-sm ring-1 ring-inset ring-grey-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option value="">Select an option</option>
                        <option value="10th">10th</option>
                        <option value="12th(Arts)">12th(Arts)</option>
                        <option value="12th(Commerce)">12th(Commerce)</option>
                        <option value="12th(Science)">12th(Science)</option>
                        <option value="Post Graduate">Post Graduate</option>
                        <option value="Under Graduate">Under Graduate</option>
                      </Field>
                      <ErrorMessage name="course" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                  </div>


                  <div className="sm:col-span-3">
                    <label htmlFor="course" className="block text-sm font-medium leading-6 text-grey-900">
                      Gender
                    </label>
                    <div className="mt-2">
                      <Field
                        as="select"
                        id="gender"
                        name="gender"
                      
                        className="block w-full rounded-md border-0 py-1.5 text-grey-900 shadow-sm ring-1 ring-inset ring-grey-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option value="">Select an option</option>
                        <option value="10th">Male</option>
                        <option value="12th(Arts)">Female</option>
                        <option value="12th(Commerce)">other</option>

                      </Field>
                      <ErrorMessage name="gender" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-grey-900">
                      Email
                    </label>
                    <div className="mt-2">
                      <Field
                        type="email"
                        name="email"
                        id="email"
                     
                        className="block w-full rounded-md border-0 py-1.5 text-grey-900 shadow-sm ring-1 ring-inset ring-grey-500 placeholder:text-grey-400 sm:text-sm sm:leading-6"
                      />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-grey-900">
                      Password
                    </label>
                    <div className="mt-2">
                      <Field
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className={`bg-grey-50 border ${errors.password && touched.password ? 'border-red-600' : 'border-grey-300'
                          } text-grey-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                      />
                      <ErrorMessage name="password" className="text-red-600" component="div" />
                    </div>
                  </div>



                  <div className="col-span-full">
                    <label htmlFor="dateOfBirth" className="block text-sm font-medium leading-6 text-grey-900">
                      DOB
                    </label>
                    <div className="mt-2">
                      <Field
                        type="date"
                        name="dateOfBirth"
                        id="dateOfBirth"
                       
                        className={`block w-full rounded-md border-0 py-1.5 text-grey-900 shadow-sm ring-1 ring-inset ring-grey-500 placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.dateOfBirth && touched.dateOfBirth ? 'border-red-500' : ''
                          }`}
                      />
                      {errors.dateOfBirth && touched.dateOfBirth ? (
                        <div className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-grey-900">
                      City
                    </label>
                    <div className="mt-2">
                      <Field
                        type="text"
                        name="city"
                        id="city"
                       
                        className={`block w-full rounded-md border-0 py-1.5 text-grey-900 shadow-sm ring-1 ring-inset ring-grey-500 placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.city && touched.city ? 'border-red-500' : ''
                          }`}
                      />
                      {errors.city && touched.city ? <div className="text-red-500 text-sm mt-1">{errors.city}</div> : null}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="region" className="block text-sm font-medium leading-6 text-grey-900">
                      State / Province
                    </label>
                    <div className="mt-2">
                      <Field
                        type="text"
                        name="state"
                        id="state"
                        className={`bg-grey-50 border ${errors.password && touched.password ? 'border-red-600' : 'border-grey-300'
                          } text-grey-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                      />
                      <ErrorMessage name="state" className="text-red-600" component="div" />
                    </div>
                  </div>
                  {/* <div className="sm:col-span-2">
                    <label htmlFor="postalCode" className="block text-sm font-medium leading-6 text-grey-900">
                      ZIP / Postal code
                    </label>
                    <div className="mt-2">
                      <Field
                        type="number"
                        name="postalCode"
                        id="postalCode"
                        autoComplete="postal-code"
                        className={`bg-grey-50 border ${errors.password && touched.password ? 'border-red-600' : 'border-grey-300'
                          } text-grey-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                      />
                      <ErrorMessage name="postalCode" className="text-red-600" component="div" />
                    </div>
                  </div> */}
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full text-black bg-cherry-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="pt-36">
        <Image src='/Scholarship-dum-images/img-1.jpg' className="rounded" alt='img-1' width={1000} height={100}></Image>
      </div>
    </div>
  )
};

