import { Helmet } from "react-helmet";

const styles = {
    container: {
        minHeight: 'calc(100vh -50px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 500,
        fontSize: 48,
        textAlign: 'center',
    },
};

export default function Home() {
    return (
        <div style={styles.container}>
             <Helmet>
                <title>Phonebook App</title>
            </Helmet>
            <h1 style={styles.title}>
                Phonebook App{' '}
                <span role="img" aria-label="Greeting icon">
                 📞
                </span>
            </h1>
            <p>Just Log In</p>
        </div>
    )
}