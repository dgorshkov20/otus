export interface EmailConfig {
  host: string
  port: number
  secure: true
  auth: {
    user: string
    pass: string
  },
  from: string
}
