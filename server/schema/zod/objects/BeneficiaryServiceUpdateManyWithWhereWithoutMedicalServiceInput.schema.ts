/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceScalarWhereInputObjectSchema } from './BeneficiaryServiceScalarWhereInput.schema';
import { BeneficiaryServiceUpdateManyMutationInputObjectSchema } from './BeneficiaryServiceUpdateManyMutationInput.schema';
import { BeneficiaryServiceUncheckedUpdateManyWithoutMedicalServiceInputObjectSchema } from './BeneficiaryServiceUncheckedUpdateManyWithoutMedicalServiceInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceUpdateManyWithWhereWithoutMedicalServiceInput>;
export const BeneficiaryServiceUpdateManyWithWhereWithoutMedicalServiceInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryServiceScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryServiceUpdateManyMutationInputObjectSchema),
            z.lazy(() => BeneficiaryServiceUncheckedUpdateManyWithoutMedicalServiceInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
