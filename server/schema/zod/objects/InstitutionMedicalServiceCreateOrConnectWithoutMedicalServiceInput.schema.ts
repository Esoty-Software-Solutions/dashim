/* eslint-disable */
import { z } from 'zod';
import { InstitutionMedicalServiceWhereUniqueInputObjectSchema } from './InstitutionMedicalServiceWhereUniqueInput.schema';
import { InstitutionMedicalServiceCreateWithoutMedicalServiceInputObjectSchema } from './InstitutionMedicalServiceCreateWithoutMedicalServiceInput.schema';
import { InstitutionMedicalServiceUncheckedCreateWithoutMedicalServiceInputObjectSchema } from './InstitutionMedicalServiceUncheckedCreateWithoutMedicalServiceInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionMedicalServiceCreateOrConnectWithoutMedicalServiceInput>;
export const InstitutionMedicalServiceCreateOrConnectWithoutMedicalServiceInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => InstitutionMedicalServiceWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => InstitutionMedicalServiceCreateWithoutMedicalServiceInputObjectSchema),
            z.lazy(() => InstitutionMedicalServiceUncheckedCreateWithoutMedicalServiceInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
