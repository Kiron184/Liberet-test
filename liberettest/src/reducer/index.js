const initialState = {
  date: [],
  period: [],
  categorie: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SELECT_DATE":
      return {
        ...state,
        date: [action.payload],
      };

    case "SELECT_PERIOD":
      return {
        ...state,
        period: [action.payload],
      };

    case "SELECT_CATEGORIE":
      return {
        ...state,
        categorie: [action.payload],
      };
    default:
      return { ...state };
  }
}
