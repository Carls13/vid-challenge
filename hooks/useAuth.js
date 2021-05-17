import { useState } from "react";

export const useAuth = () => {
    const [auth, setAuth] = useState(null);

    return { auth, setAuth };
};