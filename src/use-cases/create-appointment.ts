import { Appointiment } from "../entities/appointment";

interface CreateAppointmentrequest {
  custumer: string;
  startsAt: Date;
  endsAt: Date;
}

type CreateAppointmentResponse = Appointiment;

export class CreateAppointment {
  async execute({
    custumer,
    startsAt,
    endsAt,
  }: CreateAppointmentrequest): Promise<CreateAppointmentResponse> {
    const appointment = new Appointiment({
      custumer,
      startsAt,
      endsAt,
    });
    return appointment;
  }
}
