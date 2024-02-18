import { z } from 'zod';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.BeneficiaryServiceCreateManyUpdatedByInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    createdById: z.string(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    deactivationDate: z.coerce.date().optional().nullable(),
    name: z.string(),
    Note: z.string().optional().nullable(),
    billedAmmount: z.number(),
    allowedAmmount: z.number(),
    copayAmmount: z.number(),
    cashAmount: z.number(),
    coveredAmount: z.number(),
    defferedAmount: z.number(),
    coinsuranceAmount: z.number(),
    notes: z.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema]),
    isExamination: z.boolean(),
    groupId: z.string(),
    reviewStatusId: z.string(),
    entryRecordId: z.string(),
    medicalServiceId: z.string(),
  })
  .strict();

export const BeneficiaryServiceCreateManyUpdatedByInputObjectSchema = Schema;
