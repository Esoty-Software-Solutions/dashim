/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceCategoryWhereUniqueInputObjectSchema } from './MedicalServiceCategoryWhereUniqueInput.schema';
import { MedicalServiceCategoryCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryCreateWithoutBeneftiPackagesInput.schema';
import { MedicalServiceCategoryUncheckedCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryUncheckedCreateWithoutBeneftiPackagesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCategoryCreateOrConnectWithoutBeneftiPackagesInput>;
export const MedicalServiceCategoryCreateOrConnectWithoutBeneftiPackagesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => MedicalServiceCategoryWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => MedicalServiceCategoryCreateWithoutBeneftiPackagesInputObjectSchema),
            z.lazy(() => MedicalServiceCategoryUncheckedCreateWithoutBeneftiPackagesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
