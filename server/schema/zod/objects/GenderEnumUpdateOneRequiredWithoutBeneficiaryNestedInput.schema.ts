/* eslint-disable */
import { z } from 'zod';
import { GenderEnumCreateWithoutBeneficiaryInputObjectSchema } from './GenderEnumCreateWithoutBeneficiaryInput.schema';
import { GenderEnumUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './GenderEnumUncheckedCreateWithoutBeneficiaryInput.schema';
import { GenderEnumCreateOrConnectWithoutBeneficiaryInputObjectSchema } from './GenderEnumCreateOrConnectWithoutBeneficiaryInput.schema';
import { GenderEnumUpsertWithoutBeneficiaryInputObjectSchema } from './GenderEnumUpsertWithoutBeneficiaryInput.schema';
import { GenderEnumWhereUniqueInputObjectSchema } from './GenderEnumWhereUniqueInput.schema';
import { GenderEnumUpdateToOneWithWhereWithoutBeneficiaryInputObjectSchema } from './GenderEnumUpdateToOneWithWhereWithoutBeneficiaryInput.schema';
import { GenderEnumUpdateWithoutBeneficiaryInputObjectSchema } from './GenderEnumUpdateWithoutBeneficiaryInput.schema';
import { GenderEnumUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './GenderEnumUncheckedUpdateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.GenderEnumUpdateOneRequiredWithoutBeneficiaryNestedInput>;
export const GenderEnumUpdateOneRequiredWithoutBeneficiaryNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => GenderEnumCreateWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => GenderEnumUncheckedCreateWithoutBeneficiaryInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => GenderEnumCreateOrConnectWithoutBeneficiaryInputObjectSchema).optional(),
        upsert: z.lazy(() => GenderEnumUpsertWithoutBeneficiaryInputObjectSchema).optional(),
        connect: z.lazy(() => GenderEnumWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => GenderEnumUpdateToOneWithWhereWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => GenderEnumUpdateWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => GenderEnumUncheckedUpdateWithoutBeneficiaryInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
