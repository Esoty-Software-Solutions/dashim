import { z } from 'zod';
import { PatientServiceOrderByWithRelationInputObjectSchema } from './objects/PatientServiceOrderByWithRelationInput.schema';
import { PatientServiceWhereInputObjectSchema } from './objects/PatientServiceWhereInput.schema';
import { PatientServiceWhereUniqueInputObjectSchema } from './objects/PatientServiceWhereUniqueInput.schema';
import { PatientServiceScalarFieldEnumSchema } from './enums/PatientServiceScalarFieldEnum.schema';

export const PatientServiceFindManySchema = z.object({
  orderBy: z
    .union([
      PatientServiceOrderByWithRelationInputObjectSchema,
      PatientServiceOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PatientServiceWhereInputObjectSchema.optional(),
  cursor: PatientServiceWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PatientServiceScalarFieldEnumSchema).optional(),
});
