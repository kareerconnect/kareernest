import {useState}  from "react";
import toast from "react-hot-toast";

const useSignup = () => {
    const [loading, setLoading] = useState(false);

    const signup = async({email, username, password}) => {
        const success = handleInputErrors({email, username, password})
        if(!success) return;

        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({ email, username, password }),
            });

            const data = await res.json();
            console.log(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }

    }

    return { loading, signup };
}

export default useSignup;

function handleInputErrors({email, username, password}){
    if(!email || !username || !password) {
        toast.error('Please fill in all details')
        return false
    }

    if(password.length < 6){
        toast.error('Password must be at least 6 characters')
        return false
    }

    return true;
}