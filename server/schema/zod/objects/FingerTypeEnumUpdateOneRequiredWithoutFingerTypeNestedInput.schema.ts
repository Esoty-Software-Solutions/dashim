/* eslint-disable */
import { z } from 'zod';
import { FingerTypeEnumCreateWithoutFingerTypeInputObjectSchema } from './FingerTypeEnumCreateWithoutFingerTypeInput.schema';
import { FingerTypeEnumUncheckedCreateWithoutFingerTypeInputObjectSchema } from './FingerTypeEnumUncheckedCreateWithoutFingerTypeInput.schema';
import { FingerTypeEnumCreateOrConnectWithoutFingerTypeInputObjectSchema } from './FingerTypeEnumCreateOrConnectWithoutFingerTypeInput.schema';
import { FingerTypeEnumUpsertWithoutFingerTypeInputObjectSchema } from './FingerTypeEnumUpsertWithoutFingerTypeInput.schema';
import { FingerTypeEnumWhereUniqueInputObjectSchema } from './FingerTypeEnumWhereUniqueInput.schema';
import { FingerTypeEnumUpdateToOneWithWhereWithoutFingerTypeInputObjectSchema } from './FingerTypeEnumUpdateToOneWithWhereWithoutFingerTypeInput.schema';
import { FingerTypeEnumUpdateWithoutFingerTypeInputObjectSchema } from './FingerTypeEnumUpdateWithoutFingerTypeInput.schema';
import { FingerTypeEnumUncheckedUpdateWithoutFingerTypeInputObjectSchema } from './FingerTypeEnumUncheckedUpdateWithoutFingerTypeInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerTypeEnumUpdateOneRequiredWithoutFingerTypeNestedInput>;
export const FingerTypeEnumUpdateOneRequiredWithoutFingerTypeNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => FingerTypeEnumCreateWithoutFingerTypeInputObjectSchema),
                z.lazy(() => FingerTypeEnumUncheckedCreateWithoutFingerTypeInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => FingerTypeEnumCreateOrConnectWithoutFingerTypeInputObjectSchema).optional(),
        upsert: z.lazy(() => FingerTypeEnumUpsertWithoutFingerTypeInputObjectSchema).optional(),
        connect: z.lazy(() => FingerTypeEnumWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => FingerTypeEnumUpdateToOneWithWhereWithoutFingerTypeInputObjectSchema),
                z.lazy(() => FingerTypeEnumUpdateWithoutFingerTypeInputObjectSchema),
                z.lazy(() => FingerTypeEnumUncheckedUpdateWithoutFingerTypeInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
