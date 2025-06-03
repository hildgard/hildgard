export type Faq = {
  id: number;
  question: string;
  answer: string;
  sources?: { label: string; url: string }[];
};

export const HilgardFaqs: Faq[] = [
  {
    id: 1,
    question: "Where are the grapes from?",
    answer:
      "Grapes are harvested from vineyards we own and farm. They come from Oakville Station, our premier Napa Valley vineyard, and the RMI, Tyree, and Hopkins vineyards that surround the UC Davis campus.",
    sources: [
      { label: "Oakville Station", url: "https://aggieai.ucdavis.edu/terms" },
      {
        label: "Napa Valley vineyard",
        url: "https://is3.ucdavis.edu/data.html",
      },
      {
        label: "Robert Mondavi Institute",
        url: "https://is3.ucdavis.edu/data.html",
      },
      {
        label: "Tyree",
        url: "https://is3.ucdavis.edu/data.html",
      },
      {
        label: "Hopkins vineyard",
        url: "https://is3.ucdavis.edu/data.html",
      },
    ],
  },
  {
    id: 2,
    question: "Who is the vineyard manager?",
    answer:
      "Guillermo Garcia Zamora is our vineyard manager. He was raised in Mendoza, Argentina, and after studying Plant Nutrition and Soil Fertility in Spain, returned to Argentina to become involved in the wine industry. In Argentina, he first worked at Bodega Norton as a Grower Relations Manager and assistant winemaker, then joining Paul Hobbs at Viña Cobos (Argentina) where he was in charge of vineyard ecological management. Guillermo came to the US in 2018 to earn his master's degree in Viticulture and Enology, becoming the vineyard manager for V&E upon his graduation in 2020.",
  },
  {
    id: 3,
    question: "Where can I buy the wine?",
    answer:
      "Our wines are small-batch and limited, as such, all of our wines are available exclusively for local pickup at Robert Mondavi Institute, 631 Hilgard Rd, Davis, CA 95616. ",
  },
  {
    id: 4,
    question: "Can I just show up and buy the wine?",
    answer:
      "No, wines will only be available for purchase at specific times. Please check our website for sales dates and times.",
  },
  {
    id: 5,
    question: "Can you ship or deliver?",
    answer: "Unfortunately, we do not currently deliver or ship our wine.",
  },
  {
    id: 6,
    question: "Is there a limit to the amount of wine I can buy?",
    answer:
      "Yes, we have a one case limit on the purchase of our Oakville Station wine. Similarly, there is a one case limit on student-produced wines.",
  },
];
