import { z } from 'zod';
import { UserCreateNestedManyWithoutGenderInputObjectSchema } from './UserCreateNestedManyWithoutGenderInput.schema';
import { BeneficiaryCreateNestedManyWithoutGenderInputObjectSchema } from './BeneficiaryCreateNestedManyWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderEnumCreateInput> = z
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
      .lazy(() => UserCreateNestedManyWithoutGenderInputObjectSchema)
      .optional(),
    beneficiary: z
      .lazy(() => BeneficiaryCreateNestedManyWithoutGenderInputObjectSchema)
      .optional(),
  })
  .strict();

export const GenderEnumCreateInputObjectSchema = Schema;
