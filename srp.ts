import { logger } from "@envy-core/common";

//* The following code demonstrates an example of adhering to the Single Responsibility Principle (SRP) and separation of concerns.
//* The SRP states that a class should have only one reason to change, meaning it should have only one job.
//* This code also separates the responsibilities of fetching, displaying, and managing user data into different classes.

//? Interface defining a User
interface User {
  name: string;
  email: string;
}

//? Service class for fetching and saving user data
class UserService {
  // Simulate fetching user data from an API.
  async fetchUserData(): Promise<User> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: "Navaneeth Vinod",
          email: "navaneethvinod27@gmail.com",
        });
      });
    });
  }

  //* Simulate saving user data to a database.
  async saveUserData(user: User): Promise<void> {
    logger.info("Saving user to the database...");
    console.log(user);

    //* Logic to save the user to the database can be implemented here.
  }
}

//? Class responsible for displaying user information
// The UserDisplay class handles the presentation logic for user data.
class UserDisplay {
  // Log the user's name and email.
  displayUser(user: User): void {
    logger.info(`Name ===> ${user.name}`);
    logger.info(`Email ===> ${user.email}`);
  }
}

//? Class responsible for managing user operations
class ManageUser {
  private userService: UserService;
  private userDisplay: UserDisplay;

  // Constructor takes instances of UserService and UserDisplay, promoting dependency injection and testability.
  constructor(userService: UserService, userDisplay: UserDisplay) {
    this.userService = userService;
    this.userDisplay = userDisplay;
  }

  // Initialize the user by fetching and displaying their data.
  async initializeUser(): Promise<void> {
    const user = await this.userService.fetchUserData();
    this.userDisplay.displayUser(user);
  }

  // Save the user data using the UserService.
  async saveUser(user: User): Promise<void> {
    await this.userService.saveUserData(user);
  }
}

//? Example usage of the UserService, UserDisplay, and ManageUser classes.
(async () => {
  const userService = new UserService();
  const userDisplay = new UserDisplay();
  const manageUser = new ManageUser(userService, userDisplay);

  // Fetch and display user data.
  await manageUser.initializeUser();

  // Save user data.
  const user: User = {
    name: "Navaneeth Vinod",
    email: "navaneethvinod27@gmail.com",
  };
  await manageUser.saveUser(user);
})();
