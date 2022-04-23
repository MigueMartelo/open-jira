import { UIState } from './';

type UITActionType =
  | { type: 'UI - Open Sidebar' }
  | { type: 'UI - Close Sidebar' };

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
    default:
      return state;
  }
};
