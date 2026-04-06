const AccountSettingsCard = ({ children, className = "" }) => {
  return (
    <div className={`bg-white rounded-2xl p-7 shadow-sm ${className}`}>
      {children}
    </div>
  );
};

export default AccountSettingsCard;
