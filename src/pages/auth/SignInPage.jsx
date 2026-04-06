import React from 'react';
import SignInForm from '../../components/signIn/SignInForm';
import SignInPanel from '../../components/signIn/SignInPanel';

const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[800px]">
        <SignInForm />
        <SignInPanel />
      </div>
    </div>
  );
};

export default SignInPage;
