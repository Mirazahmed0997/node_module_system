

export interface Address {
    city: string;
    street: string;
    zip: number;
}

export interface UserInterface {
    firstName: string;
    lastName: string;
    age: number; // ✅ should be number
    email: string;
    password: string;
    role: "USER" | "ADMIN" | "SUPER ADMIN";  // ✅ must match schema enum
    address: Address;
}



export interface userInterfaceMethod{
    hashPassword(password: String): String
}

