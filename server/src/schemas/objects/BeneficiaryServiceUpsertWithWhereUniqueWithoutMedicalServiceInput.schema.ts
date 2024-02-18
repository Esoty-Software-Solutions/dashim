import { z } from 'zod';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';
import { BeneficiaryServiceUpdateWithoutMedicalServiceInputObjectSchema } from './BeneficiaryServiceUpdateWithoutMedicalServiceInput.schema';
import { BeneficiaryServiceUncheckedUpdateWithoutMedicalServiceInputObjectSchema } from './BeneficiaryServiceUncheckedUpdateWithoutMedicalServiceInput.schema';
import { BeneficiaryServiceCreateWithoutMedicalServiceInputObjectSchema } from './BeneficiaryServiceCreateWithoutMedicalServiceInput.schema';
import { BeneficiaryServiceUncheckedCreateWithoutMedicalServiceInputObjectSchema } from './BeneficiaryServiceUncheckedCreateWithoutMedicalServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceUpsertWithWhereUniqueWithoutMedicalServiceInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => BeneficiaryServiceUpdateWithoutMedicalServiceInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryServiceUncheckedUpdateWithoutMedicalServiceInputObjectSchema,
        ),
      ]),
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

export const BeneficiaryServiceUpsertWithWhereUniqueWithoutMedicalServiceInputObjectSchema =
  Schema;
