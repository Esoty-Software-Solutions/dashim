/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageMedicalServiceCategoryCreateWithoutMedicalServiceCategoryInputObjectSchema } from './BenefitPackageMedicalServiceCategoryCreateWithoutMedicalServiceCategoryInput.schema';
import { BenefitPackageMedicalServiceCategoryUncheckedCreateWithoutMedicalServiceCategoryInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUncheckedCreateWithoutMedicalServiceCategoryInput.schema';
import { BenefitPackageMedicalServiceCategoryCreateOrConnectWithoutMedicalServiceCategoryInputObjectSchema } from './BenefitPackageMedicalServiceCategoryCreateOrConnectWithoutMedicalServiceCategoryInput.schema';
import { BenefitPackageMedicalServiceCategoryUpsertWithWhereUniqueWithoutMedicalServiceCategoryInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUpsertWithWhereUniqueWithoutMedicalServiceCategoryInput.schema';
import { BenefitPackageMedicalServiceCategoryCreateManyMedicalServiceCategoryInputEnvelopeObjectSchema } from './BenefitPackageMedicalServiceCategoryCreateManyMedicalServiceCategoryInputEnvelope.schema';
import { BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema } from './BenefitPackageMedicalServiceCategoryWhereUniqueInput.schema';
import { BenefitPackageMedicalServiceCategoryUpdateWithWhereUniqueWithoutMedicalServiceCategoryInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUpdateWithWhereUniqueWithoutMedicalServiceCategoryInput.schema';
import { BenefitPackageMedicalServiceCategoryUpdateManyWithWhereWithoutMedicalServiceCategoryInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUpdateManyWithWhereWithoutMedicalServiceCategoryInput.schema';
import { BenefitPackageMedicalServiceCategoryScalarWhereInputObjectSchema } from './BenefitPackageMedicalServiceCategoryScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType =
    z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryUncheckedUpdateManyWithoutMedicalServiceCategoryNestedInput>;
export const BenefitPackageMedicalServiceCategoryUncheckedUpdateManyWithoutMedicalServiceCategoryNestedInputObjectSchema: SchemaType =
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
            upsert: z
                .union([
                    z.lazy(
                        () =>
                            BenefitPackageMedicalServiceCategoryUpsertWithWhereUniqueWithoutMedicalServiceCategoryInputObjectSchema,
                    ),
                    z
                        .lazy(
                            () =>
                                BenefitPackageMedicalServiceCategoryUpsertWithWhereUniqueWithoutMedicalServiceCategoryInputObjectSchema,
                        )
                        .array(),
                ])
                .optional(),
            createMany: z
                .lazy(
                    () => BenefitPackageMedicalServiceCategoryCreateManyMedicalServiceCategoryInputEnvelopeObjectSchema,
                )
                .optional(),
            set: z
                .union([
                    z.lazy(() => BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema),
                    z.lazy(() => BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema).array(),
                ])
                .optional(),
            disconnect: z
                .union([
                    z.lazy(() => BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema),
                    z.lazy(() => BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema).array(),
                ])
                .optional(),
            delete: z
                .union([
                    z.lazy(() => BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema),
                    z.lazy(() => BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema).array(),
                ])
                .optional(),
            connect: z
                .union([
                    z.lazy(() => BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema),
                    z.lazy(() => BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema).array(),
                ])
                .optional(),
            update: z
                .union([
                    z.lazy(
                        () =>
                            BenefitPackageMedicalServiceCategoryUpdateWithWhereUniqueWithoutMedicalServiceCategoryInputObjectSchema,
                    ),
                    z
                        .lazy(
                            () =>
                                BenefitPackageMedicalServiceCategoryUpdateWithWhereUniqueWithoutMedicalServiceCategoryInputObjectSchema,
                        )
                        .array(),
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(
                        () =>
                            BenefitPackageMedicalServiceCategoryUpdateManyWithWhereWithoutMedicalServiceCategoryInputObjectSchema,
                    ),
                    z
                        .lazy(
                            () =>
                                BenefitPackageMedicalServiceCategoryUpdateManyWithWhereWithoutMedicalServiceCategoryInputObjectSchema,
                        )
                        .array(),
                ])
                .optional(),
            deleteMany: z
                .union([
                    z.lazy(() => BenefitPackageMedicalServiceCategoryScalarWhereInputObjectSchema),
                    z.lazy(() => BenefitPackageMedicalServiceCategoryScalarWhereInputObjectSchema).array(),
                ])
                .optional(),
        })
        .strict() as SchemaType;
