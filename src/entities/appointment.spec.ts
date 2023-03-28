import { expect, test } from "vitest";
import { Appointiment } from "./appointment";

test("create an appointment", () => {
  const appointment = new Appointiment({
    custumer: "John Doe",
    startsAt: new Date(),
    endsAt: new Date(),
  });

  expect(appointment).toBeInstanceOf(Appointiment);
  expect(appointment.custumer).toEqual("John Doe");
});
