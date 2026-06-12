import React from 'react';
import SignInForm from '../../components/userPagesComponents/signIn/SignInForm';
import SignInPanel from '../../components/userPagesComponents/signIn/SignInPanel';
import AuthLayout from '../../components/layout/AuthLayout';

const SignInPage = () => {
  return (
    <AuthLayout>
      <SignInForm />
      <SignInPanel />
    </AuthLayout>
  );
};

export default SignInPage;
