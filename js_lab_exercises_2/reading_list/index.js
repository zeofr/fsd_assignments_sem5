const books = [
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', alreadyRead: true },
  { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', alreadyRead: false }
];

books.forEach((b) => {
  const msg = b.alreadyRead
    ? `You already read "${b.title}" by ${b.author}`
    : `You still need to read "${b.title}" by ${b.author}`;
  console.log(msg);
});
