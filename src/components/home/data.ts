import { Dumbbell, Flame, Pizza, Scissors, UtensilsCrossed, type LucideIcon } from "lucide-react";

export type Variant = "food" | "street" | "gym" | "salon" | "gourmet";

export type Project = {
  name: string;
  category: string;
  description: string;
  url: string;
  urlShort: string;
  accent: string;
  pills: string[];
  icon: LucideIcon;
  variant: Variant;
  cta: string;
};

export function shortUrl(url: string) {
  return url.replace("https://alebazza.github.io/", "").replace(/\/$/, "");
}

export const PROJECTS: Project[] = [
  {
    name: "Pizza & Core",
    category: "Food Experience",
    description: "Menu dinamico ad alte prestazioni, caricamento istantaneo ed esperienza utente totalmente immersiva.",
    url: "https://alebazza.github.io/pizze/",
    urlShort: "alebazza.github.io/pizze",
    accent: "#ff9500",
    pills: ["Vanilla JS", "Responsive", "SEO on-page"],
    icon: Pizza,
    variant: "food",
    cta: "Ordina ora",
  },
  {
    name: "Kebab House",
    category: "Street Food",
    description: "Menu ottimizzato per ordini rapidi da mobile, con ogni piatto protagonista e percorso d'acquisto senza attriti.",
    url: "https://alebazza.github.io/Kebab/",
    urlShort: "alebazza.github.io/Kebab",
    accent: "#ff3b30",
    pills: ["Vanilla JS", "Mobile-first", "Menu dinamico"],
    icon: Flame,
    variant: "street",
    cta: "Scopri il menu",
  },
  {
    name: "Palestra Elite",
    category: "Energy & Motion",
    description: "Layout dinamico ad altissimo impatto per il mondo del fitness. Navigazione fulminea senza rallentamenti.",
    url: "https://alebazza.github.io/Palestra-gioppino/",
    urlShort: "alebazza.github.io/Palestra-gioppino",
    accent: "#5856d6",
    pills: ["Vanilla JS", "Mobile-first", "SEO on-page"],
    icon: Dumbbell,
    variant: "gym",
    cta: "Inizia ora",
  },
  {
    name: "Salone Parrucchiere",
    category: "Elegance & Style",
    description: "Grafica minimale, pulita e un'architettura che valorizza i servizi e attira immediatamente clienti.",
    url: "https://alebazza.github.io/Parrucchiere-/",
    urlShort: "alebazza.github.io/Parrucchiere-",
    accent: "#ff2d55",
    pills: ["Vanilla JS", "Accessibilità", "Responsive"],
    icon: Scissors,
    variant: "salon",
    cta: "Prenota",
  },
  {
    name: "Gusto & Co.",
    category: "Gourmet Portal",
    description: "Transizioni pulite, gestione dei contenuti fluida e design studiato per la massima conversione.",
    url: "https://alebazza.github.io/gusto-e-co-/",
    urlShort: "alebazza.github.io/gusto-e-co-",
    accent: "#4cd964",
    pills: ["Tailwind CSS", "Progetto demo"],
    icon: UtensilsCrossed,
    variant: "gourmet",
    cta: "Esplora",
  },
];

export const ABOUT_TEXT =
  "Il mio lavoro è scrivere siti web su misura per attività locali che vogliono distinguersi: pizzerie, saloni, palestre, ristoranti. Niente template, niente page builder: codice vero, veloce e onesto, costruito per farti trovare e convincere. Costruiamo insieme qualcosa di incredibile!";

export const SERVICES = [
  {
    n: "01",
    title: "Sito su misura",
    text: "HTML, CSS e JavaScript scritti a mano, senza WordPress né page builder. Un codice leggero e veloce, costruito sulle esigenze della tua attività.",
  },
  {
    n: "02",
    title: "Mobile-first",
    text: "Ogni sito nasce pensando allo smartphone, dove i tuoi clienti ti cercano. Navigazione fluida e tempi di caricamento rapidi su ogni connessione.",
  },
  {
    n: "03",
    title: "SEO on-page",
    text: "Struttura semantica, meta tag e dati strutturati ottimizzati fin dal primo giorno. Non un'opzione a pagamento: parte del lavoro standard.",
  },
  {
    n: "04",
    title: "Performance & accessibilità",
    text: "Niente librerie inutili né plugin da aggiornare. Un sito sicuro, accessibile e veloce, che carica in fretta ovunque.",
  },
  {
    n: "05",
    title: "Assistenza diretta",
    text: "Parli sempre con chi scrive il codice, mai con un account manager. Preventivo fisso, risposta entro 24 ore, senza sorprese.",
  },
];
