/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterCreatephoneInputObjectSchema } from './MedicalCenterCreatephoneInput.schema';
import { MedicalCenterCreateemailInputObjectSchema } from './MedicalCenterCreateemailInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterCreateManyInput>;
export const MedicalCenterCreateManyInputObjectSchema: SchemaType = z
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
        description: z.string(),
        phone: z.union([z.lazy(() => MedicalCenterCreatephoneInputObjectSchema), z.string().array()]).optional(),
        email: z.union([z.lazy(() => MedicalCenterCreateemailInputObjectSchema), z.string().array()]).optional(),
        website: z.string(),
        facebookLink: z.string(),
        googleMapsLink: z.string(),
        twitterLink: z.string(),
        instagramLink: z.string(),
        latitude: z.union([z.number(), z.null()]).optional().nullable(),
        longitude: z.union([z.number(), z.null()]).optional().nullable(),
        managingTenantId: z.string(),
    })
    .strict() as SchemaType;
