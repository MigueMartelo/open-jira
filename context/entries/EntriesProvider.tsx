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
  entries: [
    {
      _id: uuid(),
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      _id: uuid(),
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      status: 'in-progress',
      createdAt: Date.now() - 2900000,
    },
    {
      _id: uuid(),
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      status: 'finished',
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuid(),
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      status: 'pending',
      createdAt: Date.now() - 100000,
    },
  ],
};

export const EntriesProvider: FC<EntriesProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  return <EntriesContext.Provider value={{ ...state }}>{children}</EntriesContext.Provider>;
};
