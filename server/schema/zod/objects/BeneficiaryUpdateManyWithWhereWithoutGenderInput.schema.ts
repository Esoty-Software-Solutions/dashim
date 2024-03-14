/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryScalarWhereInputObjectSchema } from './BeneficiaryScalarWhereInput.schema';
import { BeneficiaryUpdateManyMutationInputObjectSchema } from './BeneficiaryUpdateManyMutationInput.schema';
import { BeneficiaryUncheckedUpdateManyWithoutGenderInputObjectSchema } from './BeneficiaryUncheckedUpdateManyWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpdateManyWithWhereWithoutGenderInput>;
export const BeneficiaryUpdateManyWithWhereWithoutGenderInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryUpdateManyMutationInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedUpdateManyWithoutGenderInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
