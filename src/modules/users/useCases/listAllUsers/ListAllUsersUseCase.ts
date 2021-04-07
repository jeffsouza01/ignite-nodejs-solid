import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const verifyUserAdm = this.usersRepository.findById(user_id);
    
    if (verifyUserAdm.admin === false) {
      throw new Error ("User not Admin")
    }

    if (!verifyUserAdm) {
      throw new Error("User not found")
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
