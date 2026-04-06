import React from 'react';
import SignUpPanel from '../../components/signUp/SignUpPanel';
import SignUpForm from '../../components/signUp/SignUpForm';

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[800px]">
        <SignUpPanel />
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
