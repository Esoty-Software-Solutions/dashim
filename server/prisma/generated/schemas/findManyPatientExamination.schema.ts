import { z } from 'zod';
import { PatientExaminationOrderByWithRelationInputObjectSchema } from './objects/PatientExaminationOrderByWithRelationInput.schema';
import { PatientExaminationWhereInputObjectSchema } from './objects/PatientExaminationWhereInput.schema';
import { PatientExaminationWhereUniqueInputObjectSchema } from './objects/PatientExaminationWhereUniqueInput.schema';
import { PatientExaminationScalarFieldEnumSchema } from './enums/PatientExaminationScalarFieldEnum.schema';

export const PatientExaminationFindManySchema = z.object({
  orderBy: z
    .union([
      PatientExaminationOrderByWithRelationInputObjectSchema,
      PatientExaminationOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PatientExaminationWhereInputObjectSchema.optional(),
  cursor: PatientExaminationWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PatientExaminationScalarFieldEnumSchema).optional(),
});
