import { z } from 'zod';
import { TimeWindowUpdateInputObjectSchema } from './objects/TimeWindowUpdateInput.schema';
import { TimeWindowUncheckedUpdateInputObjectSchema } from './objects/TimeWindowUncheckedUpdateInput.schema';
import { TimeWindowWhereUniqueInputObjectSchema } from './objects/TimeWindowWhereUniqueInput.schema';

export const TimeWindowUpdateOneSchema = z.object({
  data: z.union([
    TimeWindowUpdateInputObjectSchema,
    TimeWindowUncheckedUpdateInputObjectSchema,
  ]),
  where: TimeWindowWhereUniqueInputObjectSchema,
});
