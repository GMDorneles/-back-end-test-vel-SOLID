import { AppointmentsRepository } from "../appointments-repository";
import { Appointment } from "../../entities/appointment";
import { areIntervalsOverlapping } from "date-fns";

export class inMemoryAppointmentsRepository implements AppointmentsRepository {
  public itens: Appointment[] = [];
  async create(appointment: Appointment): Promise<void> {
    this.itens.push(appointment);
  }

  async findOverlappingAppointment(
    startsAt: Date,
    endsAt: Date
  ): Promise<Appointment | null> {
    const overlappingAppointment = this.itens.find((appointment) => {
      return areIntervalsOverlapping(
        { start: startsAt, end: endsAt },
        { start: appointment.startsAt, end: appointment.endsAt },
        { inclusive: true }
      );
    });
    if (!overlappingAppointment) {
      return null;
    }
    return overlappingAppointment;
  }
}
