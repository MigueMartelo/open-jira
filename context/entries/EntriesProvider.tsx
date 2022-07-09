import { FC, useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
  entries: Entry[];
}

interface EntriesProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC<EntriesProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuid(),
      description,
      createdAt: Date.now(),
      status: 'pending',
    };

    dispatch({ type: '[Entry] - AddEntry', payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: '[Entry] - UpdateEntry', payload: entry });
  };

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};
