exports.Query = {
  hello: () => "World!!!",
  products: (parent, args, context) => context.products,
  product: (parent, args, context) => {
    const { products } = context;
    const { id } = args;
    const index = products.findIndex((product) => product.id === id);
    const product = products[index];
    if (!product) return null;
    return product;
  },
  categories: () => categories,
  category: (parent, args, context) => {
    const { categories } = context;
    const { id } = args;
    const index = categories.findIndex((category) => category.id === id);
    const category = categories[index];
    if (!categories) return null;
    return category;
  },
};
