import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryCreateWithoutGenderInputObjectSchema } from './BeneficiaryCreateWithoutGenderInput.schema';
import { BeneficiaryUncheckedCreateWithoutGenderInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryCreateOrConnectWithoutGenderInput> = z
  .object({
    where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BeneficiaryCreateWithoutGenderInputObjectSchema),
      z.lazy(() => BeneficiaryUncheckedCreateWithoutGenderInputObjectSchema),
    ]),
  })
  .strict();

export const BeneficiaryCreateOrConnectWithoutGenderInputObjectSchema = Schema;
