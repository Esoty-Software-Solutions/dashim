import { z } from 'zod';
import { GenderEnumCreateWithoutBeneficiaryInputObjectSchema } from './GenderEnumCreateWithoutBeneficiaryInput.schema';
import { GenderEnumUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './GenderEnumUncheckedCreateWithoutBeneficiaryInput.schema';
import { GenderEnumCreateOrConnectWithoutBeneficiaryInputObjectSchema } from './GenderEnumCreateOrConnectWithoutBeneficiaryInput.schema';
import { GenderEnumWhereUniqueInputObjectSchema } from './GenderEnumWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderEnumCreateNestedOneWithoutBeneficiaryInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GenderEnumCreateWithoutBeneficiaryInputObjectSchema),
          z.lazy(
            () => GenderEnumUncheckedCreateWithoutBeneficiaryInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => GenderEnumCreateOrConnectWithoutBeneficiaryInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => GenderEnumWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const GenderEnumCreateNestedOneWithoutBeneficiaryInputObjectSchema =
  Schema;
