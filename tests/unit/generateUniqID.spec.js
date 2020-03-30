const generateUniqId = require("../../src/utils/generateUniqId");

describe("Generate Uniq ID", () => {
  it("should generate uniq ID", () => {
    const id = generateUniqId();
    expect(id).toHaveLength(8);
  });
});
