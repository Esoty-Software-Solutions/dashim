/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceCategoryCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryCreateWithoutBeneftiPackagesInput.schema';
import { MedicalServiceCategoryUncheckedCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryUncheckedCreateWithoutBeneftiPackagesInput.schema';
import { MedicalServiceCategoryCreateOrConnectWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryCreateOrConnectWithoutBeneftiPackagesInput.schema';
import { MedicalServiceCategoryWhereUniqueInputObjectSchema } from './MedicalServiceCategoryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCategoryCreateNestedOneWithoutBeneftiPackagesInput>;
export const MedicalServiceCategoryCreateNestedOneWithoutBeneftiPackagesInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => MedicalServiceCategoryCreateWithoutBeneftiPackagesInputObjectSchema),
                z.lazy(() => MedicalServiceCategoryUncheckedCreateWithoutBeneftiPackagesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => MedicalServiceCategoryCreateOrConnectWithoutBeneftiPackagesInputObjectSchema)
            .optional(),
        connect: z.lazy(() => MedicalServiceCategoryWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
