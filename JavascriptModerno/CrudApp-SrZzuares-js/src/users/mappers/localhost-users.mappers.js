import { User } from "../models/users";

/**
 * 
 * @param {Like<User>} localUser Referente a un usuario (data)
 * @returns {User}  Retorna un usuario
 */
export const localhostUserToModel = (localUser) => {

    const { avatar, balance, first_name
        , gender, id, isActive, last_name
    } = localUser;

    return new User({
        avatar,
        balance,
        fisrtName: first_name,
        gender,
        id,
        isActive,
        lastName: last_name,
    });
}