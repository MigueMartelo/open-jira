import { FC, ReactNode, useReducer } from 'react';
import { UIContext, UIReducer } from './';

export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
}

interface UIProviderProps {
  children?: ReactNode;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
};

export const UIProvider: FC<UIProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: 'UI - Open Sidebar' });
  };

  const closeSideMenu = () => {
    dispatch({ type: 'UI - Close Sidebar' });
  };

  const setAddingEntry = (showEntry: boolean) => {
    dispatch({ type: 'UI - Set Entry Form', payload: showEntry });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        //methods
        openSideMenu,
        closeSideMenu,
        setAddingEntry,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
