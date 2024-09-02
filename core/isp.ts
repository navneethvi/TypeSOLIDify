import { logger } from "@envy-core/common";

// * The following code demonstrates an example of adhering to the Interface Segregation Principle (ISP).
// * ISP states that no client should be forced to depend on methods it does not use. Interfaces should be client-specific.
// * This code defines interfaces and classes that adhere to ISP by separating responsibilities into distinct interfaces.

// ? Interface for Workable, defining a single responsibility
interface Workable {
  work(): void;
}

// ? Interface for Eatable, defining a single responsibility
interface Eatable {
  eat(): void;
}

// ? Class representing a Human that implements both Workable and Eatable interfaces
class Human implements Workable, Eatable {
  work(): void {
    logger.info("Human is working...");
  }

  eat(): void {
    logger.info("Human is eating...");
  }
}

// ? Class representing a Robot that implements only Workable interface
class Robot implements Workable {
  work(): void {
    logger.info("Robot is working...");
  }
}

const human = new Human();
human.work();
human.eat(); 

const robot = new Robot();
robot.work();