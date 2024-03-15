/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { ReviewStatusArgsObjectSchema } from './ReviewStatusArgs.schema';
import { EntryRecordArgsObjectSchema } from './EntryRecordArgs.schema';
import { MedicalServiceArgsObjectSchema } from './MedicalServiceArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceInclude>;
export const BeneficiaryServiceIncludeObjectSchema: SchemaType = z
    .object({
        CreatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
        UpdatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
        reviewStatus: z.union([z.boolean(), z.lazy(() => ReviewStatusArgsObjectSchema)]).optional(),
        entryRecord: z.union([z.boolean(), z.lazy(() => EntryRecordArgsObjectSchema)]).optional(),
        medicalService: z.union([z.boolean(), z.lazy(() => MedicalServiceArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
