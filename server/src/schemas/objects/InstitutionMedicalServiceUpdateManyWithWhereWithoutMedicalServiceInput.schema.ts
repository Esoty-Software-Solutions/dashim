import { z } from 'zod';
import { InstitutionMedicalServiceScalarWhereInputObjectSchema } from './InstitutionMedicalServiceScalarWhereInput.schema';
import { InstitutionMedicalServiceUpdateManyMutationInputObjectSchema } from './InstitutionMedicalServiceUpdateManyMutationInput.schema';
import { InstitutionMedicalServiceUncheckedUpdateManyWithoutInstitutionPricingInputObjectSchema } from './InstitutionMedicalServiceUncheckedUpdateManyWithoutInstitutionPricingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalServiceUpdateManyWithWhereWithoutMedicalServiceInput> =
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
            InstitutionMedicalServiceUncheckedUpdateManyWithoutInstitutionPricingInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InstitutionMedicalServiceUpdateManyWithWhereWithoutMedicalServiceInputObjectSchema =
  Schema;
