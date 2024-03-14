/* eslint-disable */
import { z } from 'zod';
import { CityEnumArgsObjectSchema } from './CityEnumArgs.schema';
import { InsurancePolicyInputSchema } from '../input/InsurancePolicyInput.schema';
import { InstitutionMedicalServiceInputSchema } from '../input/InstitutionMedicalServiceInput.schema';
import { InstitutionCountOutputTypeArgsObjectSchema } from './InstitutionCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionInclude>;
export const InstitutionIncludeObjectSchema: SchemaType = z
    .object({
        city: z.union([z.boolean(), z.lazy(() => CityEnumArgsObjectSchema)]).optional(),
        policies: z.union([z.boolean(), z.lazy(() => InsurancePolicyInputSchema.findMany)]).optional(),
        MedicalCenterPricing: z
            .union([z.boolean(), z.lazy(() => InstitutionMedicalServiceInputSchema.findMany)])
            .optional(),
        _count: z.union([z.boolean(), z.lazy(() => InstitutionCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
