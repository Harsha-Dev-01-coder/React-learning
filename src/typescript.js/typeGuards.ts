type User = {
    name: string;
};

type Product = {
    price: number;
};

function isUser(
    value: User | Product
): value is User {
    return "name" in value;
}

const user: User = {
    name: "Champ"
};

const product: Product = {
    price: 1000
};

if (isUser(user)) {
    console.log(user.name);
}

if (isUser(product)) {
    console.log(product.name);
}