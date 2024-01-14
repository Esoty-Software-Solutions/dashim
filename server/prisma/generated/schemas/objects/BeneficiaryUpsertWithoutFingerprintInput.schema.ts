import { z } from 'zod';
import { BeneficiaryUpdateWithoutFingerprintInputObjectSchema } from './BeneficiaryUpdateWithoutFingerprintInput.schema';
import { BeneficiaryUncheckedUpdateWithoutFingerprintInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutFingerprintInput.schema';
import { BeneficiaryCreateWithoutFingerprintInputObjectSchema } from './BeneficiaryCreateWithoutFingerprintInput.schema';
import { BeneficiaryUncheckedCreateWithoutFingerprintInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutFingerprintInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUpsertWithoutFingerprintInput> = z
  .object({
    update: z.union([
      z.lazy(() => BeneficiaryUpdateWithoutFingerprintInputObjectSchema),
      z.lazy(
        () => BeneficiaryUncheckedUpdateWithoutFingerprintInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => BeneficiaryCreateWithoutFingerprintInputObjectSchema),
      z.lazy(
        () => BeneficiaryUncheckedCreateWithoutFingerprintInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const BeneficiaryUpsertWithoutFingerprintInputObjectSchema = Schema;
