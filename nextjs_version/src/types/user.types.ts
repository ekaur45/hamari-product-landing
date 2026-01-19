export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    details: UserDetails;
}
export interface UserDetails {
    id: string,
    bio: string,
    profileImage: string,
    phone: string,
    nationality: Nationality,
    dateOfBirth: string,
    gender: string,
    address: string,
    city: string,
    state: string,
    country: string,
    zipCode: string,
    skills: string
}
export interface Nationality {
    id: string,
    name: string,
}