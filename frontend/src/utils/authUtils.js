export const handleLogout = (navigate) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  alert("Logged out successfully!");
  if (navigate) {
    navigate("/signin");
  } else {
    window.location.href = "/signin";
  }
};
