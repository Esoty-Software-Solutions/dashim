/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectSchema: SchemaType = z
    .object({
        deviceToken: z.boolean().optional(),
        ownerOf: z.boolean().optional(),
        memberOf: z.boolean().optional(),
        beneficiaryEntityStatusChanges: z.boolean().optional(),
        beneficiaryStatusChanges: z.boolean().optional(),
        beneficiaryEntityFutureStatusCreations: z.boolean().optional(),
        beneficiaryEntityFutureStatusUpdates: z.boolean().optional(),
        beneficiaryFutureStatusCreations: z.boolean().optional(),
        beneficiaryFutureStatusUpdates: z.boolean().optional(),
        ReviewStatusCreations: z.boolean().optional(),
        ReviewStatusUpdates: z.boolean().optional(),
        BeneficiaryServiceCreations: z.boolean().optional(),
        BeneficiaryServiceUpdates: z.boolean().optional(),
        EntryRecordServiceCreations: z.boolean().optional(),
        EntryRecordServiceUpdates: z.boolean().optional(),
    })
    .strict() as SchemaType;
