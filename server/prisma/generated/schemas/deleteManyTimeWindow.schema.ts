import { z } from 'zod';
import { TimeWindowWhereInputObjectSchema } from './objects/TimeWindowWhereInput.schema';

export const TimeWindowDeleteManySchema = z.object({
  where: TimeWindowWhereInputObjectSchema.optional(),
});
