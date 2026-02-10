import book1 from "@/assets/1 NMD Digital HR.jpg";
import book2 from "@/assets/2 NTH Digital HR.jpg";
import book3 from "@/assets/3 NTW Digital HR.jpg";
import book4 from "@/assets/4 NYB Digital HR.jpg";
import book5 from "@/assets/5 NSP Digital HR.jpg";
import book6 from "@/assets/6 NI Digital HR.jpg";
import book7 from "@/assets/7 NBB Digital HR.jpg";
import book8 from "@/assets/8 NTA Digital HR.jpg";
import book9 from "@/assets/9 STN Digital HR.jpg";
import book10 from "@/assets/10 NBL Digital HR.jpg";
import book11 from "@/assets/11 NBS Digital HR.jpg";
import book12 from "@/assets/12 NDD Digital HR.jpg";
import rawBooks from "@/data/books.data.json";

export interface Book {
  slug: string;
  title: string;
  subtitle: string;
  cover: string;
  description: string;
  available: boolean;
  pages?: number;
  genre?: string;
  year?: string;
  synopsis?: string[];
  pullQuote?: string;
  purchase_links?: Record<string, string>;
  boxset_links?: Record<string, string>;
}

const coverMap: Record<string, string> = {
  "nun-more-deadly": book1,
  "nun-too-holy": book2,
  "nun-the-wiser": book3,
  "nun-of-your-business": book4,
  "nun-shall-pass": book5,
  "nun-interrupted": book6,
  "nun-but-the-brave": book7,
  "nun-of-the-above": book8,
  "second-to-nun": book9,
  "nun-believable": book10,
  "nun-but-the-script": book11,
  "nun-done-and-dusted": book12,
};

export const books: Book[] = (rawBooks as Book[]).map((book) => ({
  ...book,
  cover: coverMap[book.slug],
}));
