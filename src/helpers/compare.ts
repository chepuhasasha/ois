export const compare = (
  model: Record<string, unknown>,
  data: Record<string, unknown>
): boolean => {
  let result = false;
  Object.keys(model).forEach((key) => {
    if (data[key]) {
      switch (model[key].constructor) {
        case Object:
          if (data[key] instanceof Object) {
            result = compare(
              model[key] as Record<string, unknown>,
              data[key] as Record<string, unknown>
            );
          }
          return result;

        case RegExp:
          let r = model[key] as RegExp;
          result = r.test(JSON.stringify(data[key]));
          return result;

        case Array:
          let arr = model[key] as (() => void)[];
          arr.forEach((t) => {
            if (t === data[key].constructor) {
              result = true;
            }
          });
          return result;

        default:
          result = model[key] === data[key];
          return result;
      }
    }
  });
  return result;
};
