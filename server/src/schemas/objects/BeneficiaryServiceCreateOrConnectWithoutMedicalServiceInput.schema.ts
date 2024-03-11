import { z } from 'zod';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';
import { BeneficiaryServiceCreateWithoutMedicalServiceInputObjectSchema } from './BeneficiaryServiceCreateWithoutMedicalServiceInput.schema';
import { BeneficiaryServiceUncheckedCreateWithoutMedicalServiceInputObjectSchema } from './BeneficiaryServiceUncheckedCreateWithoutMedicalServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceCreateOrConnectWithoutMedicalServiceInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => BeneficiaryServiceCreateWithoutMedicalServiceInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryServiceUncheckedCreateWithoutMedicalServiceInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryServiceCreateOrConnectWithoutMedicalServiceInputObjectSchema =
  Schema;
