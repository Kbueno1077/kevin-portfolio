export function projectSlug(id: string): string {
  return id
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export interface FeaturedProject {
  title: string;
  summary: string;
  imgSrc: string;
  imageClass: string;
  wellClass: string;
  label: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: "TravelPaas",
    summary: "White-label airline booking engine for multi-tenant carriers.",
    imgSrc: "/projects/Pros.jpg",
    imageClass: "object-cover object-center",
    wellClass: "bg-white",
    label: "Client · Front10",
  },
  {
    title: "EZ2 Chart",
    summary: "AI SaaS that turns text and files into charts.",
    imgSrc: "/projects/ez-charts.png",
    imageClass: "object-contain object-center scale-[2.25]",
    wellClass: "bg-black",
    label: "Studio · WorkInWeb",
  },
  {
    title: "Olympus Dominoes",
    summary: "Cuban-dominoes scorepad with match history — web and iOS.",
    imgSrc: "/projects/olympus.png",
    imageClass: "object-contain object-center scale-[2]",
    wellClass: "bg-black",
    label: "Independent · Web + iOS",
  },
  {
    title: "Beer Warehouse",
    summary: "Personal beer journal with AI-powered discovery.",
    imgSrc: "/projects/beer-warehouse.png",
    imageClass: "object-cover object-center",
    wellClass: "bg-[#f3ead8]",
    label: "Independent · Web + mobile",
  },
];
