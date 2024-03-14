/* eslint-disable */
import { z } from 'zod';
import { InstitutionMedicalServiceCreateWithoutMedicalServiceInputObjectSchema } from './InstitutionMedicalServiceCreateWithoutMedicalServiceInput.schema';
import { InstitutionMedicalServiceUncheckedCreateWithoutMedicalServiceInputObjectSchema } from './InstitutionMedicalServiceUncheckedCreateWithoutMedicalServiceInput.schema';
import { InstitutionMedicalServiceCreateOrConnectWithoutMedicalServiceInputObjectSchema } from './InstitutionMedicalServiceCreateOrConnectWithoutMedicalServiceInput.schema';
import { InstitutionMedicalServiceUpsertWithWhereUniqueWithoutMedicalServiceInputObjectSchema } from './InstitutionMedicalServiceUpsertWithWhereUniqueWithoutMedicalServiceInput.schema';
import { InstitutionMedicalServiceCreateManyMedicalServiceInputEnvelopeObjectSchema } from './InstitutionMedicalServiceCreateManyMedicalServiceInputEnvelope.schema';
import { InstitutionMedicalServiceWhereUniqueInputObjectSchema } from './InstitutionMedicalServiceWhereUniqueInput.schema';
import { InstitutionMedicalServiceUpdateWithWhereUniqueWithoutMedicalServiceInputObjectSchema } from './InstitutionMedicalServiceUpdateWithWhereUniqueWithoutMedicalServiceInput.schema';
import { InstitutionMedicalServiceUpdateManyWithWhereWithoutMedicalServiceInputObjectSchema } from './InstitutionMedicalServiceUpdateManyWithWhereWithoutMedicalServiceInput.schema';
import { InstitutionMedicalServiceScalarWhereInputObjectSchema } from './InstitutionMedicalServiceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionMedicalServiceUpdateManyWithoutMedicalServiceNestedInput>;
export const InstitutionMedicalServiceUpdateManyWithoutMedicalServiceNestedInputObjectSchema: SchemaType = z
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
        upsert: z
            .union([
                z.lazy(() => InstitutionMedicalServiceUpsertWithWhereUniqueWithoutMedicalServiceInputObjectSchema),
                z
                    .lazy(() => InstitutionMedicalServiceUpsertWithWhereUniqueWithoutMedicalServiceInputObjectSchema)
                    .array(),
            ])
            .optional(),
        createMany: z.lazy(() => InstitutionMedicalServiceCreateManyMedicalServiceInputEnvelopeObjectSchema).optional(),
        set: z
            .union([
                z.lazy(() => InstitutionMedicalServiceWhereUniqueInputObjectSchema),
                z.lazy(() => InstitutionMedicalServiceWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => InstitutionMedicalServiceWhereUniqueInputObjectSchema),
                z.lazy(() => InstitutionMedicalServiceWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => InstitutionMedicalServiceWhereUniqueInputObjectSchema),
                z.lazy(() => InstitutionMedicalServiceWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => InstitutionMedicalServiceWhereUniqueInputObjectSchema),
                z.lazy(() => InstitutionMedicalServiceWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(() => InstitutionMedicalServiceUpdateWithWhereUniqueWithoutMedicalServiceInputObjectSchema),
                z
                    .lazy(() => InstitutionMedicalServiceUpdateWithWhereUniqueWithoutMedicalServiceInputObjectSchema)
                    .array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => InstitutionMedicalServiceUpdateManyWithWhereWithoutMedicalServiceInputObjectSchema),
                z
                    .lazy(() => InstitutionMedicalServiceUpdateManyWithWhereWithoutMedicalServiceInputObjectSchema)
                    .array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => InstitutionMedicalServiceScalarWhereInputObjectSchema),
                z.lazy(() => InstitutionMedicalServiceScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
