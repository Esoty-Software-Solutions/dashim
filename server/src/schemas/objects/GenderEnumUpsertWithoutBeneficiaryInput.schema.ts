import { z } from 'zod';
import { GenderEnumUpdateWithoutBeneficiaryInputObjectSchema } from './GenderEnumUpdateWithoutBeneficiaryInput.schema';
import { GenderEnumUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './GenderEnumUncheckedUpdateWithoutBeneficiaryInput.schema';
import { GenderEnumCreateWithoutBeneficiaryInputObjectSchema } from './GenderEnumCreateWithoutBeneficiaryInput.schema';
import { GenderEnumUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './GenderEnumUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderEnumUpsertWithoutBeneficiaryInput> = z
  .object({
    update: z.union([
      z.lazy(() => GenderEnumUpdateWithoutBeneficiaryInputObjectSchema),
      z.lazy(
        () => GenderEnumUncheckedUpdateWithoutBeneficiaryInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => GenderEnumCreateWithoutBeneficiaryInputObjectSchema),
      z.lazy(
        () => GenderEnumUncheckedCreateWithoutBeneficiaryInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const GenderEnumUpsertWithoutBeneficiaryInputObjectSchema = Schema;
