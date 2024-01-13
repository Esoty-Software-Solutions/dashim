import { z } from 'zod';
import { TimeWindowUpdateManyMutationInputObjectSchema } from './objects/TimeWindowUpdateManyMutationInput.schema';
import { TimeWindowWhereInputObjectSchema } from './objects/TimeWindowWhereInput.schema';

export const TimeWindowUpdateManySchema = z.object({
  data: TimeWindowUpdateManyMutationInputObjectSchema,
  where: TimeWindowWhereInputObjectSchema.optional(),
});
