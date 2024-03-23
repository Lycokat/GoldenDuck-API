import { ConfigError } from '@/helpers/customErrors'
import { ErrorsDictionary } from '@/messages/errors'
import { type Application } from 'express'

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

export const findAvailablePort = async (server: Application, port: number): Promise<number> => {
  return await new Promise((resolve, reject) => {
    server.listen(port, () => {
      resolve(port)
    }).on('error', (error: any) => {
      console.log(error.code === 'EADDRINUSE')

      if (error.code === 'EADDRINUSE') {
        console.log(`Port: ${port} -> is already in use"`)
        console.log(`Trying with port: ${port + 1}`)
        resolve(findAvailablePort(server, port + 1))
      }

      reject(error)
    })
  })
}
