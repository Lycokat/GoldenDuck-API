import { ConfigError } from '@/helpers/customErrors'
import { ErrorsDictionary } from '@/messages/errors'

export const getEnv = (envName: string, defaultValue?: string): string => {
  const envValue = process.env[envName]

  if (typeof envValue === 'string' && envValue.length > 0) {
    return envValue
  }

  if (typeof defaultValue === 'string') {
    return defaultValue
  }

  throw new ConfigError(ErrorsDictionary.NoVariableEnv(envName))
}
