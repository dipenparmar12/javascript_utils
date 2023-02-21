/**
 * Convert a string into a URL-friendly slug.
 *
 * @param {string} str - The string to convert into a slug.
 * @param {string} [separator="-"] - The character to use as a separator. Defaults to "-".
 * @returns {string} - The slugified string.
 */
function slugify(str, separator = "-") {
  return str
    .toString() // Convert to string
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading and trailing spaces
    .replace(/\s+/g, separator) // Replace spaces with separator
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

export default slugify
