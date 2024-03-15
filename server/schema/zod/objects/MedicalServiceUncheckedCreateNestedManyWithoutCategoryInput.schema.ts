/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceCreateWithoutCategoryInputObjectSchema } from './MedicalServiceCreateWithoutCategoryInput.schema';
import { MedicalServiceUncheckedCreateWithoutCategoryInputObjectSchema } from './MedicalServiceUncheckedCreateWithoutCategoryInput.schema';
import { MedicalServiceCreateOrConnectWithoutCategoryInputObjectSchema } from './MedicalServiceCreateOrConnectWithoutCategoryInput.schema';
import { MedicalServiceCreateManyCategoryInputEnvelopeObjectSchema } from './MedicalServiceCreateManyCategoryInputEnvelope.schema';
import { MedicalServiceWhereUniqueInputObjectSchema } from './MedicalServiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceUncheckedCreateNestedManyWithoutCategoryInput>;
export const MedicalServiceUncheckedCreateNestedManyWithoutCategoryInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => MedicalServiceCreateWithoutCategoryInputObjectSchema),
                z.lazy(() => MedicalServiceCreateWithoutCategoryInputObjectSchema).array(),
                z.lazy(() => MedicalServiceUncheckedCreateWithoutCategoryInputObjectSchema),
                z.lazy(() => MedicalServiceUncheckedCreateWithoutCategoryInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => MedicalServiceCreateOrConnectWithoutCategoryInputObjectSchema),
                z.lazy(() => MedicalServiceCreateOrConnectWithoutCategoryInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => MedicalServiceCreateManyCategoryInputEnvelopeObjectSchema).optional(),
        connect: z
            .union([
                z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema),
                z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
