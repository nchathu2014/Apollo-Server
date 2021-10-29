const { categories } = require("./../data/data");

exports.Product = {
  category: (parent, args, context) => {
    const { categoryId } = parent;
    return categories.find((category) => category.id === categoryId);
  },
};
