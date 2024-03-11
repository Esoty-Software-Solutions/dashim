/* eslint-disable */
import { z } from 'zod';
import { GenderEnumWhereInputObjectSchema } from './GenderEnumWhereInput.schema';
import { GenderEnumUpdateWithoutBeneficiaryInputObjectSchema } from './GenderEnumUpdateWithoutBeneficiaryInput.schema';
import { GenderEnumUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './GenderEnumUncheckedUpdateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.GenderEnumUpdateToOneWithWhereWithoutBeneficiaryInput>;
export const GenderEnumUpdateToOneWithWhereWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => GenderEnumWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => GenderEnumUpdateWithoutBeneficiaryInputObjectSchema),
            z.lazy(() => GenderEnumUncheckedUpdateWithoutBeneficiaryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
