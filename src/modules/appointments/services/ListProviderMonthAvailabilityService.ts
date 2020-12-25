import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import { injectable, inject } from 'tsyringe';

// import User from '@modules/users/infra/typeorm/entities/Users';

interface IRequest {
  user_id: string;
  month: number;
  year: number;
}

type IResponse = Array<{
  day: number;
  available: boolean;
}>;

@injectable()
class ListProviderMonthAailabilityService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) { }

  public async execute({ user_id, year, month }: IRequest): Promise<IResponse> {
    return [{ day: 1, available: false }];
  }
}

export default ListProviderMonthAailabilityService;
