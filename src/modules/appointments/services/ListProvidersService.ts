import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppErrors';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import User from '@modules/users/infra/typeorm/entities/Users';

interface IRequest {
  user_id: string;
}
@injectable()
class ListProvidersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  public async execute({ user_id }: IRequest): Promise<User> {
    const user = await this.usersRepository.findAllProviders(user_id);

    if (!user) {
      throw new AppError('User not found');
    }

    return user;
  }
}

export default ListProvidersService;
