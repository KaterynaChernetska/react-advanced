export interface SignUpUser {
  fullName: string;
  email: string;
  password: string;
}

export interface SignInUser {
    email: string;
    password: string;
}

export interface AuthUserReturnType {
  token: string;
  user: User;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  createdAt: string;
}

