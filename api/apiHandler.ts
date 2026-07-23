const apiHandler = async <R>(
  url: string,
  body?: BodyInit,
): Promise<[R | undefined, string | undefined]> => {
  try {
    const fetching = await fetch(url, {
      body,
    });
    const json = (await fetching.json()) as R | undefined;

    return [json, undefined];
  } catch (error: any) {
    const msg = error.message as string;
    return [undefined, msg];
  }
};

export default apiHandler;
