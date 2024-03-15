/* eslint-disable */
import { z } from 'zod';
import { CountryEnumArgsObjectSchema } from './CountryEnumArgs.schema';
import { InstitutionInputSchema } from '../input/InstitutionInput.schema';
import { MedicalCenterInputSchema } from '../input/MedicalCenterInput.schema';
import { BeneficiaryEntityInputSchema } from '../input/BeneficiaryEntityInput.schema';
import { CityEnumCountOutputTypeArgsObjectSchema } from './CityEnumCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumInclude>;
export const CityEnumIncludeObjectSchema: SchemaType = z
    .object({
        country: z.union([z.boolean(), z.lazy(() => CountryEnumArgsObjectSchema)]).optional(),
        institutions: z.union([z.boolean(), z.lazy(() => InstitutionInputSchema.findMany)]).optional(),
        medicalcenters: z.union([z.boolean(), z.lazy(() => MedicalCenterInputSchema.findMany)]).optional(),
        beneficiaryEntities: z.union([z.boolean(), z.lazy(() => BeneficiaryEntityInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => CityEnumCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
