import { z } from 'zod';
import { BeneficiaryCreateWithoutFingerprintInputObjectSchema } from './BeneficiaryCreateWithoutFingerprintInput.schema';
import { BeneficiaryUncheckedCreateWithoutFingerprintInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutFingerprintInput.schema';
import { BeneficiaryCreateOrConnectWithoutFingerprintInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutFingerprintInput.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryCreateNestedOneWithoutFingerprintInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BeneficiaryCreateWithoutFingerprintInputObjectSchema),
          z.lazy(
            () => BeneficiaryUncheckedCreateWithoutFingerprintInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => BeneficiaryCreateOrConnectWithoutFingerprintInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const BeneficiaryCreateNestedOneWithoutFingerprintInputObjectSchema =
  Schema;
