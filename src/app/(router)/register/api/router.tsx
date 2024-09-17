export async function createEmailCode() {
  const apiUrl = process.env.NEXT_PUBLIC_BE_API_EMAIL_CREATE;

  try {
    const response = await fetch(apiUrl!, {
      method: "POST",
    });

    if (!response.ok) {
      throw new Error("Failed to request verification code.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Server error while requesting verification code.");
  }
}

//TODO: auth정책 변경으로 인한 수정 필요
export async function verifyEmailCode(code: string) {
  const apiUrl = process.env.NEXT_PUBLIC_BE_API_EMAIL_VERIFY;

  try {
    const response = await fetch(apiUrl!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    });

    if (!response.ok) {
      throw new Error("Verification failed.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Server error during verification.");
  }
}
