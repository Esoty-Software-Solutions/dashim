/* eslint-disable */
import { z } from 'zod';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { UserCreateNestedOneWithoutBeneficiaryServiceCreationsInputObjectSchema } from './UserCreateNestedOneWithoutBeneficiaryServiceCreationsInput.schema';
import { UserCreateNestedOneWithoutBeneficiaryServiceUpdatesInputObjectSchema } from './UserCreateNestedOneWithoutBeneficiaryServiceUpdatesInput.schema';
import { EntryRecordCreateNestedOneWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordCreateNestedOneWithoutBeneficiaryServicesInput.schema';
import { MedicalServiceCreateNestedOneWithoutBeneficiaryServicesInputObjectSchema } from './MedicalServiceCreateNestedOneWithoutBeneficiaryServicesInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
    z.union([literalSchema, z.array(jsonSchema.nullable()), z.record(jsonSchema.nullable())]),
);

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceCreateWithoutReviewStatusInput>;
export const BeneficiaryServiceCreateWithoutReviewStatusInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        isActive: z.boolean().optional(),
        deactivationReason: z.union([z.string(), z.null()]).optional().nullable(),
        deactivationDate: z
            .union([z.union([z.date(), z.string().datetime().optional()]), z.null()])
            .optional()
            .nullable(),
        name: z.string(),
        Note: z.union([z.string(), z.null()]).optional().nullable(),
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
        CreatedBy: z.lazy(() => UserCreateNestedOneWithoutBeneficiaryServiceCreationsInputObjectSchema),
        UpdatedBy: z.lazy(() => UserCreateNestedOneWithoutBeneficiaryServiceUpdatesInputObjectSchema).optional(),
        entryRecord: z.lazy(() => EntryRecordCreateNestedOneWithoutBeneficiaryServicesInputObjectSchema),
        medicalService: z.lazy(() => MedicalServiceCreateNestedOneWithoutBeneficiaryServicesInputObjectSchema),
    })
    .strict() as SchemaType;
