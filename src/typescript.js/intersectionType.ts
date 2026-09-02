type Person = {
    name: string;
};

type Employee = {
    employeeId: number;
};

type EmployeePerson = Person & Employee;

const employee: EmployeePerson = {
    name: "Champ",
    employeeId: 101
};