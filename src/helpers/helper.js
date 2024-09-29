const shortenText = (text) => text.split(" ").slice(0, 3).join("");

const searchProduct = (products, search) => {
  if (!search) return products;
  return products.filter((p) => p.title.toLowerCase().includes(search));
};

const categoryProduct = (products, category) => {
  if (!category) return products;
  return products.filter((p) => p.category.toLowerCase() === category);
};
const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  return { ...currentQuery, ...newQuery };
};
const getInitialQuery = (serachParams) => {
  const loadQuery = {};
  const searchQ = serachParams.get("search");
  const categoryQ = serachParams.get("category");
  if (searchQ) loadQuery.search = searchQ;
  if (categoryQ) loadQuery.category = categoryQ;
  return loadQuery;
};

const sumProducts = (products) => {
  const itemsCounter = products.reduce((counter, product) => counter + product.quantity, 0);
  const total = products.reduce((total, product) => total + Number(product.price) * product.quantity, 0).toFixed(2);
  return {
    itemsCounter,
    total,
  };
};
const productQuantity = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return 0;
  } else {
    return state.selectedItems[index].quantity;
  }
};
export { shortenText, searchProduct, categoryProduct, createQueryObject, getInitialQuery, sumProducts, productQuantity };
