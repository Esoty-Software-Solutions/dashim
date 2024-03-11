import { z } from 'zod';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';
import { BeneficiaryServiceUpdateWithoutMedicalServiceInputObjectSchema } from './BeneficiaryServiceUpdateWithoutMedicalServiceInput.schema';
import { BeneficiaryServiceUncheckedUpdateWithoutMedicalServiceInputObjectSchema } from './BeneficiaryServiceUncheckedUpdateWithoutMedicalServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceUpdateWithWhereUniqueWithoutMedicalServiceInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => BeneficiaryServiceUpdateWithoutMedicalServiceInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryServiceUncheckedUpdateWithoutMedicalServiceInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryServiceUpdateWithWhereUniqueWithoutMedicalServiceInputObjectSchema =
  Schema;
