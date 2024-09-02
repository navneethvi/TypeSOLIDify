import { logger } from "@envy-core/common";

interface User {
  name: string;
  email: string;
}

//? Service function for fetching user data

class UserService {
  async fetchUserData(): Promise<User> {
    //* Simulate fetching user data from an API...........

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: "Navaneeth Vinod",
          email: "navaneethvinod27@gmail.com",
        });
      });
    });
  }

  async saveUserData(user: User): Promise<void> {
    logger.info(`Saving user to the database...`);
    console.log(user);
    
    //* Logic to save user to the database
  }
}

//? Class responsible for displaying user information

class UserDisplay {
  displayUser(user: User): void {
    logger.info(`Name ===> ${user.name}`);
    logger.info(`Email ===> ${user.email}`);
  }
}

//? Class responsible for managing user operations

class ManageUser {
  private userService: UserService;
  private userDisplay: UserDisplay;

  constructor(userService: UserService, userDisplay: UserDisplay) {
    this.userService = userService;
    this.userDisplay = userDisplay;
  }

  async initializeUser(): Promise<void> {
    const user = await this.userService.fetchUserData();
    this.userDisplay.displayUser(user);
  }

  async saveUser(user: User): Promise<void> {
    await this.userService.saveUserData(user);
  }
}

(async () => {
  const userService = new UserService();
  const userDisplay = new UserDisplay();
  const manageUser = new ManageUser(userService, userDisplay);

  await manageUser.initializeUser();

  const user: User = {
    name: "Navaneeth Vinod",
    email: "navaneethvinod27@gmail.com",
  };
  await manageUser.saveUser(user);
})();
