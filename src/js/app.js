function orderByProps(object, arr) {
  const result = arr;
  Object.entries(object).sort().forEach(([key, value]) => {
    const element = { key, value };
    let notFound = true;
    for (let i = 0; i < arr.length; i += 1) {
      if (key === arr[i]) {
        result[i] = element;
        notFound = false;
      }
    }
    if (notFound) {
      result.push(element);
    }
  });

  return result;
}

export default orderByProps;
