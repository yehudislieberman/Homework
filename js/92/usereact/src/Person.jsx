export default function Person(props) {
    
    const { name, address, email } = props;

    return (
        <>
            <h1>Personal Info</h1>
            <h3>Name: {name}</h3>
            <h3>Address: {address}</h3>
            <h3>Email: {email}</h3>
        </>
    );
}