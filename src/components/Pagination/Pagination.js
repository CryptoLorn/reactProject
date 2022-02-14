export function createPages(pages = [], count = 0, currentPage) {
    if (count > 10) {
        if (currentPage > 5) {
            for (let i = currentPage - 5; i <= currentPage + 5; i++) {
                pages.push(i);
                if (i === count) break;
            }
        } else {
            for (let j = 1; j <= 10; j++) {
                pages.push(j);
                if (j === count) break;
            }
        }
    } else {
        for (let i = 1; i <= count; i++) {
            pages.push(i);
        }
    }
}