/* eslint-disable */
import { z } from 'zod';
import { InstitutionCreatephoneArrayInputObjectSchema } from './InstitutionCreatephoneArrayInput.schema';
import { InstitutionCreateemailArrayInputObjectSchema } from './InstitutionCreateemailArrayInput.schema';
import { InstitutionMedicalServiceUncheckedCreateNestedManyWithoutInstitutionInputObjectSchema } from './InstitutionMedicalServiceUncheckedCreateNestedManyWithoutInstitutionInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionUncheckedCreateWithoutPoliciesInput>;
export const InstitutionUncheckedCreateWithoutPoliciesInputObjectSchema: SchemaType = z
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
        cityId: z.string(),
        address: z.union([z.string(), z.null()]).optional().nullable(),
        name: z.string(),
        code: z.string(),
        legacyCode: z.union([z.string(), z.null()]).optional().nullable(),
        description: z.union([z.string(), z.null()]).optional().nullable(),
        phoneArray: z
            .union([z.lazy(() => InstitutionCreatephoneArrayInputObjectSchema), z.string().array()])
            .optional(),
        emailArray: z
            .union([z.lazy(() => InstitutionCreateemailArrayInputObjectSchema), z.string().array()])
            .optional(),
        website: z.string(),
        facebookLink: z.string(),
        googleMapsLink: z.string(),
        twitterLink: z.string(),
        instagramLink: z.string(),
        latitude: z.union([z.number(), z.null()]).optional().nullable(),
        longitude: z.union([z.number(), z.null()]).optional().nullable(),
        MedicalCenterPricing: z
            .lazy(() => InstitutionMedicalServiceUncheckedCreateNestedManyWithoutInstitutionInputObjectSchema)
            .optional(),
    })
    .strict() as SchemaType;
