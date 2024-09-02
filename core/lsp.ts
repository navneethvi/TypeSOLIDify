import { logger } from "@envy-core/common";

// * The following code demonstrates an example of adhering to the Liskov Substitution Principle (LSP).
// * LSP states that objects or modules should be replaceable with instances of their subtypes without affecting the correctness of the program.
// * This code defines an abstract base class and subclasses that adhere to LSP by ensuring that any subtype can be used interchangeably.

// ? Abstract base class for Animal
abstract class Animal {
  // Abstract method to be implemented by subclasses
  abstract move(): string;
}

// ? Subclass representing a Bird
class Bird extends Animal {
  move(): string {
    return "Flying";
  }
}

// ? Subclass representing a Fish
class Fish extends Animal {
  move(): string {
    return "Swimming";
  }
}

// ? Function that takes an Animal and describes its movement
const describeMovement = (animal: Animal): void => {
  logger.info(`The animal is ${animal.move()}.`);
};

const bird = new Bird();
const fish = new Fish();

// Describe movements for Bird and Fish
describeMovement(bird);
describeMovement(fish);
