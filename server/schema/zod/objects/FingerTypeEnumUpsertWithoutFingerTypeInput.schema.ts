/* eslint-disable */
import { z } from 'zod';
import { FingerTypeEnumUpdateWithoutFingerTypeInputObjectSchema } from './FingerTypeEnumUpdateWithoutFingerTypeInput.schema';
import { FingerTypeEnumUncheckedUpdateWithoutFingerTypeInputObjectSchema } from './FingerTypeEnumUncheckedUpdateWithoutFingerTypeInput.schema';
import { FingerTypeEnumCreateWithoutFingerTypeInputObjectSchema } from './FingerTypeEnumCreateWithoutFingerTypeInput.schema';
import { FingerTypeEnumUncheckedCreateWithoutFingerTypeInputObjectSchema } from './FingerTypeEnumUncheckedCreateWithoutFingerTypeInput.schema';
import { FingerTypeEnumWhereInputObjectSchema } from './FingerTypeEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerTypeEnumUpsertWithoutFingerTypeInput>;
export const FingerTypeEnumUpsertWithoutFingerTypeInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => FingerTypeEnumUpdateWithoutFingerTypeInputObjectSchema),
            z.lazy(() => FingerTypeEnumUncheckedUpdateWithoutFingerTypeInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => FingerTypeEnumCreateWithoutFingerTypeInputObjectSchema),
            z.lazy(() => FingerTypeEnumUncheckedCreateWithoutFingerTypeInputObjectSchema),
        ]),
        where: z.lazy(() => FingerTypeEnumWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
