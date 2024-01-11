import { z } from 'zod';
import { TimeWindowWhereUniqueInputObjectSchema } from './objects/TimeWindowWhereUniqueInput.schema';
import { TimeWindowCreateInputObjectSchema } from './objects/TimeWindowCreateInput.schema';
import { TimeWindowUncheckedCreateInputObjectSchema } from './objects/TimeWindowUncheckedCreateInput.schema';
import { TimeWindowUpdateInputObjectSchema } from './objects/TimeWindowUpdateInput.schema';
import { TimeWindowUncheckedUpdateInputObjectSchema } from './objects/TimeWindowUncheckedUpdateInput.schema';

export const TimeWindowUpsertSchema = z.object({
  where: TimeWindowWhereUniqueInputObjectSchema,
  create: z.union([
    TimeWindowCreateInputObjectSchema,
    TimeWindowUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    TimeWindowUpdateInputObjectSchema,
    TimeWindowUncheckedUpdateInputObjectSchema,
  ]),
});
