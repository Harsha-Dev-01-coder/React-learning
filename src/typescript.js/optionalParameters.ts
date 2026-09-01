function greet(
  name: string,
  message?: string
) {
  return message
    ? `${message}, ${name}`
    : `Hello, ${name}`;
}

greet("Champ");