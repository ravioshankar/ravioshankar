function filterElements(input, element_to_exclude) {
  const result = JSON.parse(JSON.stringify(input)); // Create a deep copy of the input object

  // Exclude elements from the "exclude" section
  result.exclude.and.forEach((andCondition) => {
    andCondition.or = andCondition.or.filter((element) => !element_to_exclude.includes(element));
  });

  // Exclude elements from the "include" section
  result.include.and.forEach((andCondition) => {
    andCondition.or = andCondition.or.filter((element) => !element_to_exclude.includes(element));
  });

  return result;
}

// Test the function with the provided input and element_to_exclude
const input = {
  "exclude": {
    "and": [
      {"or": ["4av6", "4qzg_1764"]},
      {"or": ["4av8", "4qzg_1764"]}
    ]
  },
  "include": {
    "and": [
      {"or": ["4r3a_1763", "60dx", "4qzg_1764"]},
      {"or": ["4av2", "4av3", "4qzg_1764"]}
    ]
  }
};

const element_to_exclude = ["4qzg_1764"];

const expected = filterElements(input, element_to_exclude);
console.log(JSON.stringify(expected));
