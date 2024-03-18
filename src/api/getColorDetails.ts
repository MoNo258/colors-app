export async function getColorDetails(colorId: number) {
  try {
    const response = await fetch(`https://reqres.in/api/products/${colorId}`, {
      method: "GET",
      headers: {
        Accept: `application/json;odata=nometadata;`,
      },
    });
    if (response.status === 200) {
      return (await response.json()) as ColorDetailsData;
    } else {
      throw Error(`${response.status}: ${response.statusText}`);
    }
  } catch (error) {
    return Promise.reject(error);
  }
}
