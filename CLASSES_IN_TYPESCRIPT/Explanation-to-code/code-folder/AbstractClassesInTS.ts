abstract class UIElement {
  constructor(public identifier: string) {}

  clone(targetLocation: string) {
    //logic to duplicate the UI element
  }
}
// now we cannot create an instance/object of an abstract class
// let uiElement = new UIElement() // we get error "TS2511: Cannot create an instance of an abstract class."
// Instead of crating an instance, we extend the abstract class

class SideDrawerElement extends UIElement {
  constructor(
    public identifier: string,
    public position: "left" | "right",
  ) {
    super(identifier);
  }
}
