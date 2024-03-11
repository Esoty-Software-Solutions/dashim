/* eslint-disable */
import { z } from 'zod';
import { InstitutionMedicalServiceCreateWithoutMedicalServiceInputObjectSchema } from './InstitutionMedicalServiceCreateWithoutMedicalServiceInput.schema';
import { InstitutionMedicalServiceUncheckedCreateWithoutMedicalServiceInputObjectSchema } from './InstitutionMedicalServiceUncheckedCreateWithoutMedicalServiceInput.schema';
import { InstitutionMedicalServiceCreateOrConnectWithoutMedicalServiceInputObjectSchema } from './InstitutionMedicalServiceCreateOrConnectWithoutMedicalServiceInput.schema';
import { InstitutionMedicalServiceCreateManyMedicalServiceInputEnvelopeObjectSchema } from './InstitutionMedicalServiceCreateManyMedicalServiceInputEnvelope.schema';
import { InstitutionMedicalServiceWhereUniqueInputObjectSchema } from './InstitutionMedicalServiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionMedicalServiceCreateNestedManyWithoutMedicalServiceInput>;
export const InstitutionMedicalServiceCreateNestedManyWithoutMedicalServiceInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => InstitutionMedicalServiceCreateWithoutMedicalServiceInputObjectSchema),
                z.lazy(() => InstitutionMedicalServiceCreateWithoutMedicalServiceInputObjectSchema).array(),
                z.lazy(() => InstitutionMedicalServiceUncheckedCreateWithoutMedicalServiceInputObjectSchema),
                z.lazy(() => InstitutionMedicalServiceUncheckedCreateWithoutMedicalServiceInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => InstitutionMedicalServiceCreateOrConnectWithoutMedicalServiceInputObjectSchema),
                z.lazy(() => InstitutionMedicalServiceCreateOrConnectWithoutMedicalServiceInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => InstitutionMedicalServiceCreateManyMedicalServiceInputEnvelopeObjectSchema).optional(),
        connect: z
            .union([
                z.lazy(() => InstitutionMedicalServiceWhereUniqueInputObjectSchema),
                z.lazy(() => InstitutionMedicalServiceWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
