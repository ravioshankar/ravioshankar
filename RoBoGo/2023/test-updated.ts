export interface Rules {
  exclude: AudienceRule;
  include: AudienceRule;
}
export interface AudienceRule {
  and?: AudienceRule[] | string[];
  or?: AudienceRule[] | string[];
}

export function excludeElements(input: Rules, elementToExclude: string[]): Rules {
  if (!input || !input.exclude || !input.exclude.and || !input.include || !input.include.and) {
    // Handle empty input or missing properties
    return {
      exclude: { and: [] },
      include: { and: [] },
    };
  }

  const reducedInput: Rules = {
    exclude: {
      and: input.exclude.and.map(condition => {
        if (!condition.or || condition.or.length === 0) {
          // Handle empty 'or' array
          return { or: [] };
        }
        const filteredOr: string[] = condition.or.filter(value => !elementToExclude.includes(value));
        if (filteredOr.length === 0) {
          // Exclude conditions with empty 'or' arrays
          return null;
        }
        return { or: filteredOr };
      }).filter(condition => condition !== null),
    },
    include: {
      and: input.include.and.map(condition => {
        if (!condition.or || condition.or.length === 0) {
          // Handle empty 'or' array
          return { or: [] };
        }
        const filteredOr: string[] = condition.or.filter(value => !elementToExclude.includes(value));
        if (filteredOr.length === 0) {
          // Exclude conditions with empty 'or' arrays
          return null;
        }
        return { or: filteredOr };
      }).filter(condition => condition !== null),
    },
  };

  return reducedInput;
}


// Test the function with the provided input and element_to_exclude
const input = {
  "exclude": {
    "and": [
      {"or": [ "4qzg_1764"]},
      {"or": [ "4qzg_1764"]}
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

const expected = excludeElements(input, element_to_exclude);
console.log(JSON.stringify(expected));
