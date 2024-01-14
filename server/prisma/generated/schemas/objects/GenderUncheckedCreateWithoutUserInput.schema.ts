import { z } from 'zod';
import { BeneficiaryUncheckedCreateNestedManyWithoutGenderInputObjectSchema } from './BeneficiaryUncheckedCreateNestedManyWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    arabic: z.string().optional().nullable(),
    english: z.string().optional().nullable(),
    name: z.string(),
    beneficiary: z
      .lazy(
        () =>
          BeneficiaryUncheckedCreateNestedManyWithoutGenderInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const GenderUncheckedCreateWithoutUserInputObjectSchema = Schema;
