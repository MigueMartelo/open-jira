import { EntriesState } from './';

type EntriesActionType = { type: '[Entries] - AddEntry' };

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
  switch (action.type) {
    default:
      return state;
  }
};
