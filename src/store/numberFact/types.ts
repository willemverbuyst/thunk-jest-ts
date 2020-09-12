export const FACT_FETCHED = 'FETCH_FACT';

export type StoreState = {
  fact: string | undefined;
};

export type GetState = () => StoreState;

export type StoreNumber = {
  type: typeof FACT_FETCHED;
  fact: string;
};
