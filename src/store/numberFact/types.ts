export const FACT_FETCHED = 'FETCH_FACT';

export type FactState = {
  fact: string | null;
};

export type GetState = () => FactState;

export type StoreNumber = {
  type: typeof FACT_FETCHED;
  fact: string;
};
