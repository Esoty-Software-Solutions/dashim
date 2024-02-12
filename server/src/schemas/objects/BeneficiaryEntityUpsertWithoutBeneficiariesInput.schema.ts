import { z } from 'zod';
import { BeneficiaryEntityUpdateWithoutBeneficiariesInputObjectSchema } from './BeneficiaryEntityUpdateWithoutBeneficiariesInput.schema';
import { BeneficiaryEntityUncheckedUpdateWithoutBeneficiariesInputObjectSchema } from './BeneficiaryEntityUncheckedUpdateWithoutBeneficiariesInput.schema';
import { BeneficiaryEntityCreateWithoutBeneficiariesInputObjectSchema } from './BeneficiaryEntityCreateWithoutBeneficiariesInput.schema';
import { BeneficiaryEntityUncheckedCreateWithoutBeneficiariesInputObjectSchema } from './BeneficiaryEntityUncheckedCreateWithoutBeneficiariesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityUpsertWithoutBeneficiariesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => BeneficiaryEntityUpdateWithoutBeneficiariesInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryEntityUncheckedUpdateWithoutBeneficiariesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => BeneficiaryEntityCreateWithoutBeneficiariesInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryEntityUncheckedCreateWithoutBeneficiariesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryEntityUpsertWithoutBeneficiariesInputObjectSchema =
  Schema;
