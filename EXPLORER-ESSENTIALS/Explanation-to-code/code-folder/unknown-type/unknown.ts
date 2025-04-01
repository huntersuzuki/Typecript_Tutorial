/**
unknown is a special TypeScript type that means "this value could be anything, but we don't know its exact type."

Unlike any, which allows any operation without type checking, unknown forces us to perform type checks before using the value.
 */

function process(val: unknown) {
  if (
    typeof val === "object" &&
    !!val &&
    "log" in val &&
    typeof val.log === "function"
  ) {
    val.log();
  }
}
