import { z } from 'zod';
import { BeneficiaryCreateWithoutFaceInputObjectSchema } from './BeneficiaryCreateWithoutFaceInput.schema';
import { BeneficiaryUncheckedCreateWithoutFaceInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutFaceInput.schema';
import { BeneficiaryCreateOrConnectWithoutFaceInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutFaceInput.schema';
import { BeneficiaryUpsertWithoutFaceInputObjectSchema } from './BeneficiaryUpsertWithoutFaceInput.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateWithoutFaceInputObjectSchema } from './BeneficiaryUpdateWithoutFaceInput.schema';
import { BeneficiaryUncheckedUpdateWithoutFaceInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutFaceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUpdateOneRequiredWithoutFaceNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BeneficiaryCreateWithoutFaceInputObjectSchema),
          z.lazy(() => BeneficiaryUncheckedCreateWithoutFaceInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => BeneficiaryCreateOrConnectWithoutFaceInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => BeneficiaryUpsertWithoutFaceInputObjectSchema)
        .optional(),
      connect: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => BeneficiaryUpdateWithoutFaceInputObjectSchema),
          z.lazy(() => BeneficiaryUncheckedUpdateWithoutFaceInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const BeneficiaryUpdateOneRequiredWithoutFaceNestedInputObjectSchema =
  Schema;
