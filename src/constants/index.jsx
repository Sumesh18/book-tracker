import { BookOpenCheck, BookOpen, BookMarked } from 'lucide-react';

export const features = [
  {
    icon: <BookOpen />,
    text: "Currently Reading",
    description:
      "Track your progress on the books you're in the middle of. Stay organized and never lose your place!",
  },
  {
    icon: <BookOpenCheck />,
    text: "Finished",
    description:
      "Celebrate your reading victories by adding completed books to your 'Finished' list—proof you conquered those pages!",
  },
  {
    icon: <BookMarked />,
    text: "Will Read",
    description:
      "Keep your TBR pile in check. Add books here to remember what’s next on your reading journey!",
  }
];