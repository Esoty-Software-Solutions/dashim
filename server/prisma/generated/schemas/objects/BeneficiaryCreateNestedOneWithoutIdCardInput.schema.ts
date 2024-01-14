import { z } from 'zod';
import { BeneficiaryCreateWithoutIdCardInputObjectSchema } from './BeneficiaryCreateWithoutIdCardInput.schema';
import { BeneficiaryUncheckedCreateWithoutIdCardInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutIdCardInput.schema';
import { BeneficiaryCreateOrConnectWithoutIdCardInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutIdCardInput.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryCreateNestedOneWithoutIdCardInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => BeneficiaryCreateWithoutIdCardInputObjectSchema),
        z.lazy(() => BeneficiaryUncheckedCreateWithoutIdCardInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => BeneficiaryCreateOrConnectWithoutIdCardInputObjectSchema)
      .optional(),
    connect: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const BeneficiaryCreateNestedOneWithoutIdCardInputObjectSchema = Schema;
