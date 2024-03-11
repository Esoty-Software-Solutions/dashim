/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { CityEnumArgsObjectSchema } from './CityEnumArgs.schema';
import { InsurancePolicyArgsObjectSchema } from './InsurancePolicyArgs.schema';
import { BeneficiaryInputSchema } from '../input/BeneficiaryInput.schema';
import { BeneficiaryEntityFutureStatusChangeInputSchema } from '../input/BeneficiaryEntityFutureStatusChangeInput.schema';
import { BeneficiaryEntityCountOutputTypeArgsObjectSchema } from './BeneficiaryEntityCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntitySelect>;
export const BeneficiaryEntitySelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        isActive: z.boolean().optional(),
        deactivationReason: z.boolean().optional(),
        deactivationDate: z.boolean().optional(),
        StatusSetBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
        statusSetById: z.boolean().optional(),
        city: z.union([z.boolean(), z.lazy(() => CityEnumArgsObjectSchema)]).optional(),
        cityId: z.boolean().optional(),
        address: z.boolean().optional(),
        insurancePolicy: z.union([z.boolean(), z.lazy(() => InsurancePolicyArgsObjectSchema)]).optional(),
        insurancePolicyId: z.boolean().optional(),
        beneficiaries: z.union([z.boolean(), z.lazy(() => BeneficiaryInputSchema.findMany)]).optional(),
        futureStatus: z
            .union([z.boolean(), z.lazy(() => BeneficiaryEntityFutureStatusChangeInputSchema.findMany)])
            .optional(),
        _count: z.union([z.boolean(), z.lazy(() => BeneficiaryEntityCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
