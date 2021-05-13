import { UserContext } from "../contexts/UserContext";
import { useAuth } from "../hooks/useAuth";

function MyApp({ Component, pageProps }) {
  const authInfo = useAuth();

  return (
    <UserContext.Provider value={authInfo}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
