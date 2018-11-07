import _ from "lodash";

export const tranformArrayIntoMap = array => {
  const flattenArray = _.flatten(array);
  return _.assign(
    {},
    ...flattenArray.map(
      elem => (elem.id ? { [elem.id]: elem } : { [elem.name]: elem })
    )
  );
};
