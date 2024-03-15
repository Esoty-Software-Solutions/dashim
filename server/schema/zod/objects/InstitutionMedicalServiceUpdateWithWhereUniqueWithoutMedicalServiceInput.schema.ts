/* eslint-disable */
import { z } from 'zod';
import { InstitutionMedicalServiceWhereUniqueInputObjectSchema } from './InstitutionMedicalServiceWhereUniqueInput.schema';
import { InstitutionMedicalServiceUpdateWithoutMedicalServiceInputObjectSchema } from './InstitutionMedicalServiceUpdateWithoutMedicalServiceInput.schema';
import { InstitutionMedicalServiceUncheckedUpdateWithoutMedicalServiceInputObjectSchema } from './InstitutionMedicalServiceUncheckedUpdateWithoutMedicalServiceInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionMedicalServiceUpdateWithWhereUniqueWithoutMedicalServiceInput>;
export const InstitutionMedicalServiceUpdateWithWhereUniqueWithoutMedicalServiceInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => InstitutionMedicalServiceWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => InstitutionMedicalServiceUpdateWithoutMedicalServiceInputObjectSchema),
            z.lazy(() => InstitutionMedicalServiceUncheckedUpdateWithoutMedicalServiceInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
