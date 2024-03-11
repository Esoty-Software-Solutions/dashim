/* eslint-disable */
import { z } from 'zod';
import { FingerTypeEnumWhereUniqueInputObjectSchema } from './FingerTypeEnumWhereUniqueInput.schema';
import { FingerTypeEnumCreateWithoutFingerTypeInputObjectSchema } from './FingerTypeEnumCreateWithoutFingerTypeInput.schema';
import { FingerTypeEnumUncheckedCreateWithoutFingerTypeInputObjectSchema } from './FingerTypeEnumUncheckedCreateWithoutFingerTypeInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerTypeEnumCreateOrConnectWithoutFingerTypeInput>;
export const FingerTypeEnumCreateOrConnectWithoutFingerTypeInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => FingerTypeEnumWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => FingerTypeEnumCreateWithoutFingerTypeInputObjectSchema),
            z.lazy(() => FingerTypeEnumUncheckedCreateWithoutFingerTypeInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
