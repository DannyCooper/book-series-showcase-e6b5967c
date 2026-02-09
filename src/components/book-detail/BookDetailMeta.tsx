import type { Book } from "@/data/books";

interface BookDetailMetaProps {
  book: Book;
}

const metaItems = (book: Book) => {
  const items: { icon: string; label: string }[] = [];
  if (book.pages) items.push({ icon: "📖", label: `${book.pages} Pages` });
  if (book.genre) items.push({ icon: "🔥", label: book.genre });
  if (book.year) items.push({ icon: "📅", label: book.year });
  items.push({ icon: "⭐", label: book.subtitle + " of 12" });
  return items;
};

const BookDetailMeta = ({ book }: BookDetailMetaProps) => {
  const items = metaItems(book);
  if (items.length === 0) return null;

  return (
    <section className="relative py-8 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-surface-elevated rounded border border-border/60 px-6 py-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2.5 text-foreground/80"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-body text-sm uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookDetailMeta;
