/* eslint-disable */
import { z } from 'zod';
import { CountryEnumArgsObjectSchema } from './CountryEnumArgs.schema';
import { InstitutionInputSchema } from '../input/InstitutionInput.schema';
import { MedicalCenterInputSchema } from '../input/MedicalCenterInput.schema';
import { BeneficiaryEntityInputSchema } from '../input/BeneficiaryEntityInput.schema';
import { CityEnumCountOutputTypeArgsObjectSchema } from './CityEnumCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumSelect>;
export const CityEnumSelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        arabic: z.boolean().optional(),
        english: z.boolean().optional(),
        name: z.boolean().optional(),
        country: z.union([z.boolean(), z.lazy(() => CountryEnumArgsObjectSchema)]).optional(),
        countryId: z.boolean().optional(),
        institutions: z.union([z.boolean(), z.lazy(() => InstitutionInputSchema.findMany)]).optional(),
        medicalcenters: z.union([z.boolean(), z.lazy(() => MedicalCenterInputSchema.findMany)]).optional(),
        beneficiaryEntities: z.union([z.boolean(), z.lazy(() => BeneficiaryEntityInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => CityEnumCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
