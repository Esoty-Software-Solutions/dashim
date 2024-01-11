import { z } from 'zod';
import { TimeWindowOrderByWithRelationInputObjectSchema } from './objects/TimeWindowOrderByWithRelationInput.schema';
import { TimeWindowWhereInputObjectSchema } from './objects/TimeWindowWhereInput.schema';
import { TimeWindowWhereUniqueInputObjectSchema } from './objects/TimeWindowWhereUniqueInput.schema';
import { TimeWindowScalarFieldEnumSchema } from './enums/TimeWindowScalarFieldEnum.schema';

export const TimeWindowFindManySchema = z.object({
  orderBy: z
    .union([
      TimeWindowOrderByWithRelationInputObjectSchema,
      TimeWindowOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TimeWindowWhereInputObjectSchema.optional(),
  cursor: TimeWindowWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TimeWindowScalarFieldEnumSchema).optional(),
});
