import AccountSettingsToggle from "./AccountSettingsToggle";

const AccountSettingsRow = ({ Icon, label, value, onChange }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <span className="text-lg">
          {Icon && <Icon className="h-5 w-5 text-gray-500" />}
        </span>
        <span className="text-sm text-gray-700 font-medium">{label}</span>
      </div>

      <AccountSettingsToggle value={value} onChange={onChange} />
    </div>
  );
};

export default AccountSettingsRow;
