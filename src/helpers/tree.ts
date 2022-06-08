export function tree(data: Record<string, unknown>) {
  if (typeof data === "object") {
    for (let key in data) {
      data[key] = tree(data[key] as Record<string, unknown>);
    }
    return new Proxy(data, {
      get(target, p: string) {
        return target[p];
      },
      set: (target, p: string, value) => {
        console.log("123");
        return true;
      },
    });
  }
  return data;
}
