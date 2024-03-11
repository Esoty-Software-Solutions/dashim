/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageMedicalServiceCategoryCreateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceCategoryCreateWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalServiceCategoryUncheckedCreateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUncheckedCreateWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalServiceCategoryCreateOrConnectWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceCategoryCreateOrConnectWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalServiceCategoryUpsertWithWhereUniqueWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUpsertWithWhereUniqueWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalServiceCategoryCreateManyBenefitPackageInputEnvelopeObjectSchema } from './BenefitPackageMedicalServiceCategoryCreateManyBenefitPackageInputEnvelope.schema';
import { BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema } from './BenefitPackageMedicalServiceCategoryWhereUniqueInput.schema';
import { BenefitPackageMedicalServiceCategoryUpdateWithWhereUniqueWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUpdateWithWhereUniqueWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalServiceCategoryUpdateManyWithWhereWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUpdateManyWithWhereWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalServiceCategoryScalarWhereInputObjectSchema } from './BenefitPackageMedicalServiceCategoryScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType =
    z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryUncheckedUpdateManyWithoutBenefitPackageNestedInput>;
export const BenefitPackageMedicalServiceCategoryUncheckedUpdateManyWithoutBenefitPackageNestedInputObjectSchema: SchemaType =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => BenefitPackageMedicalServiceCategoryCreateWithoutBenefitPackageInputObjectSchema),
                    z
                        .lazy(() => BenefitPackageMedicalServiceCategoryCreateWithoutBenefitPackageInputObjectSchema)
                        .array(),
                    z.lazy(
                        () => BenefitPackageMedicalServiceCategoryUncheckedCreateWithoutBenefitPackageInputObjectSchema,
                    ),
                    z
                        .lazy(
                            () =>
                                BenefitPackageMedicalServiceCategoryUncheckedCreateWithoutBenefitPackageInputObjectSchema,
                        )
                        .array(),
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(
                        () => BenefitPackageMedicalServiceCategoryCreateOrConnectWithoutBenefitPackageInputObjectSchema,
                    ),
                    z
                        .lazy(
                            () =>
                                BenefitPackageMedicalServiceCategoryCreateOrConnectWithoutBenefitPackageInputObjectSchema,
                        )
                        .array(),
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(
                        () =>
                            BenefitPackageMedicalServiceCategoryUpsertWithWhereUniqueWithoutBenefitPackageInputObjectSchema,
                    ),
                    z
                        .lazy(
                            () =>
                                BenefitPackageMedicalServiceCategoryUpsertWithWhereUniqueWithoutBenefitPackageInputObjectSchema,
                        )
                        .array(),
                ])
                .optional(),
            createMany: z
                .lazy(() => BenefitPackageMedicalServiceCategoryCreateManyBenefitPackageInputEnvelopeObjectSchema)
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
                            BenefitPackageMedicalServiceCategoryUpdateWithWhereUniqueWithoutBenefitPackageInputObjectSchema,
                    ),
                    z
                        .lazy(
                            () =>
                                BenefitPackageMedicalServiceCategoryUpdateWithWhereUniqueWithoutBenefitPackageInputObjectSchema,
                        )
                        .array(),
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(
                        () =>
                            BenefitPackageMedicalServiceCategoryUpdateManyWithWhereWithoutBenefitPackageInputObjectSchema,
                    ),
                    z
                        .lazy(
                            () =>
                                BenefitPackageMedicalServiceCategoryUpdateManyWithWhereWithoutBenefitPackageInputObjectSchema,
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
