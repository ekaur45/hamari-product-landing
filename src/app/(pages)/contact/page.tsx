type Contact = {
    name: string;
    email: string;
    phone: string;
}
const getContact = async () => {
    const response = await fetch('http://localhost:8080/api/auth/test-error', {
        cache: 'no-store',
    });
    return await response.json();
}
export default async function Contact() {
    const contact = await getContact();
    return (
        <div>
            <h1>Contact</h1>
            <p>{contact.message}</p>
        </div>
    )
}