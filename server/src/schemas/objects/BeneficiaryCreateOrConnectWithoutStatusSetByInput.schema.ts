import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryCreateWithoutStatusSetByInputObjectSchema } from './BeneficiaryCreateWithoutStatusSetByInput.schema';
import { BeneficiaryUncheckedCreateWithoutStatusSetByInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutStatusSetByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryCreateOrConnectWithoutStatusSetByInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => BeneficiaryCreateWithoutStatusSetByInputObjectSchema),
        z.lazy(
          () => BeneficiaryUncheckedCreateWithoutStatusSetByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryCreateOrConnectWithoutStatusSetByInputObjectSchema =
  Schema;
