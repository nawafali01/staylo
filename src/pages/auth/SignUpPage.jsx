import React from 'react';
import SignUpPanel from '../../components/signUp/SignUpPanel';
import SignUpForm from '../../components/signUp/SignUpForm';
import AuthLayout from '../../components/common/AuthLayout';

const SignUpPage = () => {
  return (
    <AuthLayout>
      <SignUpPanel />
      <SignUpForm />
    </AuthLayout>
  );
};

export default SignUpPage;
