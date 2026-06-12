import React from 'react';
import SignUpPanel from '../../components/userPagesComponents/signUp/SignUpPanel';
import SignUpForm from '../../components/userPagesComponents/signUp/SignUpForm';
import AuthLayout from '../../components/layout/AuthLayout';

const SignUpPage = () => {
  return (
    <AuthLayout>
      <SignUpPanel />
      <SignUpForm />
    </AuthLayout>
  );
};

export default SignUpPage;
