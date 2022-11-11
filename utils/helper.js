import _ from "lodash";

export function prepareForSerializatoin(obj) {
  return _.mapValues(obj, (value) =>
    typeof value === "undefined" ? null : value
  );
}

export const convert = (value) => (typeof value === "undefined" ? null : value);
