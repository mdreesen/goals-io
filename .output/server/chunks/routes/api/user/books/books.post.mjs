import { d as defineEventHandler, r as readValidatedBody, c as createError } from '../../../../nitro/nitro.mjs';
import { z } from 'zod';
import { l as loggedInUser } from '../../../../_/loggedInUser.mjs';
import { U as User$1 } from '../../../../_/User.mjs';
import 'node:http';
import 'node:https';
import 'node:crypto';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ipx';
import '../../../../_/mongodb.mjs';
import 'mongoose';

async function images_books({ book_title, book_author }) {
  var _a;
  const splitAuthor = book_author.split(",");
  const useAuthor = (_a = splitAuthor[0]) != null ? _a : book_author;
  try {
    const openLibraryTitle = await $fetch(`https://openlibrary.org/search.json?q=${book_title}?author=${useAuthor}&limit=5`);
    const openLibraryAllTitles = await $fetch(`https://openlibrary.org/search.json?q=${book_title}&limit=5`);
    const useOpenLibraryTitle = await openLibraryTitle;
    const useOpenLibraryAllTitles = await openLibraryAllTitles;
    const filterTitles = useOpenLibraryAllTitles == null ? void 0 : useOpenLibraryAllTitles.docs.filter((item) => {
      var _a2, _b;
      return (_b = (_a2 = item == null ? void 0 : item.author_name) == null ? void 0 : _a2.includes(useAuthor)) != null ? _b : "";
    });
    const useCovers = filterTitles.length > 0 ? filterTitles : useOpenLibraryTitle == null ? void 0 : useOpenLibraryTitle.docs;
    const findCover = useCovers.find((item) => item == null ? void 0 : item.cover_i);
    return (findCover == null ? void 0 : findCover.cover_i) ? `https://covers.openlibrary.org/a/id/${findCover == null ? void 0 : findCover.cover_i}.jpg` : `/images/thumbnail_none.png`;
  } catch (error) {
    console.log(error);
    return error;
  }
}

const User = User$1;
const bodySchema = z.object({
  book_title: z.string().nullable(),
  kind_of_book: z.string().nullable(),
  book_author: z.string().nullable(),
  book_start_date: z.string().nullable(),
  notes: z.string().nullable(),
  booklist: z.boolean().nullable()
});
const books_post = defineEventHandler(async (event) => {
  const { book_title, kind_of_book, book_author, book_start_date, notes, booklist } = await readValidatedBody(event, bodySchema.parse);
  const obj = {
    book_title,
    kind_of_book,
    book_author,
    book_start_date,
    notes,
    booklist
  };
  try {
    const user = await loggedInUser(event);
    const useImages = await images_books({ book_title, book_author });
    await User.findOneAndUpdate({ email: user == null ? void 0 : user.email }, { $addToSet: { books: { ...obj, book_image: useImages } } }, { new: true });
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 401,
      message: "Please try again"
    });
  }
});

export { books_post as default };
//# sourceMappingURL=books.post.mjs.map
