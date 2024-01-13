import { z } from 'zod';
import { TimeWindowWhereUniqueInputObjectSchema } from './objects/TimeWindowWhereUniqueInput.schema';

export const TimeWindowDeleteOneSchema = z.object({
  where: TimeWindowWhereUniqueInputObjectSchema,
});
