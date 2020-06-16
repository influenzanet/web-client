import { AppRoutes } from "./root";

export const AuthPagesPaths = {
  Signup: `${AppRoutes.UserAuth}/signup`,
  Login: `${AppRoutes.UserAuth}/login`,
  SignupSuccess: `${AppRoutes.UserAuth}/signup-success`,
  InitiatePasswordReset: `${AppRoutes.UserAuth}/initiate-password-reset`,
}
