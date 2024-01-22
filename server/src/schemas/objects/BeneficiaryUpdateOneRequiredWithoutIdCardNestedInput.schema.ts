import { z } from 'zod';
import { BeneficiaryCreateWithoutIdCardInputObjectSchema } from './BeneficiaryCreateWithoutIdCardInput.schema';
import { BeneficiaryUncheckedCreateWithoutIdCardInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutIdCardInput.schema';
import { BeneficiaryCreateOrConnectWithoutIdCardInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutIdCardInput.schema';
import { BeneficiaryUpsertWithoutIdCardInputObjectSchema } from './BeneficiaryUpsertWithoutIdCardInput.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateWithoutIdCardInputObjectSchema } from './BeneficiaryUpdateWithoutIdCardInput.schema';
import { BeneficiaryUncheckedUpdateWithoutIdCardInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutIdCardInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUpdateOneRequiredWithoutIdCardNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BeneficiaryCreateWithoutIdCardInputObjectSchema),
          z.lazy(
            () => BeneficiaryUncheckedCreateWithoutIdCardInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => BeneficiaryCreateOrConnectWithoutIdCardInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => BeneficiaryUpsertWithoutIdCardInputObjectSchema)
        .optional(),
      connect: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => BeneficiaryUpdateWithoutIdCardInputObjectSchema),
          z.lazy(
            () => BeneficiaryUncheckedUpdateWithoutIdCardInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const BeneficiaryUpdateOneRequiredWithoutIdCardNestedInputObjectSchema =
  Schema;
