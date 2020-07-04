import { AppRoutes } from "./root";

export const LinkResolverPaths = {
  ContactVerification: `${AppRoutes.LinkResolver}/verify-contact`,
  PasswordReset: `${AppRoutes.LinkResolver}/password-reset`,
  StudyLogin: `${AppRoutes.LinkResolver}/study-login`,
}
