import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

const OtpForm = ({ onSuccess }) => {
  const initialValues = { otp: '' };

  const validationSchema = Yup.object({
    otp: Yup.string().required('OTP is required').length(4, 'OTP must be 4 digits'),
  });

  const handleSubmit = (values) => {
    toast.success('OTP Verified!');
    setTimeout(() => {
      onSuccess();
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 border border-gray-700 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-xl text-white transition-all duration-300 hover:scale-[1.01]">
      <h2 className="text-3xl font-bold mb-6 text-center">🔐 Enter OTP</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className="space-y-6">
          <div>
            <label className="block mb-1 text-lg">OTP</label>
            <Field type="text" name="otp" className="w-full border border-gray-600 p-3 rounded-xl bg-transparent" />
            <ErrorMessage name="otp" component="div" className="text-red-400 text-sm" />
          </div>

          <button type="submit" className="w-full bg-green-600 text-white p-3 rounded-xl hover:scale-105 transition duration-200">
            ✅ Verify
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default OtpForm;
