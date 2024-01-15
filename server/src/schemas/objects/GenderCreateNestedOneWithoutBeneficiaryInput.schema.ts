import { z } from 'zod';
import { GenderCreateWithoutBeneficiaryInputObjectSchema } from './GenderCreateWithoutBeneficiaryInput.schema';
import { GenderUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './GenderUncheckedCreateWithoutBeneficiaryInput.schema';
import { GenderCreateOrConnectWithoutBeneficiaryInputObjectSchema } from './GenderCreateOrConnectWithoutBeneficiaryInput.schema';
import { GenderWhereUniqueInputObjectSchema } from './GenderWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderCreateNestedOneWithoutBeneficiaryInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => GenderCreateWithoutBeneficiaryInputObjectSchema),
        z.lazy(() => GenderUncheckedCreateWithoutBeneficiaryInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => GenderCreateOrConnectWithoutBeneficiaryInputObjectSchema)
      .optional(),
    connect: z.lazy(() => GenderWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const GenderCreateNestedOneWithoutBeneficiaryInputObjectSchema = Schema;
