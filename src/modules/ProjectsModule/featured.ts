export interface FeaturedProject {
  title: string;
  summary: string;
  imgSrc: string;
  imageClass: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: "TravelPaas",
    summary:
      "White-label airline booking engine for multi-tenant carriers, built on the PROS Offer/Order platform.",
    imgSrc: "/projects/Pros.jpg",
    imageClass: "object-cover object-center",
  },
  {
    title: "EZ2 Chart",
    summary:
      "Full-stack AI SaaS that turns text and files into charts, with auth, billing, and a no-code editor.",
    imgSrc: "/projects/ez-charts.png",
    imageClass: "object-cover object-center scale-110",
  },
  {
    title: "Snappy Kit",
    summary:
      "Free, privacy-first image and diff toolkit that runs entirely in the browser — files never leave your device.",
    imgSrc: "/projects/snappy-kit.png",
    imageClass: "object-contain object-center bg-black",
  },
];
