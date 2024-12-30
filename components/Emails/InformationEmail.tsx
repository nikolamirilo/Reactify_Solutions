import { Container, Heading, Text, Link } from "@react-email/components";


function InformationEmail({ email, name, message, subject }: { email: string; name: string; message: string; subject: string }) {
    return (
        <Container
            style={{
                backgroundColor: "#1D2144", // Background color remains the same
                fontFamily: "Arial, sans-serif",
                padding: "20px",
                borderRadius: "8px",
                maxWidth: "600px",
                margin: "0 auto",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                border: `2px solid ${"#1B998B"}`, // Secondary color border
            }}
        >
            <Heading
                style={{
                    fontSize: "28px",
                    marginBottom: "20px",
                    color: "#1B998B", // Secondary color for heading text
                    textAlign: "center",
                    borderBottom: `3px solid ${"#1B998B"}`,
                    paddingBottom: "10px",
                }}
            >
                {subject}
            </Heading>
            <Text
                style={{
                    fontSize: "16px",
                    marginBottom: "10px",
                    color: "#ffffff", // White text for labels
                    lineHeight: "1.6",
                }}
            >
                <strong>Name:</strong> {name}
            </Text>
            <Text
                style={{
                    fontSize: "16px",
                    marginBottom: "10px",
                    color: "#ffffff", // White text for labels
                    lineHeight: "1.6",
                }}
            >
                <strong>Email: </strong><Link href={`mailto:${email}`} style={{ color: "#1B998B" }}>{email}</Link>
            </Text>
            <Text
                style={{
                    fontSize: "16px",
                    marginBottom: "10px",
                    color: "#ffffff", // White text for labels
                    lineHeight: "1.6",
                }}
            >
                <strong>Message:</strong> {message}
            </Text>
            <Text
                style={{
                    fontSize: "14px",
                    marginTop: "20px",
                    color: "#ffffff", // White text for footer
                    textAlign: "center",
                }}
            >
                Visit us at{" "}
                <a
                    href="https://www.reactify-solutions.com/"
                    style={{ color: "#1B998B", textDecoration: "none" }} // Secondary color for link
                >
                    Reactify Solutions
                </a>
            </Text>
            <Text
                style={{
                    fontSize: "14px",
                    marginTop: "5px",
                    color: "#ffffff", // White text for footer
                    textAlign: "center",
                }}
            >
                &copy; {new Date().getFullYear()} Reactify Solutions. All rights reserved.
            </Text>
        </Container>
    );
}

export default InformationEmail;
