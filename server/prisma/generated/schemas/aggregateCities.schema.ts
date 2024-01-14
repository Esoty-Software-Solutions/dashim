import { z } from 'zod';
import { CitiesOrderByWithRelationInputObjectSchema } from './objects/CitiesOrderByWithRelationInput.schema';
import { CitiesWhereInputObjectSchema } from './objects/CitiesWhereInput.schema';
import { CitiesWhereUniqueInputObjectSchema } from './objects/CitiesWhereUniqueInput.schema';
import { CitiesCountAggregateInputObjectSchema } from './objects/CitiesCountAggregateInput.schema';
import { CitiesMinAggregateInputObjectSchema } from './objects/CitiesMinAggregateInput.schema';
import { CitiesMaxAggregateInputObjectSchema } from './objects/CitiesMaxAggregateInput.schema';

export const CitiesAggregateSchema = z.object({
  orderBy: z
    .union([
      CitiesOrderByWithRelationInputObjectSchema,
      CitiesOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: CitiesWhereInputObjectSchema.optional(),
  cursor: CitiesWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), CitiesCountAggregateInputObjectSchema])
    .optional(),
  _min: CitiesMinAggregateInputObjectSchema.optional(),
  _max: CitiesMaxAggregateInputObjectSchema.optional(),
});
