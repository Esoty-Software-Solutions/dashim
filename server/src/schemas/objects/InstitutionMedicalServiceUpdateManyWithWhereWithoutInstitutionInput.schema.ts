import { z } from 'zod';
import { InstitutionMedicalServiceScalarWhereInputObjectSchema } from './InstitutionMedicalServiceScalarWhereInput.schema';
import { InstitutionMedicalServiceUpdateManyMutationInputObjectSchema } from './InstitutionMedicalServiceUpdateManyMutationInput.schema';
import { InstitutionMedicalServiceUncheckedUpdateManyWithoutMedicalCenterPricingInputObjectSchema } from './InstitutionMedicalServiceUncheckedUpdateManyWithoutMedicalCenterPricingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalServiceUpdateManyWithWhereWithoutInstitutionInput> =
  z
    .object({
      where: z.lazy(
        () => InstitutionMedicalServiceScalarWhereInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () => InstitutionMedicalServiceUpdateManyMutationInputObjectSchema,
        ),
        z.lazy(
          () =>
            InstitutionMedicalServiceUncheckedUpdateManyWithoutMedicalCenterPricingInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InstitutionMedicalServiceUpdateManyWithWhereWithoutInstitutionInputObjectSchema =
  Schema;
