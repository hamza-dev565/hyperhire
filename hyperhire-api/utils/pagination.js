const paginate = async (model, page, pageSize) => {
  const currentPage = parseInt(page, 10) || 1;
  const itemsPerPage = parseInt(pageSize, 10) || 25;
  const startIndex = (currentPage - 1) * itemsPerPage;

  const totalItems = await model.count();
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedResult = await model.findAll({
    limit: pageSize,
    offset: startIndex,
    order: [["id", "DESC"]],
  });

  const paginationInfo = {
    currentPage,
    itemsPerPage,
    totalPages,
    totalItems,
    hasNextPage: currentPage < totalPages,
    hasPreviousPage: currentPage > 1,
  };

  return {
    paginatedResult,
    paginationInfo,
  };
};

module.exports = {
  paginate,
};
