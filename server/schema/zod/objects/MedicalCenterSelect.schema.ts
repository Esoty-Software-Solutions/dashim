/* eslint-disable */
import { z } from 'zod';
import { CityEnumArgsObjectSchema } from './CityEnumArgs.schema';
import { TenantArgsObjectSchema } from './TenantArgs.schema';
import { MedicalServiceInputSchema } from '../input/MedicalServiceInput.schema';
import { InsurancePolicyMedicalCenterInputSchema } from '../input/InsurancePolicyMedicalCenterInput.schema';
import { EntryRecordInputSchema } from '../input/EntryRecordInput.schema';
import { MedicalCenterCountOutputTypeArgsObjectSchema } from './MedicalCenterCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterSelect>;
export const MedicalCenterSelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        isActive: z.boolean().optional(),
        deactivationReason: z.boolean().optional(),
        deactivationDate: z.boolean().optional(),
        city: z.union([z.boolean(), z.lazy(() => CityEnumArgsObjectSchema)]).optional(),
        cityId: z.boolean().optional(),
        address: z.boolean().optional(),
        name: z.boolean().optional(),
        code: z.boolean().optional(),
        description: z.boolean().optional(),
        phone: z.boolean().optional(),
        email: z.boolean().optional(),
        website: z.boolean().optional(),
        facebookLink: z.boolean().optional(),
        googleMapsLink: z.boolean().optional(),
        twitterLink: z.boolean().optional(),
        instagramLink: z.boolean().optional(),
        latitude: z.boolean().optional(),
        longitude: z.boolean().optional(),
        managingTenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
        managingTenantId: z.boolean().optional(),
        services: z.union([z.boolean(), z.lazy(() => MedicalServiceInputSchema.findMany)]).optional(),
        insurancePolicy: z
            .union([z.boolean(), z.lazy(() => InsurancePolicyMedicalCenterInputSchema.findMany)])
            .optional(),
        entryRecords: z.union([z.boolean(), z.lazy(() => EntryRecordInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => MedicalCenterCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
