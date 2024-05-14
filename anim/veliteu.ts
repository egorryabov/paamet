type MyTuple = [number, string, boolean];

function processTuple(myTuple: MyTuple): void {
  // Destructure the tuple into individual variables
  const [id, name, isActive] = myTuple;

  // Perform operations with the destructured variables
  console.log(`ID: ${id}, Name: ${name}, Active: ${isActive}`);
}

// Example usage:
const exampleTuple: MyTuple = [1, 'Alice', true];
processTuple(exampleTuple);
