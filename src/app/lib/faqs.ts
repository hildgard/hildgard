export type Faq = {
  id: number;
  question: string;
  answer: string;
  sources?: { label: string; url: string }[];
};

export const HilgardFaqs: Faq[] = [
  {
    id: 4,
    question: "What is Viticulture and Enology?",
    answer:
      "Viticulture is the study of how grapes are grown, with a focus on creating the best conditions for healthy, high-quality fruit. Enology is the science (and art) of transforming those grapes into wine through fermentation, blending, and aging.",
  },
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
    id: 5,
    question: "Can I just show up and buy the wine?",
    answer:
      "No, wines will only be available for purchase at specific times. Please check our website for sales dates and times.",
  },
  {
    id: 6,
    question: "Can you ship or deliver?",
    answer: "Unfortunately, we do not currently deliver or ship our wine.",
  },
  {
    id: 7,
    question: "Is there a limit to the amount of wine I can buy?",
    answer:
      "Yes, we have a one case limit on the purchase of our Oakville Station wine. Similarly, there is a one case limit on student-produced wines.",
  },
  {
    id: 8,
    question: "Are there any discounts?",
    answer:
      "We do not offer discounts for multiple bottle purchases or for any other reason.",
  },
  {
    id: 9,
    question: "What should I bring when I go to campus to buy wine?",
    answer:
      "Bring a valid credit or debit card and a valid form of identification to determine that you are 21+ years of age. We do not accept cash or checks.",
  },
  {
    id: 10,
    question: "Do you accept cash or checks?",
    answer: "No, we only accept credit or debit cards",
  },
  {
    id: 11,
    question: "What should I bring when I go to campus to buy wine?",
    answer:
      "Bring a valid credit or debit card and a valid form of identification to determine that you are 21+ years of age. We do not accept cash or checks.",
  },
  {
    id: 12,
    question: "Can I place an order over the phone?",
    answer:
      "Unfortunately, we cannot reserve wines in advance, and operate on a first come - first served basis.",
  },
  {
    id: 13,
    question: "Who can I contact?",
    answer:
      "If you have any questions, please fill out our google form and someone from our team will connect with you.",
    sources: [
      {
        label: "Contact Form",
        url: "https://docs.google.com/forms/d/1_xbRfVVhoxrf1WhNJ2NGPMpRd4FnJlNKz2uYTGnDK9A/viewform?edit_requested=true",
      },
    ],
  },
];
