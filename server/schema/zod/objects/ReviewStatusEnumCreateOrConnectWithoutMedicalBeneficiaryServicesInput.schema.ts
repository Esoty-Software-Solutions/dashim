/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusEnumWhereUniqueInputObjectSchema } from './ReviewStatusEnumWhereUniqueInput.schema';
import { ReviewStatusEnumCreateWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumCreateWithoutMedicalBeneficiaryServicesInput.schema';
import { ReviewStatusEnumUncheckedCreateWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUncheckedCreateWithoutMedicalBeneficiaryServicesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusEnumCreateOrConnectWithoutMedicalBeneficiaryServicesInput>;
export const ReviewStatusEnumCreateOrConnectWithoutMedicalBeneficiaryServicesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => ReviewStatusEnumWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => ReviewStatusEnumCreateWithoutMedicalBeneficiaryServicesInputObjectSchema),
            z.lazy(() => ReviewStatusEnumUncheckedCreateWithoutMedicalBeneficiaryServicesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
