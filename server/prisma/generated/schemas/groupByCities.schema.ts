import { z } from 'zod';
import { CitiesWhereInputObjectSchema } from './objects/CitiesWhereInput.schema';
import { CitiesOrderByWithAggregationInputObjectSchema } from './objects/CitiesOrderByWithAggregationInput.schema';
import { CitiesScalarWhereWithAggregatesInputObjectSchema } from './objects/CitiesScalarWhereWithAggregatesInput.schema';
import { CitiesScalarFieldEnumSchema } from './enums/CitiesScalarFieldEnum.schema';

export const CitiesGroupBySchema = z.object({
  where: CitiesWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      CitiesOrderByWithAggregationInputObjectSchema,
      CitiesOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: CitiesScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(CitiesScalarFieldEnumSchema),
});
