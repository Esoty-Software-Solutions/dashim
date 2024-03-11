/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';
import { BeneficiaryServiceUpdateWithoutMedicalServiceInputObjectSchema } from './BeneficiaryServiceUpdateWithoutMedicalServiceInput.schema';
import { BeneficiaryServiceUncheckedUpdateWithoutMedicalServiceInputObjectSchema } from './BeneficiaryServiceUncheckedUpdateWithoutMedicalServiceInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceUpdateWithWhereUniqueWithoutMedicalServiceInput>;
export const BeneficiaryServiceUpdateWithWhereUniqueWithoutMedicalServiceInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryServiceUpdateWithoutMedicalServiceInputObjectSchema),
            z.lazy(() => BeneficiaryServiceUncheckedUpdateWithoutMedicalServiceInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
