import FakeAppointmentRepository from '@modules/appointments/repositories/fakes/FakeAppointmentRepository';

import ListProviderMonthAvailabilityService from '@modules/appointments/services/ListProviderMonthAvailabilityService';
import AppError from '@shared/errors/AppErrors';

let listProviderMonthAvailability: ListProviderMonthAvailabilityService;

let fakeAppointmentRepository: FakeAppointmentRepository;

describe('ListProviderMonthAvailability', () => {
  beforeEach(() => {
    listProviderMonthAvailability = new ListProviderMonthAvailabilityService();
    fakeAppointmentRepository = new FakeAppointmentRepository();
  });
  it('should be able to list the month availability from providers', async () => {
    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 4, 20, 8, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 4, 20, 10, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 4, 21, 8, 0, 0),
    });

    const availability = await listProviderMonthAvailability.execute({
      user_id: 'user',
      year: 2020,
      month: 5,
    });

    expect(availability).toEqual([
      expect.arrayContaining([
        { day: 19, available: true },
        { day: 20, available: false },
        { day: 21, available: false },
        { day: 22, available: true },
      ]),
    ]);
  });
});
