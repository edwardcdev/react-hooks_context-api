interface User {
  email: string;
  password: string;
  confirmPassword?: string;
  displayName?: string;
}

export default User;