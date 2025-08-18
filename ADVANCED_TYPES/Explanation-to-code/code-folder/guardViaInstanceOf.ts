class User {
  constructor(public name: string) {}
  join() {
    //...
  }
}

class Admin {
  constructor(permissions: string[]) {}
  scan() {
    //...
  }
}

const user = new User("Pranay");
const admin = new Admin(["ban", "restore"]);

type Entity = User | Admin;

function init(entity: Entity) {
  if (entity instanceof User) {
    // instanceof will check what instance does the entity property holds.
    entity.join();
    return;
  }
  entity.scan();
}
