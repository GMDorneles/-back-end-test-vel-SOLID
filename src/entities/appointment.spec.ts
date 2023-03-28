import { expect, test } from "vitest";
import { Appointiment } from "./appointment";

test("create an appointment", () => {
  const startsAt = new Date();
  const endsAt = new Date();

  endsAt.setDate(endsAt.getDate() + 1);

  const appointment = new Appointiment({
    custumer: "John Doe",
    startsAt,
    endsAt,
  });

  expect(appointment).toBeInstanceOf(Appointiment);
  expect(appointment.custumer).toEqual("John Doe");
});

test("cannot create an appointment with end date before start date", () => {
  const startsAt = new Date();
  const endsAt = new Date();

  endsAt.setDate(endsAt.getDate() - 1);
  expect(() => {
    return new Appointiment({
      custumer: "John Doe",
      startsAt,
      endsAt,
    });
  }).toThrow();
});
