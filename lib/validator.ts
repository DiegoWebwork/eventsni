import * as z from "zod"

export const eventFormSchema = z.object({
  title: z.string().min(3, 'Titulo tem que ter pelo menos 3 palavras'),
  description: z.string().min(3, 'Descrição tem que ter pelo menos 3 palavras').max(400, 'Description must be less than 400 characters'),
  location: z.string().min(3, 'Locação tem que ter pelo menos 3 palavras').max(400, 'Location must be less than 400 characters'),
  imageUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url()
})