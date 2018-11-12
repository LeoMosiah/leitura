import _ from "lodash";

export const tranformArrayIntoMap = array => {
  const flattenArray = _.flatten(array);
  return _.assign(
    {},
    ...flattenArray.map(elem =>
      elem.id ? { [elem.id]: elem } : { [elem.name]: elem }
    )
  );
};

export const timestampToDate = timestamp => {
  const monthsMap = {
    1: "Jan",
    2: "Fev",
    3: "Mar",
    4: "Abr",
    5: "Mai",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Set",
    10: "Out",
    11: "Nov",
    12: "Dez"
  };

  const date = new Date(timestamp);

  const month = monthsMap[date.getMonth()];

  const day = date.getDate();

  return `${month} ${day}`;
};
