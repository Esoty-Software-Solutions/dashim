import { z } from 'zod';
import { UserUncheckedCreateNestedManyWithoutGenderInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderEnumUncheckedCreateWithoutBeneficiaryInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      arabic: z.string().optional().nullable(),
      english: z.string().optional().nullable(),
      name: z.string(),
      user: z
        .lazy(() => UserUncheckedCreateNestedManyWithoutGenderInputObjectSchema)
        .optional(),
    })
    .strict();

export const GenderEnumUncheckedCreateWithoutBeneficiaryInputObjectSchema =
  Schema;
