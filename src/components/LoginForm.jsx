import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { fetchCountries } from '../services/countriesService';
import { toast } from 'react-toastify';

const LoginForm = ({ onOtpSent }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries().then(res => {
      const filtered = res.data.filter(
        country => country.idd && country.idd.root && country.idd.suffixes
      );
      const sorted = filtered.sort((a, b) => a.name.common.localeCompare(b.name.common));
      setCountries(sorted);
    });
  }, []);

  const initialValues = { countryCode: '', phoneNumber: '' };

  const validationSchema = Yup.object({
    countryCode: Yup.string().required('Country code is required'),
    phoneNumber: Yup.string().required('Phone number is required').matches(/^\d{10}$/, 'Enter valid 10-digit number'),
  });

  const handleSubmit = (values) => {
    toast.success('OTP sent!');
    setTimeout(() => {
      onOtpSent(values.phoneNumber);
    }, 1500);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 border border-gray-700 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-xl text-white transition-all duration-300 hover:scale-[1.01]">
      <h2 className="text-3xl font-bold mb-6 text-center">🔐 Gemini Login</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className="space-y-6">
          <div>
            <label className="block mb-1 text-lg">Country Code</label>
            <Field as="select" name="countryCode" className="w-full border border-gray-600 p-3 rounded-xl bg-transparent">
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country.cca2} value={country.idd.root + country.idd.suffixes[0]}>
                  {country.flag} {country.name.common} ({country.idd.root}{country.idd.suffixes[0]})
                </option>
              ))}
            </Field>
            <ErrorMessage name="countryCode" component="div" className="text-red-400 text-sm" />
          </div>

          <div>
            <label className="block mb-1 text-lg">Phone Number</label>
            <Field type="text" name="phoneNumber" className="w-full border border-gray-600 p-3 rounded-xl bg-transparent" />
            <ErrorMessage name="phoneNumber" component="div" className="text-red-400 text-sm" />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-xl hover:scale-105 transition duration-200">
            📲 Send OTP
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
