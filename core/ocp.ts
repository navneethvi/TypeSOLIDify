import { logger } from "@envy-core/common";

//* The following code demonstrates an example of adhering to the Open/Closed Principle (OCP) in object-oriented design.
//* The OCP states that software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.
//* This means you can extend the behavior of a module without modifying its existing code.

//? Define a base interface for a shape
// This interface enforces a contract for calculating the area and getting the type of shape.
interface Shape {
  calculateArea(): number;
  getType(): string;
}

//? Rectangle class adhering to OCP
class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  calculateArea(): number {
    return this.width * this.height;
  }

  getType(): string {
    return "Rectangle";
  }
}

//? Circle class adhering to OCP
class Circle implements Shape {
  constructor(private radius: number) {}

  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getType(): string {
    return "Circle";
  }
}

//? Triangle class adhering to OCP
class Triangle implements Shape {
  constructor(private base: number, private height: number) {}

  calculateArea(): number {
    return (this.base * this.height) / 2;
  }

  getType(): string {
    return "Triangle";
  }
}

//? Example usage of the Shape interface and its implementations.
// This adheres to OCP as we can add new shapes (e.g., Square, Polygon) without modifying the existing code.
const shapes: Shape[] = [
  new Rectangle(10, 20),
  new Circle(10),
  new Triangle(10, 20),
];

// Loop through each shape and log its type and area.
shapes.forEach((shape) => {
  logger.info(`Area of ${shape.getType()} is ${shape.calculateArea()}`);
});
