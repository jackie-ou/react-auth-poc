// Database
const users = [
  { id: 1, username: 'admin', password: '123' },
];

// JWT
const createJWT = (user) => {
  const header = 'jwt-header';
  const payload = {
    sub: user.id,
    name: user.username,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
  };
  const signature = 'signature';
  const base64 = btoa(JSON.stringify(payload));
  return `${header}.${base64}.${signature}`;
};

// Async Login
export const fakeLogin = async (username, password) => {
  // Verify credentials
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    throw new Error('Invalid credentials');
  }
  const token = createJWT(user);
  return { token };
}