export async function findBook({ data, book_title, book_author }: any) {

    const filterToFindBook = data.items.filter((item: any) => {
        const splitAuthors = book_author.split(",");
        const findAuthors = item?.volumeInfo.authors.filter((item: any) => splitAuthors.includes(item)).length > 0;
        const findBookTitle = item?.volumeInfo.title?.includes(book_title);

        switch (true) {
            case findAuthors:
                return item;
                break
            case findBookTitle && findAuthors:
                return item;
                break
            default:
                return '';
        }
    });

    return filterToFindBook[0]?.volumeInfo.imageLinks.thumbnail ?? '';
};