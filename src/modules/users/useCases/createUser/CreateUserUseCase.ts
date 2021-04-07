import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    if (!email || !name) {
      throw new Error("Data invalid")
    }

    const userExists = this.usersRepository.findByEmail(email);

    if (userExists) {
      throw new Error("User Already exists");
    }

    const newUser = this.usersRepository.create({
      email,
      name
    })

    return newUser;
  }
}

export { CreateUserUseCase };
