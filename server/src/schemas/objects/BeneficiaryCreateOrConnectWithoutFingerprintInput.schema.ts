import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryCreateWithoutFingerprintInputObjectSchema } from './BeneficiaryCreateWithoutFingerprintInput.schema';
import { BeneficiaryUncheckedCreateWithoutFingerprintInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutFingerprintInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryCreateOrConnectWithoutFingerprintInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => BeneficiaryCreateWithoutFingerprintInputObjectSchema),
        z.lazy(
          () => BeneficiaryUncheckedCreateWithoutFingerprintInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryCreateOrConnectWithoutFingerprintInputObjectSchema =
  Schema;
