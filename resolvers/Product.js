exports.Product = {
  category: (parent, args, context) => {
    const { categories } = context;
    const { categoryId } = parent;
    return categories.find((category) => category.id === categoryId);
  },

  review: ({ id }, args, { reviews }) =>
    reviews.filter((review) => review.productId === id),
};
