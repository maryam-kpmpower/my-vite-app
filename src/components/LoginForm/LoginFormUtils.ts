export const validateLogin = (
  username: string,
  password: string,
  users: Record<string, string>,
): boolean => {
  // usernme must be a valid email address.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(username)) return false;

  // passwrod must satisfy minimum: 1 lower, 1 upper, 1 number, 1 special char, 8 chars.
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  if (!passwordRegex.test(password)) return false;

  // username and passowrd must exist and match
  if (!users[username]) return false;
  if (users[username] !== password) return false;

  return true;
};
