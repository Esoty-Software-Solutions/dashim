import { z } from 'zod';
import { GenderEnumWhereUniqueInputObjectSchema } from './GenderEnumWhereUniqueInput.schema';
import { GenderEnumCreateWithoutBeneficiaryInputObjectSchema } from './GenderEnumCreateWithoutBeneficiaryInput.schema';
import { GenderEnumUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './GenderEnumUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderEnumCreateOrConnectWithoutBeneficiaryInput> =
  z
    .object({
      where: z.lazy(() => GenderEnumWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => GenderEnumCreateWithoutBeneficiaryInputObjectSchema),
        z.lazy(
          () => GenderEnumUncheckedCreateWithoutBeneficiaryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GenderEnumCreateOrConnectWithoutBeneficiaryInputObjectSchema =
  Schema;
