interface Authenticable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}
// we can also use inheritance on interface
//Example
interface AuthenticableAdmin extends Authenticable {
  role: "admin" | "superAdmin";
  // here the AuthenticableAdmin interface can access all the Authenticable interface
  // properties and also add it's new properties.
}
// here we implemented all the properties of the interface into the class
class AuthenticableUser implements Authenticable {
  constructor(
    public email: string,
    public password: string,
  ) {}
  login() {}
  logout() {}
}

// we can also implement the interfaces in functions parameters.
// Example
function adminUser(user: AuthenticableUser) {
  user.email;
  user.login();
  //.....
}
