/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { CityEnumArgsObjectSchema } from './CityEnumArgs.schema';
import { InsurancePolicyArgsObjectSchema } from './InsurancePolicyArgs.schema';
import { BeneficiaryInputSchema } from '../input/BeneficiaryInput.schema';
import { BeneficiaryEntityFutureStatusChangeInputSchema } from '../input/BeneficiaryEntityFutureStatusChangeInput.schema';
import { BeneficiaryEntityCountOutputTypeArgsObjectSchema } from './BeneficiaryEntityCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityInclude>;
export const BeneficiaryEntityIncludeObjectSchema: SchemaType = z
    .object({
        StatusSetBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
        city: z.union([z.boolean(), z.lazy(() => CityEnumArgsObjectSchema)]).optional(),
        insurancePolicy: z.union([z.boolean(), z.lazy(() => InsurancePolicyArgsObjectSchema)]).optional(),
        beneficiaries: z.union([z.boolean(), z.lazy(() => BeneficiaryInputSchema.findMany)]).optional(),
        futureStatus: z
            .union([z.boolean(), z.lazy(() => BeneficiaryEntityFutureStatusChangeInputSchema.findMany)])
            .optional(),
        _count: z.union([z.boolean(), z.lazy(() => BeneficiaryEntityCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
