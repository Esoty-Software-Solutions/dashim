/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusEnumCreateWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumCreateWithoutMedicalBeneficiaryServicesInput.schema';
import { ReviewStatusEnumUncheckedCreateWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUncheckedCreateWithoutMedicalBeneficiaryServicesInput.schema';
import { ReviewStatusEnumCreateOrConnectWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumCreateOrConnectWithoutMedicalBeneficiaryServicesInput.schema';
import { ReviewStatusEnumWhereUniqueInputObjectSchema } from './ReviewStatusEnumWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusEnumCreateNestedOneWithoutMedicalBeneficiaryServicesInput>;
export const ReviewStatusEnumCreateNestedOneWithoutMedicalBeneficiaryServicesInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => ReviewStatusEnumCreateWithoutMedicalBeneficiaryServicesInputObjectSchema),
                z.lazy(() => ReviewStatusEnumUncheckedCreateWithoutMedicalBeneficiaryServicesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => ReviewStatusEnumCreateOrConnectWithoutMedicalBeneficiaryServicesInputObjectSchema)
            .optional(),
        connect: z.lazy(() => ReviewStatusEnumWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
