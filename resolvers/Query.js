const { products, categories } = require("./../data/data");

exports.Query = {
  hello: () => "World!!!",
  products: () => products,
  product: (parent, args, context) => {
    const { id } = args;
    const index = products.findIndex((product) => product.id === id);
    const product = products[index];
    if (!product) return null;
    return product;
  },
  categories: () => categories,
  category: (parent, args, context) => {
    const { id } = args;
    const index = categories.findIndex((category) => category.id === id);
    const category = categories[index];
    if (!categories) return null;
    return category;
  },
};
