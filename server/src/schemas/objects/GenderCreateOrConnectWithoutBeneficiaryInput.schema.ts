import { z } from 'zod';
import { GenderWhereUniqueInputObjectSchema } from './GenderWhereUniqueInput.schema';
import { GenderCreateWithoutBeneficiaryInputObjectSchema } from './GenderCreateWithoutBeneficiaryInput.schema';
import { GenderUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './GenderUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderCreateOrConnectWithoutBeneficiaryInput> = z
  .object({
    where: z.lazy(() => GenderWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => GenderCreateWithoutBeneficiaryInputObjectSchema),
      z.lazy(() => GenderUncheckedCreateWithoutBeneficiaryInputObjectSchema),
    ]),
  })
  .strict();

export const GenderCreateOrConnectWithoutBeneficiaryInputObjectSchema = Schema;
