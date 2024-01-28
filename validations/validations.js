import { body } from "express-validator";

export const registerValidator = [
  body("email", "Неверный формат почты").isEmail(),
  body("password", "Пароль должен содержать от 5 символов").isLength({
    min: 5,
  }),
  body("firstName", "Укажите корректное имя").isLength({ min: 2 }),
  body("lastName", "Укажите корректное имя").isLength({ min: 2 }),
];

export const loginValidator = [
  body("email", "Неверный формат почты").isEmail(),
  body("password", "Пароль должен содержать от 5 символов").isLength({
    min: 5,
  }),
];
