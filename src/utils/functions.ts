export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const title = (name: string) =>
  `${name} | Артемовский городской округ - официальный сайт правовой информации`;
