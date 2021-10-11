export const ApplicationName = 'fortress.core';

export const ReturnUrlType = 'returnUrl';

export const QueryParameterNames = {
  ReturnUrl: ReturnUrlType,
  Message: 'message'
};

export const LogoutActions = {
  LogoutCallback: 'logout-callback',
  Logout: 'logout',
  LoggedOut: 'logged-out'
};

export const LoginActions = {
  Login: 'login',
  LoginCallback: 'login-callback',
  LoginFailed: 'login-failed',
  Profile: 'profile',
  Register: 'register'
};

let applicationPaths: ApplicationPathsType = {
  DefaultLoginRedirectPath: '/',
  ApiAuthorizationClientConfigurationUrl: `api/_configuration/${ApplicationName}`,
  Login: `authentication/${LoginActions.Login}`,
  LoginFailed: `authentication/${LoginActions.LoginFailed}`,
  LoginCallback: `authentication/${LoginActions.LoginCallback}`,
  Register: `authentication/${LoginActions.Register}`,
  Profile: `authentication/${LoginActions.Profile}`,
  LogOut: `authentication/${LogoutActions.Logout}`,
  LoggedOut: `authentication/${LogoutActions.LoggedOut}`,
  LogOutCallback: `authentication/${LogoutActions.LogoutCallback}`,
  LoginPathComponents: [],
  LoginFailedPathComponents: [],
  LoginCallbackPathComponents: [],
  RegisterPathComponents: [],
  ProfilePathComponents: [],
  LogOutPathComponents: [],
  LoggedOutPathComponents: [],
  LogOutCallbackPathComponents: [],
  IdentityRegisterPath: 'Identity/Account/Register',
  IdentityLoginPath: 'Identity/Account/Login',
  IdentityManagePath: 'Identity/Account/Manage',
  ApiAuthorizationPath: 'https://localhost:5001',
  ApiBasePath: 'https://api.thefortress.vip/'
};

applicationPaths = {
  ...applicationPaths,
  LoginPathComponents: applicationPaths.Login.split('/'),
  LoginFailedPathComponents: applicationPaths.LoginFailed.split('/'),
  RegisterPathComponents: applicationPaths.Register.split('/'),
  ProfilePathComponents: applicationPaths.Profile.split('/'),
  LogOutPathComponents: applicationPaths.LogOut.split('/'),
  LoggedOutPathComponents: applicationPaths.LoggedOut.split('/'),
  LogOutCallbackPathComponents: applicationPaths.LogOutCallback.split('/')
};

interface ApplicationPathsType {
  readonly DefaultLoginRedirectPath: string;
  readonly ApiAuthorizationClientConfigurationUrl: string;
  readonly Login: string;
  readonly LoginFailed: string;
  readonly LoginCallback: string;
  readonly Register: string;
  readonly Profile: string;
  readonly LogOut: string;
  readonly LoggedOut: string;
  readonly LogOutCallback: string;
  readonly LoginPathComponents: string [];
  readonly LoginFailedPathComponents: string [];
  readonly LoginCallbackPathComponents: string [];
  readonly RegisterPathComponents: string [];
  readonly ProfilePathComponents: string [];
  readonly LogOutPathComponents: string [];
  readonly LoggedOutPathComponents: string [];
  readonly LogOutCallbackPathComponents: string [];
  readonly IdentityRegisterPath: string;
  readonly IdentityLoginPath: string;
  readonly IdentityManagePath: string;
  readonly ApiAuthorizationPath: string;
  readonly ApiBasePath: string;
}

export const ApplicationPaths: ApplicationPathsType = applicationPaths;
