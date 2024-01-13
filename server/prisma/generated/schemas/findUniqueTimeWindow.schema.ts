import { z } from 'zod';
import { TimeWindowWhereUniqueInputObjectSchema } from './objects/TimeWindowWhereUniqueInput.schema';

export const TimeWindowFindUniqueSchema = z.object({
  where: TimeWindowWhereUniqueInputObjectSchema,
});
