const initialState = {
  date: [{ day: { day: "Dom", date: "28" } }],
  period: ["11:00 am - 12:00 am"],
  categorie: [],
  service: ["Beef"],
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
    case "SELECT_SERVICE":
      return {
        ...state,
        service: [action.payload],
      };
    default:
      return { ...state };
  }
}
