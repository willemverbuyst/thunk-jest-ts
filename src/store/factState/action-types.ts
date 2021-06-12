export enum ActionType {
  FACT_FETCHED = 'FETCH_FACT',
}

export type StoreNumber = {
  type: ActionType.FACT_FETCHED;
  payload: string;
};

export type FactStateActions = StoreNumber;
