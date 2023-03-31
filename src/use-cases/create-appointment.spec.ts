import { describe, expect, it } from "vitest";
import { CreateAppointment } from "./create-appointment";

describe("Create Appointment", () => {
  it("should be able to create an appointment", () => {
    const sut = new CreateAppointment();

    const startsAt = new Date();
    const endsAt = new Date();

    endsAt.setDate(endsAt.getDate() + 1);

    expect(
      sut.execute({
        custumer: "John Doe",
        startsAt,
        endsAt,
      })
    );
  });
});
