export async function searchRequestByParams(searchUrl: string) {
  //  const apiUrl = process.env.NEXT_PUBLIC_BE_API_SEARCH;

  try {
    //const requestUrl = `${apiUrl}/${encodeURIComponent(params)}`;
    const response = await fetch(searchUrl);

    if (!response.ok) {
      throw new Error("Search failed.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Server error during search.");
  }
}
