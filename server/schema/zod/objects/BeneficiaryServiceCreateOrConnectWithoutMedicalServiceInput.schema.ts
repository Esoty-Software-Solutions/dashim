/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';
import { BeneficiaryServiceCreateWithoutMedicalServiceInputObjectSchema } from './BeneficiaryServiceCreateWithoutMedicalServiceInput.schema';
import { BeneficiaryServiceUncheckedCreateWithoutMedicalServiceInputObjectSchema } from './BeneficiaryServiceUncheckedCreateWithoutMedicalServiceInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceCreateOrConnectWithoutMedicalServiceInput>;
export const BeneficiaryServiceCreateOrConnectWithoutMedicalServiceInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => BeneficiaryServiceCreateWithoutMedicalServiceInputObjectSchema),
            z.lazy(() => BeneficiaryServiceUncheckedCreateWithoutMedicalServiceInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
