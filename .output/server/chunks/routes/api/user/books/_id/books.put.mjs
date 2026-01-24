import { d as defineEventHandler, r as readValidatedBody, g as getRouterParam, c as createError } from '../../../../../nitro/nitro.mjs';
import { z } from 'zod';
import { U as User$1 } from '../../../../../_/User.mjs';
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
import 'mongoose';

const User = User$1;
const bodySchema = z.object({
  // _id: z.string().nullable(),
  book_title: z.string().nullable(),
  kind_of_book: z.string().nullable(),
  book_author: z.string().nullable(),
  book_start_date: z.string().nullable(),
  book_end_date: z.string().nullable(),
  notes: z.string().nullable(),
  booklist: z.boolean().nullable(),
  book_image: z.string().nullable()
});
const books_put = defineEventHandler(async (event) => {
  const { book_title, kind_of_book, book_author, book_start_date, book_end_date, notes, booklist, book_image } = await readValidatedBody(event, bodySchema.parse);
  const obj = {
    book_title,
    kind_of_book,
    book_author,
    book_start_date,
    book_end_date,
    notes,
    booklist,
    book_image
  };
  try {
    const id = getRouterParam(event, "id");
    await User.findOneAndUpdate(
      { "books._id": id },
      { $set: { "books.$": { ...obj } } },
      { new: true }
    );
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 401,
      message: "Please try again"
    });
  }
});

export { books_put as default };
//# sourceMappingURL=books.put.mjs.map
