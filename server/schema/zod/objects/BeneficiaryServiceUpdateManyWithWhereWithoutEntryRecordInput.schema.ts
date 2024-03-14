/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceScalarWhereInputObjectSchema } from './BeneficiaryServiceScalarWhereInput.schema';
import { BeneficiaryServiceUpdateManyMutationInputObjectSchema } from './BeneficiaryServiceUpdateManyMutationInput.schema';
import { BeneficiaryServiceUncheckedUpdateManyWithoutEntryRecordInputObjectSchema } from './BeneficiaryServiceUncheckedUpdateManyWithoutEntryRecordInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceUpdateManyWithWhereWithoutEntryRecordInput>;
export const BeneficiaryServiceUpdateManyWithWhereWithoutEntryRecordInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryServiceScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryServiceUpdateManyMutationInputObjectSchema),
            z.lazy(() => BeneficiaryServiceUncheckedUpdateManyWithoutEntryRecordInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
