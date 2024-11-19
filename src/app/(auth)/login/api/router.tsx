export async function LoginByEmailAndPassword(email: string, password: string) {
  const apiUrl = process.env.NEXT_PUBLIC_BE_API_LOGIN_URL;

  try {
    const response = await fetch(apiUrl!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Login failed.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Server error during login.");
  }
}
