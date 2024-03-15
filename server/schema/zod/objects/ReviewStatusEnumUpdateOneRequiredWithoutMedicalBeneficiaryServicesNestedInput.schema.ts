/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusEnumCreateWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumCreateWithoutMedicalBeneficiaryServicesInput.schema';
import { ReviewStatusEnumUncheckedCreateWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUncheckedCreateWithoutMedicalBeneficiaryServicesInput.schema';
import { ReviewStatusEnumCreateOrConnectWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumCreateOrConnectWithoutMedicalBeneficiaryServicesInput.schema';
import { ReviewStatusEnumUpsertWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUpsertWithoutMedicalBeneficiaryServicesInput.schema';
import { ReviewStatusEnumWhereUniqueInputObjectSchema } from './ReviewStatusEnumWhereUniqueInput.schema';
import { ReviewStatusEnumUpdateToOneWithWhereWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUpdateToOneWithWhereWithoutMedicalBeneficiaryServicesInput.schema';
import { ReviewStatusEnumUpdateWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUpdateWithoutMedicalBeneficiaryServicesInput.schema';
import { ReviewStatusEnumUncheckedUpdateWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUncheckedUpdateWithoutMedicalBeneficiaryServicesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusEnumUpdateOneRequiredWithoutMedicalBeneficiaryServicesNestedInput>;
export const ReviewStatusEnumUpdateOneRequiredWithoutMedicalBeneficiaryServicesNestedInputObjectSchema: SchemaType = z
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
        upsert: z.lazy(() => ReviewStatusEnumUpsertWithoutMedicalBeneficiaryServicesInputObjectSchema).optional(),
        connect: z.lazy(() => ReviewStatusEnumWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => ReviewStatusEnumUpdateToOneWithWhereWithoutMedicalBeneficiaryServicesInputObjectSchema),
                z.lazy(() => ReviewStatusEnumUpdateWithoutMedicalBeneficiaryServicesInputObjectSchema),
                z.lazy(() => ReviewStatusEnumUncheckedUpdateWithoutMedicalBeneficiaryServicesInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
