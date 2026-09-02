interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type PublicUser = Pick<
  User,
  "id" | "name" | "email"
>;