import { z } from 'zod';
import { GenderCreateWithoutBeneficiaryInputObjectSchema } from './GenderCreateWithoutBeneficiaryInput.schema';
import { GenderUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './GenderUncheckedCreateWithoutBeneficiaryInput.schema';
import { GenderCreateOrConnectWithoutBeneficiaryInputObjectSchema } from './GenderCreateOrConnectWithoutBeneficiaryInput.schema';
import { GenderUpsertWithoutBeneficiaryInputObjectSchema } from './GenderUpsertWithoutBeneficiaryInput.schema';
import { GenderWhereUniqueInputObjectSchema } from './GenderWhereUniqueInput.schema';
import { GenderUpdateWithoutBeneficiaryInputObjectSchema } from './GenderUpdateWithoutBeneficiaryInput.schema';
import { GenderUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './GenderUncheckedUpdateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderUpdateOneRequiredWithoutBeneficiaryNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GenderCreateWithoutBeneficiaryInputObjectSchema),
          z.lazy(
            () => GenderUncheckedCreateWithoutBeneficiaryInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => GenderCreateOrConnectWithoutBeneficiaryInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => GenderUpsertWithoutBeneficiaryInputObjectSchema)
        .optional(),
      connect: z.lazy(() => GenderWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => GenderUpdateWithoutBeneficiaryInputObjectSchema),
          z.lazy(
            () => GenderUncheckedUpdateWithoutBeneficiaryInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const GenderUpdateOneRequiredWithoutBeneficiaryNestedInputObjectSchema =
  Schema;
