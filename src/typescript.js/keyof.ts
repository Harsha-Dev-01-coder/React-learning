interface User {
  id: number;
  name: string;
  email: string;
}

type UserKey = keyof User;