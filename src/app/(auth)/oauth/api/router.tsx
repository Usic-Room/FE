// API 요청 함수
async function RequestGoogleOAuthAuthorizationCode(code: string) {
  try {
    const response = await fetch(`http://localhost:8080/api/oauth/sendcode`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
        redirectUri: "http://localhost:3000/oauth",
      }),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error fetching OAuth data:", response.status);
      return null;
    }
  } catch (error) {
    console.error("Network error:", error);
    return null;
  }
}
