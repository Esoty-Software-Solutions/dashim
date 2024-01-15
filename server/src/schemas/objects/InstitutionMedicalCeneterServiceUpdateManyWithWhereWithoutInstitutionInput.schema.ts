import { z } from 'zod';
import { InstitutionMedicalCeneterServiceScalarWhereInputObjectSchema } from './InstitutionMedicalCeneterServiceScalarWhereInput.schema';
import { InstitutionMedicalCeneterServiceUpdateManyMutationInputObjectSchema } from './InstitutionMedicalCeneterServiceUpdateManyMutationInput.schema';
import { InstitutionMedicalCeneterServiceUncheckedUpdateManyWithoutMedicalCenterPricingInputObjectSchema } from './InstitutionMedicalCeneterServiceUncheckedUpdateManyWithoutMedicalCenterPricingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalCeneterServiceUpdateManyWithWhereWithoutInstitutionInput> =
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
            InstitutionMedicalCeneterServiceUncheckedUpdateManyWithoutMedicalCenterPricingInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InstitutionMedicalCeneterServiceUpdateManyWithWhereWithoutInstitutionInputObjectSchema =
  Schema;
