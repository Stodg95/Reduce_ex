describe("#extractValue", function() {
  it("returns a new array with the value of each key in an array objects", function() {
    let arr = [
      { name: "Scott" },
      { name: "Justin" },
      { name: "Ki" },
      { name: "Samantha" }
    ];
    expect(extractValue(arr, "name")).toEqual(["Scott", "Justin", "Ki", "Samantha"]);
  });
});

describe("#vowelCount", function() {
  it("returns an object with the keys as vowels and the values as the count", function() {
    expect(vowelCount("scott")).toEqual({ o:1 });
    expect(vowelCount("justin")).toEqual({ i: 1, u: 1 });
    expect(vowelCount("ki")).toEqual({ i: 1 });
    expect(vowelCount("samantha")).toEqual({ a: 3 });
    expect(vowelCount("hmmm")).toEqual({});
    expect(vowelCount("i am awesome and so are you")).toEqual({
      i: 1,
      a: 4,
      e: 3,
      o: 3,
      u: 1
    });
  });
});

describe("#addKeyAndValue", function() {
  let arr = [
    { name: "Scott" },
    { name: "Justin" },
    { name: "Ki" },
    { name: "Samantha" }
  ];
  let updated = [
    { title: "Instructor", name: "Scott" },
    { title: "Instructor", name: "Justin" },
    { title: "Instructor", name: "Ki" },
    { title: "Instructor", name: "Samantha" }
  ];
  it("adds a key and value to each object in an array of objects", function() {
    expect(addKeyAndValue(arr, "title", "Instructor")).toEqual(updated);
  });
});

describe("#partition", function() {
  function isEven(val) {
    return val % 2 === 0;
  }
  function isLongerThanThreeCharacters(val) {
    return val.length > 3;
  }
 let arr = [1, 2, 3, 4, 5, 6, 7, 8];
 let names = ["Scott", "Samantha", "Justin", "Ki"];
  it("returns an array of arrays with the first subarray as values returning true from the callback", function() {
    expect(partition(arr, isEven)).toEqual([[2, 4, 6, 8], [1, 3, 5, 7]]);
    expect(partition(names, isLongerThanThreeCharacters)).toEqual([
      ["Scott", "Samantha", "Justin"],
      ["Ki"]
    ]);
  });
});