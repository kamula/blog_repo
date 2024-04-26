export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short', // "short" gives the abbreviated month name
        year: 'numeric'  // "numeric" gives the full year
    });
}


