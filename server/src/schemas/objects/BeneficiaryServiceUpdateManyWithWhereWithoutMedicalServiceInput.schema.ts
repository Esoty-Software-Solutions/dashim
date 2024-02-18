import { z } from 'zod';
import { BeneficiaryServiceScalarWhereInputObjectSchema } from './BeneficiaryServiceScalarWhereInput.schema';
import { BeneficiaryServiceUpdateManyMutationInputObjectSchema } from './BeneficiaryServiceUpdateManyMutationInput.schema';
import { BeneficiaryServiceUncheckedUpdateManyWithoutBeneficiaryServicesInputObjectSchema } from './BeneficiaryServiceUncheckedUpdateManyWithoutBeneficiaryServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceUpdateManyWithWhereWithoutMedicalServiceInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryServiceScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => BeneficiaryServiceUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            BeneficiaryServiceUncheckedUpdateManyWithoutBeneficiaryServicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryServiceUpdateManyWithWhereWithoutMedicalServiceInputObjectSchema =
  Schema;
