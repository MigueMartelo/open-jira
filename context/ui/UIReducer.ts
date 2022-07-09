import { UIState } from './';

type UITActionType =
  | { type: 'UI - Open Sidebar' }
  | { type: 'UI - Close Sidebar' }
  | { type: 'UI - Set Entry Form'; payload: boolean };

export const UIReducer = (state: UIState, action: UITActionType): UIState => {
  switch (action.type) {
    case 'UI - Open Sidebar':
      return {
        ...state,
        sidemenuOpen: true,
      };
    case 'UI - Close Sidebar':
      return {
        ...state,
        sidemenuOpen: false,
      };
    case 'UI - Set Entry Form':
      return {
        ...state,
        isAddingEntry: action.payload,
      };
    default:
      return state;
  }
};
