import { useState } from "react";
import "../styles.css";
import '../index.css';
import nestImage from "./NEST-Horizontal-Logo-01-1030x321.png";

export default function Register({ onRegister }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleSubmit= (e) => {
        e.preventDefault();
        if (!username.trim() || !password.trim()) return;
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        onRegister(username, password);
        setUsername("");
        setPassword("");
        setConfirmPassword("");
    };

    /* HTML Section */
}