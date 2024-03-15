/* eslint-disable */
import { z } from 'zod';
import { FingerTypeEnumWhereInputObjectSchema } from './FingerTypeEnumWhereInput.schema';
import { FingerTypeEnumUpdateWithoutFingerTypeInputObjectSchema } from './FingerTypeEnumUpdateWithoutFingerTypeInput.schema';
import { FingerTypeEnumUncheckedUpdateWithoutFingerTypeInputObjectSchema } from './FingerTypeEnumUncheckedUpdateWithoutFingerTypeInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerTypeEnumUpdateToOneWithWhereWithoutFingerTypeInput>;
export const FingerTypeEnumUpdateToOneWithWhereWithoutFingerTypeInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => FingerTypeEnumWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => FingerTypeEnumUpdateWithoutFingerTypeInputObjectSchema),
            z.lazy(() => FingerTypeEnumUncheckedUpdateWithoutFingerTypeInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
