export type Faq = {
  id: number;
  question: string;
  answer: string;
  sources?: { label: string; url: string }[];
};

export const HilgardFaqs: Faq[] = [
  {
    id: 0,
    question: "What is Viticulture and Enology?",
    answer:
      "Viticulture is the study of how grapes are grown, with a focus on creating the best conditions for healthy, high-quality fruit. Enology is the science (and art) of transforming those grapes into wine through fermentation, blending, and aging.",
  },
  {
    id: 1,
    question: "Where are the grapes from?",
    answer:
      "Grapes are harvested from vineyards we own and farm. They come from Oakville Station, our premier Napa Valley vineyard, and the RMI, Tyree, and Hopkins vineyards that surround the UC Davis campus.",
    // sources: [
    //   { label: "Oakville Station", url: "https://aggieai.ucdavis.edu/terms" },
    //   {
    //     label: "Napa Valley vineyard",
    //     url: "https://is3.ucdavis.edu/data.html",
    //   },
    //   {
    //     label: "Robert Mondavi Institute",
    //     url: "https://is3.ucdavis.edu/data.html",
    //   },
    //   {
    //     label: "Tyree",
    //     url: "https://is3.ucdavis.edu/data.html",
    //   },
    //   {
    //     label: "Hopkins vineyard",
    //     url: "https://is3.ucdavis.edu/data.html",
    //   },
    // ],
  },
  {
    id: 2,
    question: "Who is the head winemaker?",
    answer:
      "Leticia Chacón-Rodriguez has been our winemaker and winery manager since 2019, supporting teaching and research in the UC Davis LEED Platinum Teaching and Research Winery. She is originally from Mexico City, where she earned an undergraduate degree in chemical engineering from Universidad Nacional Autónoma de México and a Master’s of Science in food science with an emphasis in enology at UC Davis. Leticia previously held roles at Safe Harbor Wine Storage, Treasury Wine Estates, E&J Gallo Winery, Golden State Vintners (now The Wine Group) and Delicato Vineyards.",
  },
  {
    id: 3,
    question: "Who is the vineyard manager?",
    answer:
      "Guillermo Garcia Zamora is our vineyard manager. He was raised in Mendoza, Argentina, and after studying plant nutrition and soil fertility in Spain, returned to Argentina to work in the wine industry. He first worked at Bodega Norton as a grower relations manager and assistant winemaker and then joined Paul Hobbs at Viña Cobos (Argentina) where he oversaw vineyard ecological management. Guillermo came to the US in 2018 to earn his master's degree in viticulture and enology, becoming the V&E vineyard manager when he graduated in 2020.",
  },
  {
    id: 4,
    question: "Where can I buy the wine?",
    answer:
      "Our wines are small-batch and limited, as such, they are available exclusively for local pickup at Robert Mondavi Institute, 631 Hilgard Rd, Davis, CA 95616",
  },

  {
    id: 5,
    question: "Can I just show up and buy the wine?",
    answer:
      "Wines will only be available for purchase at specific times. Please check our website for sales dates and times.",
  },
  {
    id: 6,
    question: "Can you ship or deliver?",
    answer: "Unfortunately, we do not currently deliver or ship our wine.",
  },
  {
    id: 7,
    question: "​Is there a limit to the amount of wine I can buy?",
    answer:
      "Yes, we have a one case limit on the purchase of our Oakville Station and student-produced wines.",
  },
  {
    id: 8,
    question: "Are there any discounts?",
    answer:
      "We do not offer discounts for multiple bottle purchases or for any other reason.",
  },
  {
    id: 9,
    question: "What should I bring when I buy wine?",
    answer:
      "Bring a valid credit or debit card and a valid form of identification to show that you are 21+ years of age.",
  },
  {
    id: 10,
    question: "Do you accept cash or checks?",
    answer: "No, we only accept credit or debit cards",
  },
  {
    id: 11,
    question: "Can I place an order over the phone?",
    answer:
      "Unfortunately, we cannot reserve wines in advance and operate on a first come - first served basis.",
  },
  {
    id: 12,
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
