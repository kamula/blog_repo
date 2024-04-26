/**
 * Filters blog posts based on a search query.
 * @param {Array} blogPosts - The array of blog posts.
 * @param {string} query - The search query.
 * @returns {Array} - The filtered array of blog posts.
 */
export const filterPosts = (blogPosts, query) => {
    const lowercasedQuery = query.toLowerCase();
    return blogPosts.filter(post =>
        post.title.toLowerCase().includes(lowercasedQuery) ||
        post.content.toLowerCase().includes(lowercasedQuery)
    );
};
