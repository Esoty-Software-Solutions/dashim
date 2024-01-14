import { z } from 'zod';
import { BeneficiaryCreateWithoutSpentsInputObjectSchema } from './BeneficiaryCreateWithoutSpentsInput.schema';
import { BeneficiaryUncheckedCreateWithoutSpentsInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutSpentsInput.schema';
import { BeneficiaryCreateOrConnectWithoutSpentsInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutSpentsInput.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryCreateNestedOneWithoutSpentsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => BeneficiaryCreateWithoutSpentsInputObjectSchema),
        z.lazy(() => BeneficiaryUncheckedCreateWithoutSpentsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => BeneficiaryCreateOrConnectWithoutSpentsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const BeneficiaryCreateNestedOneWithoutSpentsInputObjectSchema = Schema;
