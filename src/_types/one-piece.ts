export type Fruit = {
  id: "int";
  name: "string";
  roman_name: "string";
  type: "string";
  description: "string";
  filename: "string";
  technicalFile: "string";
};

export type Sword = {
  id: "int";
  name: "string";
  roman_name: "string";
  type: "string";
  category: "string";
  description: "string";
  isDestroy: "boolean";
};

export type Character = {
  id: "int";
  name: "string";
  job: "string";
  size: "string";
  birthday: "string";
  age: "string";
  bounty: "string";
  status: "string";
  crew: Crew;
  fruit?: Fruit;
};

export type Crew = {
  id: "int";
  name: "string";
  description: "string";
  status: "string";
  number: "string";
  roman_name: "string";
  total_prime: "string";
  is_yonko: "string";
};
