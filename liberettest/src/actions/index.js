export function selectDate(date) {
  return {
    type: "SELECT_DATE",
    payload: date,
  };
}
export function selectPeriod(period) {
  return {
    type: "SELECT_PERIOD",
    payload: period,
  };
}
export function selectCategorie(categorie) {
  let cat = [];
  categorie.forEach((c) => {
    cat.push(c.strCategory);
  });
  return {
    type: "SELECT_CATEGORIE",
    payload: cat,
  };
}

export function selectService(service) {
  return {
    type: "SELECT_SERVICE",
    payload: service,
  };
}
