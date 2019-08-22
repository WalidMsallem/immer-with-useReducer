import produce from "immer";

const reducerFunction = (draft, action) => {
  switch (action.type) {
    case "decrement": {
      draft.count++;
      break;
    }

    case "decrement": {
      draft.count--;
      break;
    }
  }
};
export const countReducer = produce(reducerFunction);
