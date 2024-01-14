import { z } from 'zod';
import { CitiesOrderByWithRelationInputObjectSchema } from './objects/CitiesOrderByWithRelationInput.schema';
import { CitiesWhereInputObjectSchema } from './objects/CitiesWhereInput.schema';
import { CitiesWhereUniqueInputObjectSchema } from './objects/CitiesWhereUniqueInput.schema';
import { CitiesScalarFieldEnumSchema } from './enums/CitiesScalarFieldEnum.schema';

export const CitiesFindFirstSchema = z.object({
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
  distinct: z.array(CitiesScalarFieldEnumSchema).optional(),
});
