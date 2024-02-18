import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeCreateManyCreatedByInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      updatedById: z.string().optional().nullable(),
      changeDate: z.coerce.date(),
      futureStatus: z.boolean(),
      description: z.string().optional().nullable(),
      beneficiaryEntityId: z.string(),
    })
    .strict();

export const BeneficiaryEntityFutureStatusChangeCreateManyCreatedByInputObjectSchema =
  Schema;
