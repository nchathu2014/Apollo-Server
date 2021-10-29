exports.Category = {
  products: (parent, args, context) => {
    const { products } = context;
    const { id } = parent;
    return products.filter((product) => product.categoryId === id);
  },
};
