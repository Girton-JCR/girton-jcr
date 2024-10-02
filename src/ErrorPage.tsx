import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div style={{ width: "100vw", height: "100vh", backgroundColor: "#144832", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center"}}>
                <img src="/logo.jpg" height="128px" width="128px" />
                <h1 style={{ color: "white", marginTop: "0px" }}>Sorry, that page doesn't exist</h1>
                <Link to="/" style={{ color: "white" }}><h2>Return to homepage</h2></Link>
            </div>
        </div>
    );
}

export default ErrorPage;