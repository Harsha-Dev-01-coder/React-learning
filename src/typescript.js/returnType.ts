function getUser() {
  return {
    id: 1,
    name: "Champ"
  };
}

type User = ReturnType<typeof getUser>;