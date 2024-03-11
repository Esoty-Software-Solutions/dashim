/* eslint-disable */
import { z } from 'zod';
import { CityEnumArgsObjectSchema } from './CityEnumArgs.schema';
import { TenantArgsObjectSchema } from './TenantArgs.schema';
import { MedicalServiceInputSchema } from '../input/MedicalServiceInput.schema';
import { InsurancePolicyMedicalCenterInputSchema } from '../input/InsurancePolicyMedicalCenterInput.schema';
import { EntryRecordInputSchema } from '../input/EntryRecordInput.schema';
import { MedicalCenterCountOutputTypeArgsObjectSchema } from './MedicalCenterCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterInclude>;
export const MedicalCenterIncludeObjectSchema: SchemaType = z
    .object({
        city: z.union([z.boolean(), z.lazy(() => CityEnumArgsObjectSchema)]).optional(),
        managingTenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
        services: z.union([z.boolean(), z.lazy(() => MedicalServiceInputSchema.findMany)]).optional(),
        insurancePolicy: z
            .union([z.boolean(), z.lazy(() => InsurancePolicyMedicalCenterInputSchema.findMany)])
            .optional(),
        entryRecords: z.union([z.boolean(), z.lazy(() => EntryRecordInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => MedicalCenterCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
