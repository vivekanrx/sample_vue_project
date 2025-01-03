import { z } from 'zod'

const serviceSchema = z.object({
        name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
        time: z.enum(['day', 'night']),
        timeframes: z.array(
          z.object({
            operating_days: z.array(z.string()),
            operating_hours: z.object({
              start_time: z.string(),
              end_time: z.string(),
            }),
          })
        ),
      });


type Service = z.infer<typeof serviceSchema>
export { serviceSchema, type Service }