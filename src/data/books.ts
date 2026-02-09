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
  excerpt?: string;
}

export const books: Book[] = [
  {
    slug: "nun-more-deadly",
    title: "Nun More Deadly",
    subtitle: "Book 1",
    cover: book1,
    description: "Forgiveness is overrated. Venice's canals run red.",
    available: true,
    pages: 320,
    genre: "Action Comedy",
    year: "2024",
    synopsis: [
      "Sister Francesca never asked for a life of violence. But when a shadowy cabal within the Vatican threatens to unleash an ancient weapon upon the unsuspecting streets of Venice, she discovers that prayer alone won't cut it.",
      "Armed with a pair of blessed nunchucks, an encyclopaedic knowledge of pressure points, and a habit that conceals more hardware than a Swiss army knife, Francesca trades the convent for the canals — and the sinners won't see her coming.",
      "From moonlit rooftop chases to explosive gondola pursuits, Nun More Deadly is a razor-sharp action comedy that proves the pen isn't mightier than the nun.",
    ],
    pullQuote: "Forgiveness is overrated. Vengeance is divine.",
    excerpt:
      "The gondola slid beneath the Bridge of Sighs like a coffin on rails. Sister Francesca crouched in the prow, her habit billowing in the salt-tinged breeze, one hand steadying the lacquered wood and the other wrapped around the cold steel of a compact crossbow she'd borrowed — permanently — from the Vatican armoury.\n\n\"Lord, grant me patience,\" she muttered, sighting down the channel. \"But make it quick.\"\n\nThe target — a man known only as Il Cardinale — was three bridges ahead and accelerating. His speedboat carved a white scar across the moonlit water, engine screaming like a sinner at confession.\n\nFrancesca smiled. Sinners were her speciality.",
  },
  {
    slug: "nun-too-holy",
    title: "Nun Too Holy",
    subtitle: "Book 2",
    cover: book2,
    description: "Deadlier. Holier. Silentier. The mountains hold secrets.",
    available: true,
    pages: 340,
    genre: "Action Comedy",
    year: "2024",
    synopsis: [
      "The mountains of Bavaria hold secrets older than the Church itself. When Sister Francesca is dispatched to a remote alpine monastery, she expects silence, solitude, and maybe some decent strudel.",
      "What she gets is a body in the bell tower, a conspiracy that reaches the highest peaks of European politics, and a terrifying adversary who makes her previous enemies look like choirboys.",
    ],
    pullQuote: "Deadlier. Holier. Silentier.",
  },
  {
    slug: "nun-the-wiser",
    title: "Nun the Wiser",
    subtitle: "Book 3",
    cover: book3,
    description: "The action is baked in. Wisdom takes a back seat to explosives.",
    available: true,
    pages: 355,
    genre: "Action Comedy",
    year: "2025",
    synopsis: [
      "A baking competition in the English countryside seems like the perfect cover for Sister Francesca's latest mission. But beneath the bunting and butter cream lies something far more dangerous than a soggy bottom.",
      "When contestants start disappearing and the judge turns up face-down in a vat of custard, Francesca must sift through the clues before the whole thing goes pear-shaped.",
    ],
    pullQuote: "The action is baked in.",
  },
  {
    slug: "nun-of-your-business",
    title: "Nun of Your Business",
    subtitle: "Book 4",
    cover: book4,
    description: "Sisterhood is complicated. So is the Vatican.",
    available: true,
  },
  {
    slug: "nun-shall-pass",
    title: "Nun Shall Pass",
    subtitle: "Book 5",
    cover: book5,
    description: "Believing is tough. So is surviving this chapter.",
    available: true,
  },
  {
    slug: "nun-interrupted",
    title: "Nun, Interrupted",
    subtitle: "Book 6",
    cover: book6,
    description: "#PrayForTheYouth. One nun, one phone, zero patience.",
    available: true,
  },
  {
    slug: "nun-but-the-brave",
    title: "Nun But the Brave",
    subtitle: "Book 7",
    cover: book7,
    description: "Sometimes running is the answer. Sometimes it's just the start.",
    available: true,
  },
  {
    slug: "nun-of-the-above",
    title: "Nun of the Above",
    subtitle: "Book 8",
    cover: book8,
    description: "He's going to all his old haunts. The ghosts are waiting.",
    available: true,
  },
  {
    slug: "second-to-nun",
    title: "Second to Nun",
    subtitle: "Book 9",
    cover: book9,
    description: "When you got it, you got it. And she's got backup.",
    available: true,
  },
  {
    slug: "nun-believable",
    title: "Nun Believable",
    subtitle: "Book 10",
    cover: book10,
    description: "First contact. Last nerve. The truth is out there.",
    available: true,
  },
  {
    slug: "nun-but-the-script",
    title: "Nun But the Script",
    subtitle: "Book 11",
    cover: book11,
    description: "Lights. Camera. Existential crisis. Hollywood has no idea.",
    available: true,
  },
  {
    slug: "nun-done-and-dusted",
    title: "Nun, Done and Dusted",
    subtitle: "Book 12",
    cover: book12,
    description: "Smite the system. The final chapter.",
    available: true,
  },
];
