export async function getColors(pageNumber?: number) {
  try {
    const response = await fetch(`https://reqres.in/api/products?page=${pageNumber}`, {
      method: "GET",
      headers: {
        Accept: `application/json;odata=nometadata;`,
      },
    });
    if (response.status === 200) {
      return (await response.json()) as ColorsData;
    } else {
      throw Error(`${response.status}: ${response.statusText}`);
    }
  } catch (error) {
    return Promise.reject(error);
  }
}
