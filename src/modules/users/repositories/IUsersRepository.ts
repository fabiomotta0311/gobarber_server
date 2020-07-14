import User from '@modules/users/infra/typeorm/entities/Users';
import IUserDTO from '@modules/users/dtos/ICreateUserDTO';

export default interface IUsersRepository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: IUserDTO): Promise<User>;
  save(user: User): Promise<User>;
}
