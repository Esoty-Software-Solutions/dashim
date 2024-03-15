/* eslint-disable */
import { z } from 'zod';
import { CityEnumArgsObjectSchema } from './CityEnumArgs.schema';
import { InsurancePolicyInputSchema } from '../input/InsurancePolicyInput.schema';
import { InstitutionMedicalServiceInputSchema } from '../input/InstitutionMedicalServiceInput.schema';
import { InstitutionCountOutputTypeArgsObjectSchema } from './InstitutionCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionSelect>;
export const InstitutionSelectObjectSchema: SchemaType = z
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
        legacyCode: z.boolean().optional(),
        description: z.boolean().optional(),
        phoneArray: z.boolean().optional(),
        emailArray: z.boolean().optional(),
        website: z.boolean().optional(),
        facebookLink: z.boolean().optional(),
        googleMapsLink: z.boolean().optional(),
        twitterLink: z.boolean().optional(),
        instagramLink: z.boolean().optional(),
        latitude: z.boolean().optional(),
        longitude: z.boolean().optional(),
        policies: z.union([z.boolean(), z.lazy(() => InsurancePolicyInputSchema.findMany)]).optional(),
        MedicalCenterPricing: z
            .union([z.boolean(), z.lazy(() => InstitutionMedicalServiceInputSchema.findMany)])
            .optional(),
        _count: z.union([z.boolean(), z.lazy(() => InstitutionCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
