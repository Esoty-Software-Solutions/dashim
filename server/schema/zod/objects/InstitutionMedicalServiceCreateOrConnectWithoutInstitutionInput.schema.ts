/* eslint-disable */
import { z } from 'zod';
import { InstitutionMedicalServiceWhereUniqueInputObjectSchema } from './InstitutionMedicalServiceWhereUniqueInput.schema';
import { InstitutionMedicalServiceCreateWithoutInstitutionInputObjectSchema } from './InstitutionMedicalServiceCreateWithoutInstitutionInput.schema';
import { InstitutionMedicalServiceUncheckedCreateWithoutInstitutionInputObjectSchema } from './InstitutionMedicalServiceUncheckedCreateWithoutInstitutionInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionMedicalServiceCreateOrConnectWithoutInstitutionInput>;
export const InstitutionMedicalServiceCreateOrConnectWithoutInstitutionInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => InstitutionMedicalServiceWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => InstitutionMedicalServiceCreateWithoutInstitutionInputObjectSchema),
            z.lazy(() => InstitutionMedicalServiceUncheckedCreateWithoutInstitutionInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
