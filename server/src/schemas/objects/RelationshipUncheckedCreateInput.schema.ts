import { z } from 'zod';
import { BeneficiaryUncheckedCreateNestedManyWithoutRelationshipInputObjectSchema } from './BeneficiaryUncheckedCreateNestedManyWithoutRelationshipInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RelationshipUncheckedCreateInput> = z
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
          BeneficiaryUncheckedCreateNestedManyWithoutRelationshipInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RelationshipUncheckedCreateInputObjectSchema = Schema;
