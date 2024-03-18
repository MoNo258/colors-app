export async function getColors(fetchParams: FetchParams) {
  const page = fetchParams.page || 1;
  const perPage = fetchParams.perPage || 5;
  const id = fetchParams.id || '';
  // const {page, id} = fetchParams;
  try {
    const response = await fetch(`https://reqres.in/api/products?page=${page}&per_page=${perPage}&id=${id}`, {
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
