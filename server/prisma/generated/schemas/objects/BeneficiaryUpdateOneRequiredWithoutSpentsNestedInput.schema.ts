import { z } from 'zod';
import { BeneficiaryCreateWithoutSpentsInputObjectSchema } from './BeneficiaryCreateWithoutSpentsInput.schema';
import { BeneficiaryUncheckedCreateWithoutSpentsInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutSpentsInput.schema';
import { BeneficiaryCreateOrConnectWithoutSpentsInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutSpentsInput.schema';
import { BeneficiaryUpsertWithoutSpentsInputObjectSchema } from './BeneficiaryUpsertWithoutSpentsInput.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateWithoutSpentsInputObjectSchema } from './BeneficiaryUpdateWithoutSpentsInput.schema';
import { BeneficiaryUncheckedUpdateWithoutSpentsInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutSpentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUpdateOneRequiredWithoutSpentsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BeneficiaryCreateWithoutSpentsInputObjectSchema),
          z.lazy(
            () => BeneficiaryUncheckedCreateWithoutSpentsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => BeneficiaryCreateOrConnectWithoutSpentsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => BeneficiaryUpsertWithoutSpentsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => BeneficiaryUpdateWithoutSpentsInputObjectSchema),
          z.lazy(
            () => BeneficiaryUncheckedUpdateWithoutSpentsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const BeneficiaryUpdateOneRequiredWithoutSpentsNestedInputObjectSchema =
  Schema;
