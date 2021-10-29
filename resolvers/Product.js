exports.Product = {
  category: (parent, args, context) => {
    const { categories } = context;
    const { categoryId } = parent;
    return categories.find((category) => category.id === categoryId);
  },
};
