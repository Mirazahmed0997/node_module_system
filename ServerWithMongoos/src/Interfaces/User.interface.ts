export interface UserInterface {
    firstName: string;
    lastName: string;
    age: number;  // ✅ should be number
    email: string;
    password: string;
    role: "USER" | "ADMIN" | "SUPER ADMIN";  // ✅ must match schema enum
}
