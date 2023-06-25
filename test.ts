interface Input {
  exclude: {
    and: { or: string[] }[];
  };
  include: {
    and: { or: string[] }[];
  };
}

interface Expected {
  exclude: {
    and: { or: string[] }[];
  };
  include: {
    and: { or: string[] }[];
  };
}

function reduceInput(input: Input, elementToExclude: string[]): Expected {
  const reducedInput: Expected = {
    exclude: {
      and: input.exclude.and.map((condition) => {
        const filteredOr: string[] = condition.or.filter(
          (value) => !elementToExclude.includes(value)
        );
        return { or: filteredOr };
      }),
    },
    include: {
      and: input.include.and.map((condition) => {
        const filteredOr: string[] = condition.or.filter(
          (value) => !elementToExclude.includes(value)
        );
        return { or: filteredOr };
      }),
    },
  };

  return reducedInput;
}

// Example usage
const input: Input = {
  exclude: {
    and: [
      { or: ["4av6", "4qzg_1764"] },
      { or: ["4av8", "4qzg_1764"] },
    ],
  },
  include: {
    and: [
      { or: ["4r3a_1763", "60dx", "4qzg_1764"] },
      { or: ["4av2", "4av3", "4qzg_1764"] },
    ],
  },
};

const elementToExclude: string[] = ["4qzg_1764", "4av6"];

const result: Expected = reduceInput(input, elementToExclude);
console.log(JSON.stringify(result));


const data = {
  "type": "and",
  "items": [
      {
          "type": "and",
          "items": [
              {
                  "type": "or",
                  "items": [
                      {
                          "count": {
                              "people": {
                                  "global": 58031,
                                  "US": 58031
                              },
                              "devices": null,
                              "cookies": {
                                  "global": 0
                              }
                          },
                          "identifier": "60dx",
                          "name": "One time Zales Buyers Aug 1 2022",
                          "owner_name": "yttyut",
                          "parent_id": null,
                          "path": {
                              "names": [],
                              "identifiers": []
                          },
                          "rules": {},
                          "type": "Segment",
                          "vendor_name": "hty",
                          "vendor_remote_id": "7877",
                          "vendor_type": "ptuct",
                          "ams_id": null,
                          "status": null
                      },
                      {
                          "count": {
                              "people": {
                                  "global": 1000,
                                  "US": 0
                              },
                              "devices": null,
                              "cookies": {
                                  "global": 0
                              }
                          },
                          "identifier": "4qzg_1764",
                          "name": "Twitter > Weekly-(Refreshed-2023-02-07)",
                          "owner_name": null,
                          "parent_id": null,
                          "path": null,
                          "rules": {},
                          "type": "Motivation",
                          "vendor_name": "ptupc",
                          "vendor_remote_id": null,
                          "vendor_type": "tut",
                          "ams_id": null,
                          "status": "active"
                      }
                  ],
                  "acceptsSegments": true
              },
              {
                  "type": "or",
                  "items": [
                      {
                          "count": {
                              "people": {
                                  "global": 463395,
                                  "US": 463395
                              },
                              "devices": {
                                  "global": 0,
                                  "NA": 0
                              },
                              "cookies": {
                                  "global": 0
                              }
                          },
                          "identifier": "4av2",
                          "name": "Air Fresheners",
                          "owner_name": null,
                          "parent_id": "4ahp",
                          "path": {
                              "names": [
                                  "tu IRI Audiences"
                              ],
                              "identifiers": [
                                  "4ahp"
                              ]
                          },
                          "rules": {},
                          "type": "Segment",
                          "vendor_name": "utututy",
                          "vendor_remote_id": "474718",
                          "vendor_type": "tut IRI Audiences",
                          "ams_id": null,
                          "status": null
                      },
                      {
                          "count": {
                              "people": {
                                  "global": 411279,
                                  "US": 411279
                              },
                              "devices": {
                                  "global": 0,
                                  "NA": 0
                              },
                              "cookies": {
                                  "global": 0
                              }
                          },
                          "identifier": "4av3",
                          "name": "Aseptic Juices",
                          "owner_name": null,
                          "parent_id": "4ahp",
                          "path": {
                              "names": [
                                  "jtyhj IRI Audiences"
                              ],
                              "identifiers": [
                                  "4ahp"
                              ]
                          },
                          "rules": {},
                          "type": "Segment",
                          "vendor_name": "ngghgf",
                          "vendor_remote_id": "474719",
                          "vendor_type": "gjg IRI Audiences",
                          "ams_id": null,
                          "status": null
                      }
                  ],
                  "acceptsSegments": true
              }
          ]
      },
      {
          "type": "not",
          "items": [
              {
                  "type": "or",
                  "items": [
                      {
                          "count": {
                              "people": {
                                  "global": 317706,
                                  "US": 317706
                              },
                              "devices": {
                                  "global": 0,
                                  "NA": 0
                              },
                              "cookies": {
                                  "global": 0
                              }
                          },
                          "identifier": "4av6",
                          "name": "Automobile Waxes/Polishes",
                          "owner_name": null,
                          "parent_id": "4ahp",
                          "path": {
                              "names": [
                                  "grdg IRI Audiences"
                              ],
                              "identifiers": [
                                  "4ahp"
                              ]
                          },
                          "rules": {},
                          "type": "Segment",
                          "vendor_name": "dgd",
                          "vendor_remote_id": "474722",
                          "vendor_type": "gdgdgIRI Audiences",
                          "ams_id": null,
                          "status": null
                      },
                      {
                          "count": {
                              "people": {
                                  "global": 1000,
                                  "US": 0
                              },
                              "devices": null,
                              "cookies": {
                                  "global": 0
                              }
                          },
                          "identifier": "4r3a_1763",
                          "name": "LinkegddIn > Weeklydgd",
                          "owner_name": null,
                          "parent_id": null,
                          "path": null,
                          "rules": {},
                          "type": "Motivation",
                          "vendor_name": "ppc",
                          "vendor_remote_id": null,
                          "vendor_type": "motivation",
                          "ams_id": null,
                          "status": "active"
                      }
                  ],
                  "acceptsSegments": true
              },
              {
                  "type": "or",
                  "items": [
                      {
                          "count": {
                              "people": {
                                  "global": 164999,
                                  "US": 164999
                              },
                              "devices": {
                                  "global": 0,
                                  "NA": 0
                              },
                              "cookies": {
                                  "global": 0
                              }
                          },
                          "identifier": "4av8",
                          "name": "Baby Food",
                          "owner_name": null,
                          "parent_id": "4ahp",
                          "path": {
                              "names": [
                                  "dfgdfgd IRI Audiences"
                              ],
                              "identifiers": [
                                  "4ahp"
                              ]
                          },
                          "rules": {},
                          "type": "Segment",
                          "vendor_name": "gdgd",
                          "vendor_remote_id": "474724",
                          "vendor_type": "dgdgd IRI Audiences",
                          "ams_id": null,
                          "status": null
                      }
                  ],
                  "acceptsSegments": true
              }
          ]
      }
  ]
}
