type OptionsType = {
  method: string;
  headers: {
    "accept": string;
    "x-cg-api-key": string;
  };
};

export const options: OptionsType = {
  method: "GET",
  headers: {
    "accept": "application/json",
    "x-cg-api-key": import.meta.env.VITE_API_KEY,
  },
};
