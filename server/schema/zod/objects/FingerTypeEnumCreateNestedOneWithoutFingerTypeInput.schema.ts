/* eslint-disable */
import { z } from 'zod';
import { FingerTypeEnumCreateWithoutFingerTypeInputObjectSchema } from './FingerTypeEnumCreateWithoutFingerTypeInput.schema';
import { FingerTypeEnumUncheckedCreateWithoutFingerTypeInputObjectSchema } from './FingerTypeEnumUncheckedCreateWithoutFingerTypeInput.schema';
import { FingerTypeEnumCreateOrConnectWithoutFingerTypeInputObjectSchema } from './FingerTypeEnumCreateOrConnectWithoutFingerTypeInput.schema';
import { FingerTypeEnumWhereUniqueInputObjectSchema } from './FingerTypeEnumWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerTypeEnumCreateNestedOneWithoutFingerTypeInput>;
export const FingerTypeEnumCreateNestedOneWithoutFingerTypeInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => FingerTypeEnumCreateWithoutFingerTypeInputObjectSchema),
                z.lazy(() => FingerTypeEnumUncheckedCreateWithoutFingerTypeInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => FingerTypeEnumCreateOrConnectWithoutFingerTypeInputObjectSchema).optional(),
        connect: z.lazy(() => FingerTypeEnumWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
