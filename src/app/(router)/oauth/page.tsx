//import { useEffect, useState } from "react";
//import axios from "axios";
//import { useRouter } from "next/router";

export default function Page() {
  return <h1>OAUTH PAGE</h1>;
}

//export default function Page() {
//  const [loading, setLoading] = useState(true); // To manage loading state
//  const [message, setMessage] = useState("Logging in to Oauth...");
//  const router = useRouter();

//  useEffect(() => {
//    // Extract the "code" from the URL parameters
//    const query = new URLSearchParams(window.location.search);
//    const code = query.get("code"); // Get the code from the query parameter

//    if (code) {
//      // If code exists, send it to the backend
//      const sendCodeToBackend = async () => {
//        try {
//          // Send code to the backend via axios
//          const response = await axios.post("/api/oauth/callback", { code });

//          // Handle the response from the backend, e.g., saving the token
//          if (response.data.success) {
//            setMessage("Login successful! Redirecting...");
//            setTimeout(() => {
//              // Redirect to the home page after successful login
//              router.push("/");
//            }, 2000);
//          } else {
//            setMessage("Login failed. Please try again.");
//          }
//        } catch (error) {
//          console.error("OAuth login failed", error);
//          setMessage("Error occurred during login. Please try again.");
//        } finally {
//          setLoading(false);
//        }
//      };

//      sendCodeToBackend();
//    } else {
//      setMessage("No OAuth code found in the URL.");
//      setLoading(false);
//    }
//  }, [router]);

//  return (
//    <div>
//      <h1>{message}</h1>
//      {loading && <p>Please wait...</p>}
//    </div>
//  );
//}
