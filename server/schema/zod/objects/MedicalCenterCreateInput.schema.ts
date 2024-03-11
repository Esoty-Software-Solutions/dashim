/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterCreatephoneInputObjectSchema } from './MedicalCenterCreatephoneInput.schema';
import { MedicalCenterCreateemailInputObjectSchema } from './MedicalCenterCreateemailInput.schema';
import { CityEnumCreateNestedOneWithoutMedicalcentersInputObjectSchema } from './CityEnumCreateNestedOneWithoutMedicalcentersInput.schema';
import { TenantCreateNestedOneWithoutAssignedToMedicalCenterInputObjectSchema } from './TenantCreateNestedOneWithoutAssignedToMedicalCenterInput.schema';
import { MedicalServiceCreateNestedManyWithoutMedicalCenterInputObjectSchema } from './MedicalServiceCreateNestedManyWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCenterCreateNestedManyWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCenterCreateNestedManyWithoutMedicalCenterInput.schema';
import { EntryRecordCreateNestedManyWithoutMedicalCenterInputObjectSchema } from './EntryRecordCreateNestedManyWithoutMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterCreateInput>;
export const MedicalCenterCreateInputObjectSchema: SchemaType = z
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
        city: z.lazy(() => CityEnumCreateNestedOneWithoutMedicalcentersInputObjectSchema),
        managingTenant: z.lazy(() => TenantCreateNestedOneWithoutAssignedToMedicalCenterInputObjectSchema),
        services: z.lazy(() => MedicalServiceCreateNestedManyWithoutMedicalCenterInputObjectSchema).optional(),
        insurancePolicy: z
            .lazy(() => InsurancePolicyMedicalCenterCreateNestedManyWithoutMedicalCenterInputObjectSchema)
            .optional(),
        entryRecords: z.lazy(() => EntryRecordCreateNestedManyWithoutMedicalCenterInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
