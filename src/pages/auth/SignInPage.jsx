import React from 'react';
import SignInForm from '../../components/signIn/SignInForm';
import SignInPanel from '../../components/signIn/SignInPanel';
import AuthLayout from '../../components/common/AuthLayout';

const SignInPage = () => {
  return (
    <AuthLayout>
      <SignInForm />
      <SignInPanel />
    </AuthLayout>
  );
};

export default SignInPage;
