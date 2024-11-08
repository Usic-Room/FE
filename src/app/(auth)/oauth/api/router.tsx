import "server-only";

export async function sendCode(code: string) {
  const apiUrl = process.env.NEXT_PUBLIC_BE_API;

  try {
    const response = await fetch(`${apiUrl}/oauth/sendcode`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: code,
        redirectUri: "http://localhost:3000/",
      }),
    });

    if (!response.ok) {
      throw new Error("Login failed.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Server error during sending code.");
  }
}
