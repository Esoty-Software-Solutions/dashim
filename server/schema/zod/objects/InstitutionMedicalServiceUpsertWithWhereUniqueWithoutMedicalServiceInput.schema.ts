/* eslint-disable */
import { z } from 'zod';
import { InstitutionMedicalServiceWhereUniqueInputObjectSchema } from './InstitutionMedicalServiceWhereUniqueInput.schema';
import { InstitutionMedicalServiceUpdateWithoutMedicalServiceInputObjectSchema } from './InstitutionMedicalServiceUpdateWithoutMedicalServiceInput.schema';
import { InstitutionMedicalServiceUncheckedUpdateWithoutMedicalServiceInputObjectSchema } from './InstitutionMedicalServiceUncheckedUpdateWithoutMedicalServiceInput.schema';
import { InstitutionMedicalServiceCreateWithoutMedicalServiceInputObjectSchema } from './InstitutionMedicalServiceCreateWithoutMedicalServiceInput.schema';
import { InstitutionMedicalServiceUncheckedCreateWithoutMedicalServiceInputObjectSchema } from './InstitutionMedicalServiceUncheckedCreateWithoutMedicalServiceInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionMedicalServiceUpsertWithWhereUniqueWithoutMedicalServiceInput>;
export const InstitutionMedicalServiceUpsertWithWhereUniqueWithoutMedicalServiceInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => InstitutionMedicalServiceWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => InstitutionMedicalServiceUpdateWithoutMedicalServiceInputObjectSchema),
            z.lazy(() => InstitutionMedicalServiceUncheckedUpdateWithoutMedicalServiceInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => InstitutionMedicalServiceCreateWithoutMedicalServiceInputObjectSchema),
            z.lazy(() => InstitutionMedicalServiceUncheckedCreateWithoutMedicalServiceInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
