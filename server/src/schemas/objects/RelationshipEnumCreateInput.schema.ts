import { z } from 'zod';
import { BeneficiaryCreateNestedManyWithoutRelationshipInputObjectSchema } from './BeneficiaryCreateNestedManyWithoutRelationshipInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RelationshipEnumCreateInput> = z
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
        () => BeneficiaryCreateNestedManyWithoutRelationshipInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RelationshipEnumCreateInputObjectSchema = Schema;
