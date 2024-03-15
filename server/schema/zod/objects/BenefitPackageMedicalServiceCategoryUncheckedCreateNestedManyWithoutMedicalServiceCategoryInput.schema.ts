/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageMedicalServiceCategoryCreateWithoutMedicalServiceCategoryInputObjectSchema } from './BenefitPackageMedicalServiceCategoryCreateWithoutMedicalServiceCategoryInput.schema';
import { BenefitPackageMedicalServiceCategoryUncheckedCreateWithoutMedicalServiceCategoryInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUncheckedCreateWithoutMedicalServiceCategoryInput.schema';
import { BenefitPackageMedicalServiceCategoryCreateOrConnectWithoutMedicalServiceCategoryInputObjectSchema } from './BenefitPackageMedicalServiceCategoryCreateOrConnectWithoutMedicalServiceCategoryInput.schema';
import { BenefitPackageMedicalServiceCategoryCreateManyMedicalServiceCategoryInputEnvelopeObjectSchema } from './BenefitPackageMedicalServiceCategoryCreateManyMedicalServiceCategoryInputEnvelope.schema';
import { BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema } from './BenefitPackageMedicalServiceCategoryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType =
    z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryUncheckedCreateNestedManyWithoutMedicalServiceCategoryInput>;
export const BenefitPackageMedicalServiceCategoryUncheckedCreateNestedManyWithoutMedicalServiceCategoryInputObjectSchema: SchemaType =
    z
        .object({
            create: z
                .union([
                    z.lazy(
                        () => BenefitPackageMedicalServiceCategoryCreateWithoutMedicalServiceCategoryInputObjectSchema,
                    ),
                    z
                        .lazy(
                            () =>
                                BenefitPackageMedicalServiceCategoryCreateWithoutMedicalServiceCategoryInputObjectSchema,
                        )
                        .array(),
                    z.lazy(
                        () =>
                            BenefitPackageMedicalServiceCategoryUncheckedCreateWithoutMedicalServiceCategoryInputObjectSchema,
                    ),
                    z
                        .lazy(
                            () =>
                                BenefitPackageMedicalServiceCategoryUncheckedCreateWithoutMedicalServiceCategoryInputObjectSchema,
                        )
                        .array(),
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(
                        () =>
                            BenefitPackageMedicalServiceCategoryCreateOrConnectWithoutMedicalServiceCategoryInputObjectSchema,
                    ),
                    z
                        .lazy(
                            () =>
                                BenefitPackageMedicalServiceCategoryCreateOrConnectWithoutMedicalServiceCategoryInputObjectSchema,
                        )
                        .array(),
                ])
                .optional(),
            createMany: z
                .lazy(
                    () => BenefitPackageMedicalServiceCategoryCreateManyMedicalServiceCategoryInputEnvelopeObjectSchema,
                )
                .optional(),
            connect: z
                .union([
                    z.lazy(() => BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema),
                    z.lazy(() => BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema).array(),
                ])
                .optional(),
        })
        .strict() as SchemaType;
