import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";
import ProfileCard from "../../components/userProfile/userProfileCard";
import Header from "../../components/utils/header";
import ChangePassword from "../../components/userProfile/changePassword";
import Container from "../../components/utils/Container";
import { Toaster } from "react-hot-toast";

function AdminProfile() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setEmail(user.email);
            setUsername(user.username);
        }
    }, []);

    const logout = () => {
        AuthService.logout_req();
        localStorage.clear();
        navigate("/");
        window.location.reload();
    };

    return (
        <Container activeNavId={8}>
            <Header title="Settings" />

            <button
                onClick={logout}
                style={{
                    backgroundColor: "red",
                    color: "white",
                    padding: "12px 25px",
                    margin: "20px 0",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "bold",
                    position: "relative",
                    zIndex: 9999
                }}
            >
                Logout
            </button>

            <Toaster />

            <ProfileCard username={username} email={email} />

            <ChangePassword email={email} />
        </Container>
    );
}

export default AdminProfile;