/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusEnumUpdateWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUpdateWithoutMedicalBeneficiaryServicesInput.schema';
import { ReviewStatusEnumUncheckedUpdateWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUncheckedUpdateWithoutMedicalBeneficiaryServicesInput.schema';
import { ReviewStatusEnumCreateWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumCreateWithoutMedicalBeneficiaryServicesInput.schema';
import { ReviewStatusEnumUncheckedCreateWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUncheckedCreateWithoutMedicalBeneficiaryServicesInput.schema';
import { ReviewStatusEnumWhereInputObjectSchema } from './ReviewStatusEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusEnumUpsertWithoutMedicalBeneficiaryServicesInput>;
export const ReviewStatusEnumUpsertWithoutMedicalBeneficiaryServicesInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => ReviewStatusEnumUpdateWithoutMedicalBeneficiaryServicesInputObjectSchema),
            z.lazy(() => ReviewStatusEnumUncheckedUpdateWithoutMedicalBeneficiaryServicesInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => ReviewStatusEnumCreateWithoutMedicalBeneficiaryServicesInputObjectSchema),
            z.lazy(() => ReviewStatusEnumUncheckedCreateWithoutMedicalBeneficiaryServicesInputObjectSchema),
        ]),
        where: z.lazy(() => ReviewStatusEnumWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
