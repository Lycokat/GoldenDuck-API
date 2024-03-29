export const ErrorsDictionary = {
  CategoryNotFount: 'La categoría ya existe',
  DatabaseConnectionError: 'Error al conectar con la base de datos',
  FailedValidationToken: 'El token es invalido',
  IncorrectCode: 'El código es incorrecto',
  IncorrectPassword: 'Contraseña incorrecta',
  InsufficientBalance: 'Saldo insuficiente',
  InvalidToken: 'El token es invalido',
  KnownRequestError: 'Error conocido',
  NoBodyRequest: 'No se ha enviado ningun dato en el cuerpo de la petición',
  NoCodeSent: 'No se ha enviado el código',
  NoEmail: 'No se ha enviado el correo electrónico',
  NoLogged: 'No has iniciado sesión',
  NoPermissions: 'Permisos insuficientes',
  NoVariableEnv: (variable: string): string =>
    `No se ha encontrado la variable de entorno "${variable}"`,
  PanicError: 'Error fatal',
  UnknownError: 'Ha ocurrido un error',
  UnknownRequestError: 'Error desconocido',
  UserAlreadyExists: 'El usuario ya existe',
  UserNotFound: 'Usuario no encontrado',
  ValidationError: 'Error de validación',
  NoParams: 'No se han enviado los parametros necesarios'
}
