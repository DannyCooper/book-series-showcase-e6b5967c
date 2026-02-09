import { useParams, Navigate } from "react-router-dom";
import { books } from "@/data/books";
import BookDetailNav from "@/components/book-detail/BookDetailNav";
import BookDetailHero from "@/components/book-detail/BookDetailHero";
import BookDetailSynopsis from "@/components/book-detail/BookDetailSynopsis";
import BookDetailMeta from "@/components/book-detail/BookDetailMeta";
import BookDetailExcerpt from "@/components/book-detail/BookDetailExcerpt";
import BookDetailSeriesNav from "@/components/book-detail/BookDetailSeriesNav";
import BookDetailCTA from "@/components/book-detail/BookDetailCTA";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const BookDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const book = books.find((b) => b.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!book) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="min-h-screen bg-background">
      <BookDetailNav />
      <BookDetailHero book={book} />
      <BookDetailMeta book={book} />
      <BookDetailSynopsis book={book} />
      <BookDetailExcerpt book={book} />
      <BookDetailSeriesNav currentBook={book} />
      <BookDetailCTA book={book} />
      <Footer />
    </main>
  );
};

export default BookDetail;
