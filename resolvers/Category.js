const { products } = require("./../data/data");

exports.Category = {
  products: (parent, args, context) => {
    const { id, name } = parent;
    return products.filter((product) => product.categoryId === id);
  },
};
