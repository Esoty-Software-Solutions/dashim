/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusEnumWhereInputObjectSchema } from './ReviewStatusEnumWhereInput.schema';
import { ReviewStatusEnumUpdateWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUpdateWithoutMedicalBeneficiaryServicesInput.schema';
import { ReviewStatusEnumUncheckedUpdateWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUncheckedUpdateWithoutMedicalBeneficiaryServicesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusEnumUpdateToOneWithWhereWithoutMedicalBeneficiaryServicesInput>;
export const ReviewStatusEnumUpdateToOneWithWhereWithoutMedicalBeneficiaryServicesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => ReviewStatusEnumWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => ReviewStatusEnumUpdateWithoutMedicalBeneficiaryServicesInputObjectSchema),
            z.lazy(() => ReviewStatusEnumUncheckedUpdateWithoutMedicalBeneficiaryServicesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
