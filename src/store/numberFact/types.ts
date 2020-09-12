export const FACT_FETCHED = 'FETCH_FACT';

export type State = {
  data: Data;
};

export type GetState = () => State;

export type StoreNumber = {
  type: typeof FACT_FETCHED;
  data: Data;
};

export type Data = {
  num: number | undefined;
  fact: string | undefined;
};
