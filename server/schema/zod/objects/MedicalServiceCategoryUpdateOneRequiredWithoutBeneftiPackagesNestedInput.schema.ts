/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceCategoryCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryCreateWithoutBeneftiPackagesInput.schema';
import { MedicalServiceCategoryUncheckedCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryUncheckedCreateWithoutBeneftiPackagesInput.schema';
import { MedicalServiceCategoryCreateOrConnectWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryCreateOrConnectWithoutBeneftiPackagesInput.schema';
import { MedicalServiceCategoryUpsertWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryUpsertWithoutBeneftiPackagesInput.schema';
import { MedicalServiceCategoryWhereUniqueInputObjectSchema } from './MedicalServiceCategoryWhereUniqueInput.schema';
import { MedicalServiceCategoryUpdateToOneWithWhereWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryUpdateToOneWithWhereWithoutBeneftiPackagesInput.schema';
import { MedicalServiceCategoryUpdateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryUpdateWithoutBeneftiPackagesInput.schema';
import { MedicalServiceCategoryUncheckedUpdateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryUncheckedUpdateWithoutBeneftiPackagesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCategoryUpdateOneRequiredWithoutBeneftiPackagesNestedInput>;
export const MedicalServiceCategoryUpdateOneRequiredWithoutBeneftiPackagesNestedInputObjectSchema: SchemaType = z
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
        upsert: z.lazy(() => MedicalServiceCategoryUpsertWithoutBeneftiPackagesInputObjectSchema).optional(),
        connect: z.lazy(() => MedicalServiceCategoryWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => MedicalServiceCategoryUpdateToOneWithWhereWithoutBeneftiPackagesInputObjectSchema),
                z.lazy(() => MedicalServiceCategoryUpdateWithoutBeneftiPackagesInputObjectSchema),
                z.lazy(() => MedicalServiceCategoryUncheckedUpdateWithoutBeneftiPackagesInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
