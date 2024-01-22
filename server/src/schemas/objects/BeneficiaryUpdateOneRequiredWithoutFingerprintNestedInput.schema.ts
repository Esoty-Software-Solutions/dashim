import { z } from 'zod';
import { BeneficiaryCreateWithoutFingerprintInputObjectSchema } from './BeneficiaryCreateWithoutFingerprintInput.schema';
import { BeneficiaryUncheckedCreateWithoutFingerprintInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutFingerprintInput.schema';
import { BeneficiaryCreateOrConnectWithoutFingerprintInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutFingerprintInput.schema';
import { BeneficiaryUpsertWithoutFingerprintInputObjectSchema } from './BeneficiaryUpsertWithoutFingerprintInput.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateWithoutFingerprintInputObjectSchema } from './BeneficiaryUpdateWithoutFingerprintInput.schema';
import { BeneficiaryUncheckedUpdateWithoutFingerprintInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutFingerprintInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUpdateOneRequiredWithoutFingerprintNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BeneficiaryCreateWithoutFingerprintInputObjectSchema),
          z.lazy(
            () => BeneficiaryUncheckedCreateWithoutFingerprintInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => BeneficiaryCreateOrConnectWithoutFingerprintInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => BeneficiaryUpsertWithoutFingerprintInputObjectSchema)
        .optional(),
      connect: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => BeneficiaryUpdateWithoutFingerprintInputObjectSchema),
          z.lazy(
            () => BeneficiaryUncheckedUpdateWithoutFingerprintInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const BeneficiaryUpdateOneRequiredWithoutFingerprintNestedInputObjectSchema =
  Schema;
