import { z } from 'zod';
import { InstitutionMedicalCeneterServiceScalarWhereInputObjectSchema } from './InstitutionMedicalCeneterServiceScalarWhereInput.schema';
import { InstitutionMedicalCeneterServiceUpdateManyMutationInputObjectSchema } from './InstitutionMedicalCeneterServiceUpdateManyMutationInput.schema';
import { InstitutionMedicalCeneterServiceUncheckedUpdateManyWithoutInstitutionPricingInputObjectSchema } from './InstitutionMedicalCeneterServiceUncheckedUpdateManyWithoutInstitutionPricingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalCeneterServiceUpdateManyWithWhereWithoutMedicalCenterServiceInput> =
  z
    .object({
      where: z.lazy(
        () => InstitutionMedicalCeneterServiceScalarWhereInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () =>
            InstitutionMedicalCeneterServiceUpdateManyMutationInputObjectSchema,
        ),
        z.lazy(
          () =>
            InstitutionMedicalCeneterServiceUncheckedUpdateManyWithoutInstitutionPricingInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InstitutionMedicalCeneterServiceUpdateManyWithWhereWithoutMedicalCenterServiceInputObjectSchema =
  Schema;
