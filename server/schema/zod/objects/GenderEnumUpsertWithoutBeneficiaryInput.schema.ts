/* eslint-disable */
import { z } from 'zod';
import { GenderEnumUpdateWithoutBeneficiaryInputObjectSchema } from './GenderEnumUpdateWithoutBeneficiaryInput.schema';
import { GenderEnumUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './GenderEnumUncheckedUpdateWithoutBeneficiaryInput.schema';
import { GenderEnumCreateWithoutBeneficiaryInputObjectSchema } from './GenderEnumCreateWithoutBeneficiaryInput.schema';
import { GenderEnumUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './GenderEnumUncheckedCreateWithoutBeneficiaryInput.schema';
import { GenderEnumWhereInputObjectSchema } from './GenderEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.GenderEnumUpsertWithoutBeneficiaryInput>;
export const GenderEnumUpsertWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => GenderEnumUpdateWithoutBeneficiaryInputObjectSchema),
            z.lazy(() => GenderEnumUncheckedUpdateWithoutBeneficiaryInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => GenderEnumCreateWithoutBeneficiaryInputObjectSchema),
            z.lazy(() => GenderEnumUncheckedCreateWithoutBeneficiaryInputObjectSchema),
        ]),
        where: z.lazy(() => GenderEnumWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
