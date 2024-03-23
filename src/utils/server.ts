import { type Application } from 'express'

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
